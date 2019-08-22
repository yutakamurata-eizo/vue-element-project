<template>
  <div class="playground tree">
    <h1>Tree</h1>
    <CompTree />
    <div style="margin-top: 20px;">
      <router-link to="/data">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompTree from '@/components/data/CompTree.vue'
export default {
  name: 'tree',
  components: {
    CompTree,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
