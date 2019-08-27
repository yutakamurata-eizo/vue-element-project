<template>
  <div class="infinite-scroll">
    <div class="sample">
      <h2>Basic InfiniteScroll</h2>
      <ul class="infinite-list" v-infinite-scroll="load1" style="overflow: auto;">
        <li v-for="i in count1" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfiniteScroll',
  data() {
    return {
      count1: 0,
    }
  },
  methods: {
    load1() {
      this.count1 += 2
    },
  },
}
</script>

<style>
.sample {
  margin-top: 40px;
  padding: 0 20px 20px;
  border: #ddd solid 1px;
  border-radius: 4px;
}
.sample:first-child {
  margin-top: 0;
}
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #e8f3fe;
  margin: 10px;
  color: #7dbcfc;
}
</style>
