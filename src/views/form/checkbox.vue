<template>
  <div class="playground checkbox">
    <h1>Checkbox</h1>
    <CompCheckbox />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompCheckbox from '@/components/form/CompCheckbox.vue'
export default {
  name: 'checkbox',
  components: {
    CompCheckbox,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
