<template>
  <div class="column items-center" >
    <div>
      <q-btn size="28px" round label="地图" class="shadow-3 q-ma-md" color="purple" to="/map" />
      <q-btn size="28px" round label="表格" class="shadow-3 q-ma-md" color="pink" to="/table" />
      <q-btn size="28px" round label="列表" class="shadow-3 q-ma-md" color="red" to="/list" />
    </div>
    <div>
      <q-btn size="28px" round label="表单" class="shadow-3 q-ma-md" color="deep-purple" to="/from" />
      <q-btn size="28px" round label="卡片" class="shadow-3 q-ma-md" color="indigo" to="/card" />
      <q-btn size="28px" round label="本地" class="shadow-3 q-ma-md" color="blue" to="/nactive" />
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
