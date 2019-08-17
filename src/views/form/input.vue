<template>
  <div class="playground input">
    <h1>Input</h1>
    <CompInput />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompInput from '@/components/form/CompInput.vue'
export default {
  name: 'input',
  components: {
    CompInput,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
