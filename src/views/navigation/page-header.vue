<template>
  <div class="playground page-header">
    <h1>PageHeader</h1>
    <CompPageHeader />
    <div style="margin-top: 20px;">
      <router-link to="/navigation">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompPageHeader from '@/components/navigation/CompPageHeader.vue'
export default {
  name: 'page-header',
  components: {
    CompPageHeader,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
