<template>
  <div lass="flex flex-center">
    <q-btn class="q-ma-md" @click="getContacts" label="获取定位信息"/>
    <div class="q-ma-md" >定位信息: {{IMEI}}</div>
    <q-separator />
    <q-chip class="q-ma-md" color="grey" text-color="white">
        监听定位信息
    </q-chip>
    <div class="q-ma-md">定位信息:{{WIMEI}}</div>
    <div class="q-ma-md">{{infos}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      IMEI: '',
      WIMEI: '',
      watchID: '',
      infos: window.origin
    }
  },
  methods: {
    getContacts () {
      // 获取列表
      navigator.geolocation.getCurrentPosition((position) => {
        this.IMEI = 'Latitude: ' + position.coords.latitude + '\n' +
              'Longitude: ' + position.coords.longitude + '\n' +
              'Altitude: ' + position.coords.altitude + '\n' +
              'Accuracy: ' + position.coords.accuracy + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
              'Heading: ' + position.coords.heading + '\n' +
              'Speed: ' + position.coords.speed + '\n' +
              'Timestamp: ' + position.timestamp + '\n'
      }, (error) => {
        this.IMEI = 'code: ' + error.code + '\n' +
              'message: ' + error.message + '\n'
      })
    }
  },
  mounted () {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.WIMEI = 'Latitude: ' + position.coords.latitude + '||||' + 'Longitude: ' + position.coords.longitude + '|||'
    }, (error) => {
      this.WIMEI = 'code: ' + error.code + '\n' + 'message: ' + error.message + '\n'
    }, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true })
  },
  destroyed () {
    navigator.geolocation.clearWatch(this.watchID)
  }
}
</script>
