<template>
  <div class="playground cascader">
    <h1>Cascader</h1>
    <CompCascader />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompCascader from '@/components/form/CompCascader.vue'
export default {
  name: 'cascader',
  components: {
    CompCascader,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
