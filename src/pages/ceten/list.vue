<template>
 <div class="q-pa-xs">
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div v-for="(item, index) in items" :key="index" class="row shadow-2 app-list-item q-my-sm">
        <div class="col-3">
          <q-avatar size="80px" class="q-ma-sm">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </div>
        <div class="col-9 column">
          <div class="col-5 row justify-between">
            <div class="col-2 text-left q-ma-xs">
              <q-chip icon="warning" size="5px">warning</q-chip>
            </div>
            <div class="col-7 text-right q-ma-xs">
              <q-chip icon="event" size="5px">Add to calendar</q-chip>
            </div>
          </div>
          <q-space />
          <div class="col-4 row justify-between">
            <div class="col-3 text-left q-ma-xs">
              <q-btn style="color: red;" dense round flat icon="fas fa-icon_likegood_fill">
                <q-badge color="grey" floating transparent>
                  2
                </q-badge>
              </q-btn>
            </div>
            <div class="col-3 text-center q-ma-xs">
              <q-btn dense round flat icon="fas fa-icon_community_line">
                <q-badge color="grey" floating transparent>
                  3
                </q-badge>
              </q-btn>
            </div>
            <div class="col-3 text-right q-ma-xs">
              <q-btn style="color: grey;" dense round flat icon="fas fa-icon_star_fill">
                <q-badge color="grey" floating transparent>
                  4
                </q-badge>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
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
      items: [{}, {}, {}, {}, {}, {}, {}]
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
<style lang="scss" scoped>
.app-list-item{
  width: 100%;
  height: 100px;
  border-radius: 1%;
}
</style>
