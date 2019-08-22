<template>
  <div class="playground badge">
    <h1>Badge</h1>
    <CompBadge />
    <div style="margin-top: 20px;">
      <router-link to="/data">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompBadge from '@/components/data/CompBadge.vue'
export default {
  name: 'badge',
  components: {
    CompBadge,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
