<template>
  <div class="playground notification">
    <h1>Notification</h1>
    <CompNotification />
    <div style="margin-top: 20px;">
      <router-link to="/notice">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompNotification from '@/components/notice/CompNotification.vue'
export default {
  name: 'notification',
  components: {
    CompNotification,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
