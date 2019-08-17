<template>
  <div class="playground switch">
    <h1>Switch</h1>
    <CompSwitch />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompSwitch from '@/components/form/CompSwitch.vue'
export default {
  name: 'switch',
  components: {
    CompSwitch,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
