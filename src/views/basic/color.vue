<template>
  <div class="playground layout">
    <h1>Color</h1>
    <CompColor />
    <div style="margin-top: 20px;">
      <router-link to="/basic">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompColor from '@/components/basic/CompColor.vue'
export default {
  name: 'color',
  components: {
    CompColor,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
