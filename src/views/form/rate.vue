<template>
  <div class="playground rate">
    <h1>Rate</h1>
    <CompRate />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompRate from '@/components/form/CompRate.vue'
export default {
  name: 'rate',
  components: {
    CompRate,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
