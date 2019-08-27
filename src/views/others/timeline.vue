<template>
  <div class="playground timeline">
    <h1>Timeline</h1>
    <CompTimeline />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompTimeline from '@/components/others/CompTimeline.vue'
export default {
  name: 'timeline',
  components: {
    CompTimeline,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
