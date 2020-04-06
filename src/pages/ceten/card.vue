<template>
  <q-layout view="hHh lPr fff" @scroll="scrollEvent" >
    <q-header elevated flat class="bg-purple-12 text-white">
      <q-toolbar>
        <q-toolbar-title>

          <q-input dark borderless v-model="search" input-class="text-right"  class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
            <template v-slot:before>
              <span class="text-subtitle1">搜索</span>
            </template>
        </q-input>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <q-infinite-scroll @load="onLoad" :offset="250">
          <q-card v-for="(item, index) in items" :key="index" class="q-ma-sm">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label caption>Subhead</q-item-label>
              </q-item-section>
            </q-item>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-actions>
              <div class="column justify-start">
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </div>
            </q-card-actions>
          </q-card>
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots color="primary" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}],
      search: ''
    }
  },
  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    }
  }
}
</script>
