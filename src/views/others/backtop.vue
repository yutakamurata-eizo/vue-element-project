<template>
  <div class="playground backtop">
    <h1>Backtop</h1>
    <CompBacktop />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompBacktop from '@/components/others/CompBacktop.vue'
export default {
  name: 'backtop',
  components: {
    CompBacktop,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
