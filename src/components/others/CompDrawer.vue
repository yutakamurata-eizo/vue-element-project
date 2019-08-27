<template>
  <div class="drawer">
    <div class="sample">
      <h2>Basic Drawer</h2>
      <el-radio-group v-model="direction">
        <el-radio label="ltr">left to right</el-radio>
        <el-radio label="rtl">right to left</el-radio>
        <el-radio label="ttb">top to bottom</el-radio>
        <el-radio label="btt">bottom to top</el-radio>
      </el-radio-group>
      <el-button @click="drawer = true" type="primary" style="margin-left: 20px;">
        Open
      </el-button>

      <el-drawer title="I am the title" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
        <span>Hi, there!</span>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure you want to close this?')
        .then(() => {
          done()
        })
        .catch(() => {})
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
