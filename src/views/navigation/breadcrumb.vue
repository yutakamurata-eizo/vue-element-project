<template>
  <div class="playground breadcrumb">
    <h1>Breadcrumb</h1>
    <CompBreadcrumb />
    <div style="margin-top: 20px;">
      <router-link to="/navigation">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompBreadcrumb from '@/components/navigation/CompBreadcrumb.vue'
export default {
  name: 'breadcrumb',
  components: {
    CompBreadcrumb,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
