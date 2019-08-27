<template>
  <div class="playground drawer">
    <h1>Drawer</h1>
    <CompDrawer />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompDrawer from '@/components/others/CompDrawer.vue'
export default {
  name: 'drawer',
  components: {
    CompDrawer,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
