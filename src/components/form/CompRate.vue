<template>
  <div class="rate">
    <div class="sample">
      <h2>Basic Rate</h2>
      <el-row>
        <el-col :span="12">
          <h3>Default</h3>
          <el-rate v-model="value1" />
        </el-col>
        <el-col :span="12">
          <h3>Color for different levels</h3>
          <el-rate v-model="value2" :colors="colors" />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>With Text</h2>
      <el-rate v-model="value3" :texts="texts" show-text />
    </div>

    <div class="sample">
      <h2>More icons</h2>
      <el-rate v-model="value4" :icon-classes="iconClasses" void-icon-class="icon-rate-face-off" :colors="colors" />
    </div>

    <div class="sample">
      <h2>Read Only</h2>
      <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value} points" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rate',
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: 3.7,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      texts: ['oops', 'disappointed', 'normal', 'good', 'great'],
      iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],
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
