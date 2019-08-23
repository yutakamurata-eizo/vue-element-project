<template>
  <div class="playground loading">
    <h1>Loading</h1>
    <CompLoading />
    <div style="margin-top: 20px;">
      <router-link to="/notice">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompLoading from '@/components/notice/CompLoading.vue'
export default {
  name: 'loading',
  components: {
    CompLoading,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
