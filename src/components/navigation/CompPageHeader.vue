<template>
  <div class="page-header">
    <div class="sample">
      <h2>Basic PageHeader</h2>
      <el-page-header @back="goBack" content="menu menu"></el-page-header>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  methods: {
    goBack() {
      console.log('go back')
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
</style>
