<template>
  <div class="playground card">
    <h1>Card</h1>
    <CompCard />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompCard from '@/components/others/CompCard.vue'
export default {
  name: 'card',
  components: {
    CompCard,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
