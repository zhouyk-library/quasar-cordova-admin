<template>
  <div lass="flex flex-center">
    <q-btn class="q-ma-md" @click="getData" label="获取数据"/>
    <q-btn class="q-ma-md" @click="addData" label="插入数据"/>
    <div class="q-ma-md" >数据:
      <div v-if="lstItem.length>0">
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">id</th>
              <th class="text-left">data</th>
              <th class="text-left">data_num</th>
              <th class="text-right">operater</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in lstItem" :key="item.id">
              <td class="text-left">{{item.id}}</td>
              <td class="text-left">{{item.data}}</td>
              <td class="text-left">{{item.data_num}}</td>
              <td class="text-right">
                <q-btn flat round @click="deleteEvent(item)" color="grey" icon="delete"/>
                <q-btn flat round @click="updateEvent(item)" color="grey" icon="update"/>
                </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      db: {},
      lstItem: [],
      addNum: 0
    }
  },
  methods: {
    getData () {
      try {
        this.db.transaction((tx) => {
          tx.executeSql('select * from my_table', [], (tx, res) => {
            var length = res.rows.length
            var rows = res.rows
            var json = []
            for (let index = 0; index < length; index++) {
              json.push(rows.item(index))
            }
            this.lstItem = json
          })
        })
      } catch (error) {
        alert(JSON.stringify(error))
      }
    },
    addData () {
      try {
        this.db.transaction((tx) => {
          tx.executeSql('INSERT INTO my_table (data, data_num) VALUES (?,?)', ['test' + this.addNum, this.addNum++], (tx, res) => {
            this.getData()
          }, (e) => {
            alert('ERROR: ' + e.message)
          })
        })
      } catch (error) {
        alert(JSON.stringify(error))
      }
    },
    deleteEvent (item) {
      try {
        this.db.transaction((tx) => {
          tx.executeSql('DELETE FROM my_table WHERE id = ?', [item.id], (tx, res) => {
            this.getData()
          }, (e) => {
            alert('ERROR: ' + e.message)
          })
        })
      } catch (error) {
        alert(JSON.stringify(error))
      }
    },
    updateEvent (item) {
      try {
        this.db.transaction((tx) => {
          tx.executeSql('UPDATE my_table SET data = ? WHERE id = ?', [item.data + 'update', item.id], (tx, res) => {
            this.getData()
          }, (e) => {
            alert('ERROR: ' + e.message)
          })
        })
      } catch (error) {
        alert(JSON.stringify(error))
      }
    }
  },
  mounted () {
    try {
      this.db = window.sqlitePlugin.openDatabase({
        name: 'myDatabase.db',
        location: 'default',
        androidDatabaseProvider: 'system'
      })
      this.db.transaction((tx) => {
        tx.executeSql('DROP TABLE IF EXISTS my_table')
        tx.executeSql('CREATE TABLE IF NOT EXISTS my_table (id integer primary key, data text, data_num integer)')
      })
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }
}
</script>
