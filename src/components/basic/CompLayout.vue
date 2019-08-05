<template>
  <div class="layout">
    <div class="sample">
      <h2>Basic Layout</h2>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">span 24</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">span 12</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">span 12</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple">span 4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">span 4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">span 4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">span 4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">span 4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">span 4</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">span 12</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="3"><div class="grid-content bg-purple">span 3</div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple-light">span 9</div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple">span 9</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light">span 3</div></el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Column spacing</h2>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">span 6</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">span 8</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">span 4</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">span 8</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">span 4</div></el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Column offset</h2>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple-light">span 6 offset 6</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6"><div class="grid-content bg-purple">span 12 offset 6</div></el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Alignment</h2>
      <h3>start</h3>
      <el-row type="flex" class="row-bg">
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
      </el-row>
      <h3>center</h3>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
      </el-row>
      <h3>end</h3>
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
      </el-row>
      <h3>space-between</h3>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
      </el-row>
      <h3>space-around</h3>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">span 6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">span 6</div></el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Responsive Layout、Utility classes</h2>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">responsive</div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple-light">responsive</div></el-col
        >
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" class="hidden-sm-and-down"
          ><div class="grid-content bg-purple-light">responsive</div></el-col
        >
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="hidden-md-and-down"
          ><div class="grid-content bg-purple-light">responsive</div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
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
.el-row {
  margin-bottom: 10px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  min-height: 28px;
  line-height: 28px;
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
h3 {
  margin: 0;
  text-align: left;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
