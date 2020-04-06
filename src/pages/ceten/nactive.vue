<template>
  <div class="column items-center" >
    <div>
      <q-btn size="28px" round label="电池" class="shadow-3 q-ma-md" color="red" to="/nact/battery" />
      <q-btn size="28px" round label="相机" class="shadow-3 q-ma-md" color="pink" to="/nact/camera" />
      <q-btn size="28px" round label="设备" class="shadow-3 q-ma-md" color="purple" to="/nact/device" />
      <q-btn size="28px" round label="联系人" class="text-subtitle2 shadow-3 q-ma-md" color="deep-purple" to="/nact/contacts" />
      <q-btn size="28px" round label="运动方向" class="text-caption shadow-3 q-ma-md q-pa-xs" color="indigo" to="/nact/motion" />
      <q-btn size="28px" round label="定位" class="shadow-3 q-ma-md" color="blue" to="/nact/geolocation" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="light-blue" to="/nact/sql" />
      <q-btn size="28px" round label="媒体" class="shadow-3 q-ma-md" color="cyan" to="/nact/media" />
      <q-btn size="28px" round label="文件" class="shadow-3 q-ma-md" color="teal" to="/nact/file" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="green" to="/nact/sql" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="light-green" to="/nact/sql" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="lime" to="/nact/sql" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="yellow" to="/nact/sql" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="amber" to="/nact/sql" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="orange" to="/nact/sql" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="deep-orange" to="/nact/sql" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="brown" to="/nact/sql" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="grey" to="/nact/sql" />
      <q-btn size="28px" round label="sql" class="shadow-3 q-ma-md" color="blue-grey" to="/nact/sql" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inmap: null
    }
  },
  mounted () {
    this.$q.addressbarColor.set('#9c27b0')
  }
}
</script>
