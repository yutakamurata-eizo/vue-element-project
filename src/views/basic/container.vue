<template>
  <div class="playground container">
    <h1>Container</h1>
    <CompContainer />
    <div style="margin-top: 20px;">
      <router-link to="/basic">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompContainer from '@/components/basic/CompContainer.vue'
export default {
  name: 'container',
  components: {
    CompContainer,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
