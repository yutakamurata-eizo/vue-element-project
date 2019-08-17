<template>
  <div class="switch">
    <div class="sample">
      <h2>Basic Switch</h2>
      <el-switch v-model="value1" />
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" />
    </div>

    <div class="sample">
      <h2>Text Description</h2>
      <el-row>
        <el-switch v-model="value1" active-text="Pay by month" inactive-text="Pay by year" />
      </el-row>
      <el-row>
        <el-switch
          style="display: block;"
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="Pay by year"
          inactive-text="Pay by year"
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Extended value types</h2>
      <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0">
      </el-switch>
    </div>

    <div class="sample">
      <h2>Disabled Switch</h2>
      <el-switch v-model="value1" disabled></el-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  data() {
    return {
      value1: true,
      value2: false,
    }
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
