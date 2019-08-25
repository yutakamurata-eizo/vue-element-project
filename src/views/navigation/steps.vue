<template>
  <div class="playground steps">
    <h1>Steps</h1>
    <CompSteps />
    <div style="margin-top: 20px;">
      <router-link to="/navigation">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompSteps from '@/components/navigation/CompSteps.vue'
export default {
  name: 'steps',
  components: {
    CompSteps,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
