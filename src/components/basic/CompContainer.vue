<template>
  <div class="container">
    <div class="sample">
      <h2>Pattern1</h2>
      <el-container>
        <el-header height="30px">Header</el-header>
        <el-main>Main</el-main>
        <el-footer height="30px">Footer</el-footer>
      </el-container>
    </div>

    <div class="sample">
      <h2>Pattern2</h2>
      <el-container>
        <el-header height="30px">Header</el-header>
        <el-container>
          <el-aside>Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
        <el-footer height="30px">Footer</el-footer>
      </el-container>
    </div>

    <div class="sample">
      <h2>Pattern3</h2>
      <el-container>
        <el-aside style="line-height: 260px;">Aside</el-aside>
        <el-container>
          <el-header height="30px">Header</el-header>
          <el-main>Main</el-main>
          <el-footer height="30px">Footer</el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 30px;
}

.el-aside {
  background-color: #d3dce6;
  color: #666;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
