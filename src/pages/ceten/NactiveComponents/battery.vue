<template>
  <div>
    Battery status is: <strong>{{ batteryStatus }}</strong>
  </div>
</template>

<script>
export default {
  data () {
    return {
      batteryStatus: 'determining...'
    }
  },
  methods: {
    updateBatteryStatus (status) {
      this.batteryStatus = `Level: ${status.level}, plugged: ${status.isPlugged}`
    }
  },
  created () {
    // we register the event like on plugin's doc page
    window.addEventListener('batterystatus', this.updateBatteryStatus, false)
  },
  beforeDestroy () {
    // we do some cleanup;
    // we need to remove the event listener
    window.removeEventListener('batterystatus', this.updateBatteryStatus, false)
  }
}
</script>
