<template>
  <div class="playground popover">
    <h1>Popover</h1>
    <CompPopover />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompPopover from '@/components/others/CompPopover.vue'
export default {
  name: 'popover',
  components: {
    CompPopover,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
