<template>
  <div class="playground tag">
    <h1>Tag</h1>
    <CompTag />
    <div style="margin-top: 20px;">
      <router-link to="/data">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompTag from '@/components/data/CompTag.vue'
export default {
  name: 'tag',
  components: {
    CompTag,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
