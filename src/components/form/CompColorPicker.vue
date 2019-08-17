<template>
  <div class="colorpicker">
    <div class="sample">
      <h2>Basic ColorPicker</h2>
      <el-row>
        <el-col :span="12">
          <h3>With default value</h3>
          <el-color-picker v-model="color1" />
        </el-col>
        <el-col :span="12">
          <h3>With no default value</h3>
          <el-color-picker v-model="color2" />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Alpha</h2>
      <el-color-picker v-model="color3" show-alpha />
    </div>

    <div class="sample">
      <h2>Predefined colors</h2>
      <el-color-picker v-model="color4" show-alpha :predefine="predefineColors" />
    </div>

    <div class="sample">
      <h2>Size</h2>
      <el-color-picker v-model="color5" />
      <el-color-picker v-model="color5" size="medium" />
      <el-color-picker v-model="color5" size="small" />
      <el-color-picker v-model="color5" size="mini" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  data() {
    return {
      color1: '#409EFF',
      color2: null,
      color3: 'rgba(19, 206, 102, 0.8)',
      color4: 'rgba(255, 69, 0, 0.68)',
      color5: null,
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577',
      ],
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
