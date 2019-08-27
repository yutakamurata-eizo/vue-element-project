<template>
  <div class="playground dialog">
    <h1>Dialog</h1>
    <CompDialog />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompDialog from '@/components/others/CompDialog.vue'
export default {
  name: 'dialog',
  components: {
    CompDialog,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
