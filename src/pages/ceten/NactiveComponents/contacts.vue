<template>
  <div lass="flex flex-center">
    <q-btn class="q-ma-md" @click="getContacts" label="获取联系人"/>
    <div class="q-ma-md" >联系人: {{IMEI}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      IMEI: ''
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
  }
}
</script>
