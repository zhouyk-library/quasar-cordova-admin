<template>
  <div id="q-app">
    <div class="my-root-path shadow-6">{{$router.currentRoute.fullPath}}</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // this.$q.loadingBar.setDefaults({
    //   color: 'purple',
    //   size: '15px',
    //   position: 'bottom'
    // })
  }
}
</script>
<style>
.my-root-path{
  z-index: 10000;
  position:fixed;
  font-size: 20px;
  background-color: aliceblue;
  bottom: 0px;
}
</style>
