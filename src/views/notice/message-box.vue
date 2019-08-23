<template>
  <div class="playground message-box">
    <h1>MessageBox</h1>
    <CompMessageBox />
    <div style="margin-top: 20px;">
      <router-link to="/notice">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompMessageBox from '@/components/notice/CompMessageBox.vue'
export default {
  name: 'message-box',
  components: {
    CompMessageBox,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
