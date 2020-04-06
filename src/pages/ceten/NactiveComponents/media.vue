<template>
  <div lass="flex flex-center">
      <div>
        <q-btn @click="startEvent">播放</q-btn>
        <q-btn @click="pauseEvent">暂停</q-btn>
        <q-btn @click="startEvent">开始</q-btn>
        <q-btn @click="stopEvent">停止</q-btn>
        {{time}}
        <br>
        {{position}}
      </div>
       <q-card>
        <q-linear-progress :value="0.6" color="pink" />
        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">Honor</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>
          <q-space />
          <q-btn flat round icon="fast_rewind" />
          <q-btn flat round icon="pause" />
          <q-btn flat round icon="fast_forward" />
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // IMEI: ''
      media: null,
      time: '',
      position: '',
      mediaTime: null,
      timerDur: null
    }
  },
  methods: {
    playEvent (url) {
      if (this.media) {
        this.stopEvent()
      }
      window.resolveLocalFileSystemURL(url, (entry) => {
        var url = entry.toInternalURL()
        this.media = new window.Media(url, () => {
          console.log('Media成功')
        }, (err) => {
          console.log('Media失败', err)
        }
        )
        this.mediaTime = setInterval(() => {
          // get media amplitude
          this.media.getCurrentPosition(
            // success callback
            (position) => {
              if (position > -1) {
                this.position = position
              }
            },
            // error callback
            (e) => {
              this.position = 'Error getting amp='
            }
          )
        }, 1000)
        this.timerDur = setInterval(() => {
          var dur = this.media.getDuration()
          if (dur > 0) {
            clearInterval(this.timerDur)
            this.time = dur
          }
        }, 500)

        this.media.play()
      },
      () => { // on fail
        this.$q.notify('Could not access device media.')
      })
    },
    pauseEvent () {
      this.media.pause()
    },
    startEvent (url) {
      url = 'file:///storage/emulated/0/anzhuangbao/Honor.mp3'
      if (this.media && !url) {
        this.media.play()
      } else {
        this.playEvent(url)
      }
    },
    stopEvent () {
      this.media.stop()
      this.media.release()
      this.position = 0
      clearInterval(this.mediaTime)
      clearInterval(this.timerDur)
    }
  },
  mounted () {
  },
  destroyed () {
    clearInterval(this.mediaTime)
    clearInterval(this.timerDur)
  }
}
</script>
