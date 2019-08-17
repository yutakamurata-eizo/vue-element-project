<template>
  <div class="playground transfer">
    <h1>Transfer</h1>
    <CompTransfer />
    <div style="margin-top: 20px;">
      <router-link to="/form">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompTransfer from '@/components/form/CompTransfer.vue'
export default {
  name: 'transfer',
  components: {
    CompTransfer,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
