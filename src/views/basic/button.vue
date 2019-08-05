<template>
  <div class="playground button">
    <h1>Button</h1>
    <CompButton />
    <div style="margin-top: 20px;">
      <router-link to="/basic">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompButton from '@/components/basic/CompButton.vue'
export default {
  name: 'button',
  components: {
    CompButton,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
