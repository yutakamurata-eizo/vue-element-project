<template>
  <div class="playground datepicker">
    <h1>DatePicker</h1>
    <CompDatePicker />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompDatePicker from '@/components/form/CompDatePicker.vue'
export default {
  name: 'datepicker',
  components: {
    CompDatePicker,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
