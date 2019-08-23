<template>
  <div class="playground message">
    <h1>Message</h1>
    <CompMessage />
    <div style="margin-top: 20px;">
      <router-link to="/notice">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompMessage from '@/components/notice/CompMessage.vue'
export default {
  name: 'message',
  components: {
    CompMessage,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
