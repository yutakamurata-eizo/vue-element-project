<template>
  <div class="playground form">
    <h1>Form</h1>
    <CompForm />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompForm from '@/components/form/CompForm.vue'
export default {
  name: 'form2',
  components: {
    CompForm,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
