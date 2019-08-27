<template>
  <div class="playground image">
    <h1>Image</h1>
    <CompImage />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompImage from '@/components/others/CompImage.vue'
export default {
  name: 'image',
  components: {
    CompImage,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
