<template>
  <div class="playground tabs">
    <h1>Tabs</h1>
    <CompTabs />
    <div style="margin-top: 20px;">
      <router-link to="/navigation">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompTabs from '@/components/navigation/CompTabs.vue'
export default {
  name: 'tabs',
  components: {
    CompTabs,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
