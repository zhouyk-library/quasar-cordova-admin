<template>
  <div lass="flex flex-center">
    <q-chip class="q-ma-md" color="grey" text-color="white">
        监听运动方向
    </q-chip>
    <div class="q-ma-md">绕z轴旋转方向[0，360)   :{{alpha}}</div>
    <div class="q-ma-md">绕x轴旋转方向[-180，180):{{beta}}</div>
    <div class="q-ma-md">绕y轴旋转方向[-90，90)  :{{gamma}}</div>
  <q-img src="https://www.w3.org/TR/2016/CR-orientation-event-20160818/start.png"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alpha: '',
      beta: '',
      gamma: ''
    }
  },
  methods: {
    getContacts () {
      // 获取列表
      var contactFileds = ['displayName', 'name', 'phoneNumbers', 'emails', 'address']
      // filter制定为空或不指定返回所有联系人列表
      navigator.contacts.find(contactFileds, (contacts) => {
        // console.info(contacts)
        // var str = ''
        // for (var i = 0; i < contacts.length; i++) {
        //   str += 'Contact[' + i + ']: ' + JSON.stringify(contacts[i]) + '<br />'
        // }
        this.IMEI = contacts
      }, (err) => {
        this.IMEI = JSON.stringify(err)
      }, { filter: '', multiple: true })
    }
  },
  mounted () {
    /**
     * W3设备定向事件规范,无需插件
     * 此版本：
     * https://www.w3.org/TR/2016/CR-orientation-event-20160818/
     * 最新发布版本：
     * https://www.w3.org/TR/orientation-event/
     * 最新编辑草稿：
     * https://w3c.github.io/deviceorientation/spec-source-orientation.html
     * 先前版本：
     * https://www.w3.org/TR/2011/WD-orientation-event-20111201/
     * 编辑：
     * Rich Tibbett，Opera Software ASA
     * Tim Volodine，Google，Inc
     * Google，Inc. Steve Block（至2012年7月）
     * Google公司的Andrei Popescu（至2012年7月）
     */
    window.addEventListener('deviceorientation', (event) => {
      this.alpha = event.alpha
      this.beta = event.beta
      this.gamma = event.gamma
    }, true)
  }
}
</script>
