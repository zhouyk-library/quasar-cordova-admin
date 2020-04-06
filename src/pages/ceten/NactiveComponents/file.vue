<template>
  <div lass="flex flex-center">
      <div>当前程序的目录{{$q.cordova.file.applicationDirectory}}</div>
      <div>程序的应用目录{{$q.cordova.file.applicationStorageDirectory}}</div>
      <div>程序的数据目录{{$q.cordova.file.dataDirectory}}</div>
      <div>程序的暂存目录{{$q.cordova.file.cacheDirectory}}</div>
      <div>Android扩展存储应用目录{{$q.cordova.file.externalApplicationStorageDirectory}}</div>
      <div>Android扩展存储数据目录{{$q.cordova.file.externalDataDirectory}}</div>
      <div>Android扩展存储缓存目录{{$q.cordova.file.externalCacheDirectory}}</div>
      <div>Android扩展根目录{{$q.cordova.file.tempDirectory}}</div>
      <q-btn @click="createdFileEvent">创建文件</q-btn>
      <q-btn @click="readFileEvent">获取相册</q-btn>
      <br>
      {{url}}
      <br>
      {{fileData}}
      <br>
      <q-btn @click="getInterlUrl">渲染相册</q-btn>
      <img v-for="(url,index) in intelUrl" style="height: 140px; max-width: 150px" :key="index" :src="url">
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'no url',
      fileData: 'no data',
      allUrl: [],
      intelUrl: []
    }
  },
  methods: {
    getInterlUrl () {
      // on success
      this.allUrl.forEach(url => {
        window.resolveLocalFileSystemURL(url, (entry) => {
          var url = entry.toInternalURL()
          this.intelUrl.push(url)
        })
      })
    },
    readFileEvent () {
      // on success
      // window.FilePath.resolveNativePath(this.url, (url) => {
      //   window.resolveLocalFileSystemURL(url, (entry) => {
      //     entry.file((file) => {
      //       var reader = new FileReader()
      //       reader.onloadend = (data) => {
      //         this.fileData = data.target._result
      //       }
      //       reader.readAsText(file)
      //     },
      //     () => { // on fail
      //       this.$q.notify('Could not read.')
      //     })
      //   })
      // },
      // () => { // on fail
      //   this.$q.notify('Could not read.')
      // })
      window.resolveLocalFileSystemURL('file:///storage/emulated/0/', (entry) => {
        try {
          if (entry.isDirectory) {
            this.readDirectory(entry)
          } else {
            this.readfiles(entry)
          }
        } catch (error) {
          alert(error)
        }
      })
    },
    readDirectory (entry) {
      entry.createReader().readEntries((entries) => {
        if (entries && entries.length > 0) {
          entries.forEach(element => {
            if (element.isDirectory) {
              this.readDirectory(element)
            } else {
              this.readfiles(element)
            }
          })
        }
      }, (error) => { alert(error) })
    },
    readfiles (entry) {
      var url = entry.nativeURL
      if (url.indexOf('.jpg') > -1) {
        this.allUrl.push(url)
      }
    },
    createdFileEvent () {
      alert(JSON.stringify(window.LocalFileSystem))
      window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, (fs) => {
        alert('file system open:' + fs.name)
        console.info(fs)
        fs.root.getFile('test1.txt', {
          create: true,
          exclusive: false
        }, (fileEntry) => {
          alert('fileEntry is file?' + fileEntry.isFile.toString())
          alert('文件地址：' + fileEntry.toURL())
          this.writeFile(fileEntry, null)
        })
      })
    },
    writeFile (fileEntry, dataObj) {
      alert('写入文件开始')
      fileEntry.createWriter((fileWriter) => {
        // 写入结束
        fileWriter.onwriteend = () => {
          alert('写入文件成功')
          // 读取内容
          this.readFile(fileEntry)
        }
        fileWriter.onerror = (e) => {
          alert('写入文件失败:' + e.toString())
        }
        if (!dataObj) {
          dataObj = new Blob(['some file data'], { type: 'text/plain' })
        }
        fileWriter.write(dataObj)
      })
    },
    readFile (fileEntry) {
      fileEntry.file((file) => {
        var reader = new FileReader()
        reader.onloadend = () => {
          alert('读取文件成功：' + reader.result)
          // 显示文件
          alert(Object.keys(fileEntry))
          alert(fileEntry.nativeURL)
          this.url = fileEntry.nativeURL
          alert(fileEntry.fullPath)
        }
        reader.readAsText(file)
      }, () => {
        alert('读取文件失败')
      })
    }
  }
}
</script>
