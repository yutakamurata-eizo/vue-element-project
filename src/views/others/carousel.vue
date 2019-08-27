<template>
  <div class="playground carousel">
    <h1>Carousel</h1>
    <CompCarousel />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompCarousel from '@/components/others/CompCarousel.vue'
export default {
  name: 'carousel',
  components: {
    CompCarousel,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
