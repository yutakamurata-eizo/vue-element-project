<template>
  <div class="playground calendar">
    <h1>Calendar</h1>
    <CompCalendar />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompCalendar from '@/components/others/CompCalendar.vue'
export default {
  name: 'calendar',
  components: {
    CompCalendar,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
