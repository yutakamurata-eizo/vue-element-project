<template>
  <div class="playground alert">
    <h1>Alert</h1>
    <CompAlert />
    <div style="margin-top: 20px;">
      <router-link to="/notice">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompAlert from '@/components/notice/CompAlert.vue'
export default {
  name: 'alert',
  components: {
    CompAlert,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
