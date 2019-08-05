<template>
  <div class="link">
    <div class="sample">
      <h2>Basic Link</h2>
      <el-row>
        <el-link>default</el-link>
        <el-link type="primary">primary</el-link>
        <el-link type="success">success</el-link>
        <el-link type="warning">warning</el-link>
        <el-link type="danger">danger</el-link>
        <el-link type="info">info</el-link>
      </el-row>
    </div>

    <div class="sample">
      <h2>Disabled Link</h2>
      <el-row>
        <el-link disabled>default</el-link>
        <el-link type="primary" disabled>primary</el-link>
        <el-link type="success" disabled>success</el-link>
        <el-link type="warning" disabled>warning</el-link>
        <el-link type="danger" disabled>danger</el-link>
        <el-link type="info" disabled>info</el-link>
      </el-row>
    </div>

    <div class="sample">
      <h2>Underline</h2>
      <el-row>
        <el-link :underline="false">Without Underline</el-link>
        <el-link>With Underline</el-link>
      </el-row>
    </div>

    <div class="sample">
      <h2>Icon Link</h2>
      <el-row>
        <el-link icon="el-icon-edit">Edit</el-link>
        <el-link>Check<i class="el-icon-view el-icon--right"></i> </el-link>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Link',
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
.el-link {
  margin-left: 10px;
}
</style>
