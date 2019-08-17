<template>
  <div class="playground upload">
    <h1>Upload</h1>
    <CompUpload />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompUpload from '@/components/form/CompUpload.vue'
export default {
  name: 'upload',
  components: {
    CompUpload,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
