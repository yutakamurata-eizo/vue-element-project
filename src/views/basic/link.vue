<template>
  <div class="playground link">
    <h1>Link</h1>
    <CompLink />
    <div style="margin-top: 20px;">
      <router-link to="/basic">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompLink from '@/components/basic/CompLink.vue'
export default {
  name: 'link',
  components: {
    CompLink,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
