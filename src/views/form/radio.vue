<template>
  <div class="playground radio">
    <h1>Radio</h1>
    <CompRadio />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompRadio from '@/components/form/CompRadio.vue'
export default {
  name: 'radio',
  components: {
    CompRadio,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
