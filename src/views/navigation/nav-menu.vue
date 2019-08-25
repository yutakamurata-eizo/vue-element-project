<template>
  <div class="playground nav-menu">
    <h1>NavMenu</h1>
    <CompNavMenu />
    <div style="margin-top: 20px;">
      <router-link to="/navigation">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompNavMenu from '@/components/navigation/CompNavMenu.vue'
export default {
  name: 'nav-menu',
  components: {
    CompNavMenu,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
