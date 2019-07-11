<template>
  <div class="test">
    <h1>This is a test page</h1>
    <TestComp msg="test" />
  </div>
</template>

<script>
// import store from '@/store.js'
import TestComp from '@/components/TestComp.vue'

// 直接ステートを取得
// console.log('store', store.state.count)
// ミューテーションを実行
// store.commit('increment', { cnt: 3 })
// ゲッターでデータを取得
// console.log('getters', store.getters.count)
// アクションを実行
// store.dispatch('increment', { cnt: 5 })
// ゲッターでデータを取得
// console.log('getters', store.getters.count)

export default {
  name: 'test',
  components: {
    TestComp,
  },
}
</script>
