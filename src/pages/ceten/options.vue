<template>
 <div>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <q-list>
        <template v-for="(item, index) in items">
          <q-slide-item @right="onRight" :key="index">
            <template v-slot:right>
              <q-icon name="done" />
              <q-icon name="alarm" />
            </template>
            <q-item>
              <q-item-section avatar>
              <q-avatar rounded size="52px">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
              </q-avatar>
              </q-item-section>
              <q-item-section no-wrap>
                <q-item-label>三秦巴士</q-item-label>
                <q-item-label caption>国庆返程购票，快上车余票不多了</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label caption>8月21日</q-item-label>
              </q-item-section>
            </q-item>
          </q-slide-item>
          <q-separator :key="'line'+index" spaced inset="item" />
        </template>
      </q-list>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      timer: null
    }
  },
  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    },
    onRight ({ reset }) {
      this.$q.notify('Right action triggered. Resetting in 1 second.')
      this.finalize(reset)
    },
    finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 1000)
    }
  },

  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
<style lang="scss" scoped>
.app-list-item{
  width: 100%;
  height: 68px;
  border-radius: 1%;
  .myborder{
  border-bottom: 2px solid rgba(86, 61, 124, .2);
  }
}
</style>
