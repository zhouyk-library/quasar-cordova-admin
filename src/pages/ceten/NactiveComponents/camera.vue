<template>
  <div>
    <q-btn color="primary" label="拍照" @click="captureImage" />
    <q-btn color="primary" label="选择照片" @click="getImage" />
    <img :src="imageSrc" width="200" height="210">
    {{imageSrc}}
    <br>
    {{imageData}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageSrc: '',
      imageData: ''
    }
  },
  methods: {
    captureImage () {
      navigator.camera.getPicture(
        data => { // on success
          window.resolveLocalFileSystemURL(data, (entry) => {
            var url = entry.toInternalURL()
            this.imageSrc = url
            entry.file((file) => {
              var reader = new FileReader()
              reader.onloadend = (data) => {
                this.imageData = data.target._result
              }
              reader.readAsDataURL(file)
            },
            () => { // on fail
              this.$q.notify('Could not access device camera.')
            })
          })
          // this.imageSrc = `data:image/jpeg;base64,${data}`
        },
        () => { // on fail
          this.$q.notify('Could not access device camera.')
        },
        {
          // camera options
          quality: 50
          // destinationType: navigator.camera.DestinationType.DATA_URL
        }
      )
    },
    getImage () {
      navigator.camera.getPicture(
        data => { // on success
          window.FilePath.resolveNativePath(data, (url) => {
            window.resolveLocalFileSystemURL(url, (entry) => {
              var url = entry.toInternalURL()
              this.imageSrc = url
              entry.file((file) => {
                var reader = new FileReader()
                reader.onloadend = (data) => {
                  this.imageData = data.target._result
                }
                reader.readAsDataURL(file)
              },
              () => { // on fail
                this.$q.notify('Could not access device camera.')
              })
            })
          },
          () => { // on fail
            this.$q.notify('Could not access device camera.')
          })
        },
        () => { // on fail
          this.$q.notify('Could not access device camera.')
        },
        {
          // camera options
          quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        }
      )
    }
  }
}
</script>
