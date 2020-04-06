<template>
  <div lass="flex flex-center">
      <div>设备信息: {{IMEI}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // IMEI: ''
      IMEI: window.device === void 0
        ? 'Run this on a mobile/tablet device'
        : window.device
    }
  }
}
</script>
