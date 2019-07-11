<template>
  <div class="test">
    <h2>{{ msg }}</h2>
    <p>Count: {{ count }}</p>
    <hr />
    <input type="number" v-model="num" />
    <button @click="doAdd">追加</button>
    <hr />
    <div>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'TestComp',
  props: {
    msg: String,
  },
  data: function() {
    return {
      num: 0,
    }
  },
  computed: {
    count() {
      return store.getters.count
    },
  },
  methods: {
    doAdd() {
      store.dispatch('increment', { cnt: this.num })
    },
  },
}
</script>
