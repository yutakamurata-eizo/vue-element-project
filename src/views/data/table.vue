<template>
  <div class="playground table">
    <h1>Table</h1>
    <CompTable />
    <div style="margin-top: 20px;">
      <router-link to="/data">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompTable from '@/components/data/CompTable.vue'
export default {
  name: 'table',
  components: {
    CompTable,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
