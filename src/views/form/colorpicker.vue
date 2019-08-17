<template>
  <div class="playground colorpicker">
    <h1>ColorPicker</h1>
    <CompColorPicker />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompColorPicker from '@/components/form/CompColorPicker.vue'
export default {
  name: 'colorpicker',
  components: {
    CompColorPicker,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
