<template>
  <div class="playground select">
    <h1>Select</h1>
    <CompSelect />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompSelect from '@/components/form/CompSelect.vue'
export default {
  name: 'select',
  components: {
    CompSelect,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
