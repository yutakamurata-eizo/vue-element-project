<template>
  <div class="playground slider">
    <h1>Slider</h1>
    <CompSlider />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompSlider from '@/components/form/CompSlider.vue'
export default {
  name: 'slider',
  components: {
    CompSlider,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
