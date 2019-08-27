<template>
  <div class="playground divider">
    <h1>Divider</h1>
    <CompDivider />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompDivider from '@/components/others/CompDivider.vue'
export default {
  name: 'divider',
  components: {
    CompDivider,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
