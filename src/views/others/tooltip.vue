<template>
  <div class="playground tooltip">
    <h1>Tooltip</h1>
    <CompTooltip />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompTooltip from '@/components/others/CompTooltip.vue'
export default {
  name: 'tooltip',
  components: {
    CompTooltip,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
