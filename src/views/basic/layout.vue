<template>
  <div class="playground layout">
    <h1>Layout</h1>
    <CompLayout />
    <div style="margin-top: 20px;">
      <router-link to="/basic">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompLayout from '@/components/basic/CompLayout.vue'
export default {
  name: 'layout',
  components: {
    CompLayout,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
