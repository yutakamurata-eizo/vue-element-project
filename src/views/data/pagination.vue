<template>
  <div class="playground pagination">
    <h1>Pagination</h1>
    <CompPagination />
    <div style="margin-top: 20px;">
      <router-link to="/data">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompPagination from '@/components/data/CompPagination.vue'
export default {
  name: 'pagination',
  components: {
    CompPagination,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
