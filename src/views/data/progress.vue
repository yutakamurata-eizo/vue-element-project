<template>
  <div class="playground progress">
    <h1>Progress</h1>
    <CompProgress />
    <div style="margin-top: 20px;">
      <router-link to="/data">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompProgress from '@/components/data/CompProgress.vue'
export default {
  name: 'progress',
  components: {
    CompProgress,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
