<template>
  <div class="playground collapse">
    <h1>Collapse</h1>
    <CompCollapse />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompCollapse from '@/components/others/CompCollapse.vue'
export default {
  name: 'collapse',
  components: {
    CompCollapse,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
