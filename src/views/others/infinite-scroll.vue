<template>
  <div class="playground infinite-scroll">
    <h1>InfiniteScroll</h1>
    <CompInfiniteScroll />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompInfiniteScroll from '@/components/others/CompInfiniteScroll.vue'
export default {
  name: 'infinite-scroll',
  components: {
    CompInfiniteScroll,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
