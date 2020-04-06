<template>
 <div class="q-pa-md">
   <q-btn @click="goBackEvent" flat icon="fas fa-icon_left"/>
    <div class="column items-center">
      <div class="text-h5 text-grey q-my-md">***表单</div>
    </div>
    <q-form ref="referenceForm" class="q-gutter-md">
      <q-input filled v-model="form.name" label="姓名" lazy-rules stack-label
        :rules="[ val => val && val.length > 0 || '姓名必填']" />

      <q-field v-model="form.sex" filled label="性别" stack-label>
        <template v-slot:control>
           <q-toggle v-model="form.sex" checked-icon="女" color="green" unchecked-icon="男" />
        </template>
      </q-field>

      <q-field v-model="form.duan" filled :label="`时间段:${form.duan.min+'月~'+form.duan.max+'月'}`" lazy-rules stack-label
        :rules="[val => val !== null && val !== '' || '请输入时间段',
        val => val.min >= 3 || '必须在3月之后',
        val => val.max <= 6 || '必须在6月之前']">
        <template v-slot:control>
          <q-range v-model="form.duan" :min="0" :max="12" :step="1" />
        </template>
      </q-field>

      <q-field v-model="form.age" filled :label="`年龄:${form.age||0}`" lazy-rules stack-label
        :rules="[val => val !== null && val !== '' || '请输入年龄',
        val => val >= 18 || '必须满18周岁',
        val => val <= 100 || '必须低于100岁']">
        <template v-slot:control>
          <q-slider v-model="form.age" :min="0" :max="200" :step="1" />
        </template>
      </q-field>

      <q-select
        filled
        :rules="[val => val !== null && val !== '' || '请选择身份']"
        v-model="form.selectId"
        :options="optionsSelect"
        option-value="id"
        option-label="desc"
        option-disable="inactive"
        emit-value
        map-options
        stack-label
        lazy-rules
        clearable
        :label="`身份${form.selectId ? 'id:'+form.selectId : ''}`"
      />

      <q-field v-model="form.zhuanye" filled label="专业" lazy-rules stack-label :rules="[val => !!val || '请选择专业' ]">
       <q-option-group :options="optionsRadio" label="专业" type="radio" v-model="form.zhuanye" />
      </q-field>

      <q-field v-model="form.zhuanye" filled label="专业" lazy-rules stack-label :rules="[val => !!val || '请选择专业' ]">
        <q-radio right-label v-model="form.zhuanye" val="jisuanji" label="计算机院" />
        <q-radio right-label v-model="form.zhuanye" val="jingji" label="经济学院" />
        <q-radio right-label v-model="form.zhuanye" val="fa" label="法学院" />
      </q-field>

      <q-field v-model="form.aihao" filled label="爱好" lazy-rules stack-label :rules="[val => val.length > 0 || '请选择爱好' ]">
       <q-option-group :options="optionsCheckbox" label="爱好" type="checkbox" v-model="form.aihao" />
      </q-field>

      <q-field v-model="form.aihao" filled label="爱好" lazy-rules stack-label :rules="[val => val.length > 0 || '请选择爱好' ]">
        <q-checkbox v-for="checkbox in optionsCheckbox" :key="checkbox.label" keep-color :val="checkbox.value" v-model="form.aihao" :label="checkbox.label" :color="checkbox.color" />
      </q-field>

      <q-input v-model="form.date" filled type="date" label="日期" lazy-rules stack-label :rules="[ val => !!val || '日期必填']"/>

      <q-field v-model="form.date" filled :label="'日期:'+form.date" lazy-rules stack-label :rules="[ val => !!val || '日期必填']" >
        <q-date v-model="form.date" mask="YYYY-MM-DD"/>
      </q-field>

      <q-input v-model="form.time" filled type="time" color="purple" label="时间" lazy-rules stack-label :rules="[ val => !!val || '时间必填']" />

      <q-field v-model="form.time" filled :label="'时间:'+form.date" lazy-rules stack-label :rules="[ val => !!val || '时间必填']" >
        <q-time v-model="form.time" mask="HH:mm" color="purple" />
      </q-field>

      <q-toggle v-model="form.accept" label="我同意所有条约" />
      <div class="column items-center">
        <div>
          <q-btn label="提交" @click="onSubmit" color="primary"/>
          <q-btn label="重置" @click="onReset" color="primary" flat class="q-ml-sm" />
        </div>
      </div>
    </q-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: null,
        sex: null,
        age: 18,
        duan: {
          min: 4,
          max: 5
        },
        date: null,
        time: null,
        accept: false,
        selectId: null,
        zhuanye: null,
        aihao: []
      },
      optionsCheckbox: [
        { label: '好好学习', value: 'bat' },
        { label: '拉撒睡', value: 'friend', color: 'green' },
        { label: '吃喝嫖赌抽', value: 'upload', color: 'red' }
      ],
      optionsRadio: [
        { label: '计算机院', value: 'jisuanji' },
        { label: '经济学院', value: 'jingji', color: 'green' },
        { label: '法学院', value: 'fa', color: 'red' }
      ],
      optionsSelect: [
        {
          id: '004',
          desc: '学生'
        },
        {
          id: '003',
          desc: '教师'
        },
        {
          id: '002',
          desc: '导员'
        },
        {
          id: '001',
          desc: '主任'
        },
        {
          id: '000',
          desc: '校长',
          inactive: true
        }
      ]
    }
  },

  methods: {
    goBackEvent () {
      this.$router.back()
    },
    onSubmit () {
      this.$refs.referenceForm.validate().then(success => {
        if (success) {
          if (this.form.accept !== true) {
            this.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: '必须同意所有条约'
            })
          } else {
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: '提交成功'
            })
          }
        } else {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'fas fa-icon_warn',
            message: '校验未通过,请检查！'
          })
        }
      })
    },

    onReset () {
      this.$nextTick(() => {
        this.$refs.referenceForm.resetValidation()
      })
    }
  }
}
</script>
