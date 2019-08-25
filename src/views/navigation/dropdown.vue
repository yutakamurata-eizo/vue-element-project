<template>
  <div class="playground dropdown">
    <h1>Dropdown</h1>
    <CompDropdown />
    <div style="margin-top: 20px;">
      <router-link to="/navigation">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompDropdown from '@/components/navigation/CompDropdown.vue'
export default {
  name: 'dropdown',
  components: {
    CompDropdown,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
