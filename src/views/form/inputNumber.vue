<template>
  <div class="playground input-number">
    <h1>InputNumber</h1>
    <CompInputNumber />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompInputNumber from '@/components/form/CompInputNumber.vue'
export default {
  name: 'inputNumber',
  components: {
    CompInputNumber,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
