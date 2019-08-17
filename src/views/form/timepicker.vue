<template>
  <div class="playground timepicker">
    <h1>TimePicker</h1>
    <CompTimePicker />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompTimePicker from '@/components/form/CompTimePicker.vue'
export default {
  name: 'timepicker',
  components: {
    CompTimePicker,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
