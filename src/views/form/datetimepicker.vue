<template>
  <div class="playground datetimepicker">
    <h1>DateTimePicker</h1>
    <CompDateTimePicker />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompDateTimePicker from '@/components/form/CompDateTimePicker.vue'
export default {
  name: 'datetimepicker',
  components: {
    CompDateTimePicker,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
