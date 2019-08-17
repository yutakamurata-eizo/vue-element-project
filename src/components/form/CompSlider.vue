<template>
  <div class="slider">
    <div class="sample">
      <h2>Basic Slider</h2>
      <el-row>
        <h3>Default value</h3>
        <el-slider v-model="value1"></el-slider>
      </el-row>
      <el-row>
        <h3>Customized initial value</h3>
        <el-slider v-model="value2"></el-slider>
      </el-row>
      <el-row>
        <h3>Hide Tooltip</h3>
        <el-slider v-model="value3" :show-tooltip="false"></el-slider>
      </el-row>
      <el-row>
        <h3>Format Tooltip</h3>
        <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
      </el-row>
      <el-row>
        <h3>Disabled</h3>
        <el-slider v-model="value5" disabled></el-slider>
      </el-row>
    </div>

    <div class="sample">
      <h2>Discreate values</h2>
      <el-row>
        <h3>Breakpoints not displayed</h3>
        <el-slider v-model="value1" :step="10"></el-slider>
      </el-row>
      <el-row>
        <h3>Breakpoints displayed</h3>
        <el-slider v-model="value2" :step="10" show-stops></el-slider>
      </el-row>
    </div>

    <div class="sample">
      <h2>Slider with input box</h2>
      <el-slider v-model="value3" show-input></el-slider>
    </div>

    <div class="sample">
      <h2>Range Selection</h2>
      <el-slider v-model="range" range show-stops :max="10" />
    </div>

    <div class="sample">
      <h2>Vertical mode</h2>
      <el-slider v-model="value1" vertical height="150px"></el-slider>
    </div>

    <div class="sample">
      <h2>Show marks</h2>
      <el-slider v-model="value1" range :marks="marks" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      range: [4, 8],
      marks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {
            color: '#1989FA',
          },
          label: this.$createElement('strong', '50%'),
        },
      },
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100
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
