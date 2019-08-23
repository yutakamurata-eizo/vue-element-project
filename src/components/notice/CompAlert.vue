<template>
  <div class="alert">
    <div class="sample">
      <h2>Basic Alert</h2>
      <el-alert title="success alert" type="success"></el-alert>
      <el-alert title="info alert" type="info"></el-alert>
      <el-alert title="warning alert" type="warning"></el-alert>
      <el-alert title="error alert" type="error"></el-alert>
    </div>

    <div class="sample">
      <h2>Theme</h2>
      <el-row>
        <h3>Dark</h3>
        <el-alert title="success alert" type="success" effect="dark"></el-alert>
        <el-alert title="info alert" type="info" effect="dark"></el-alert>
        <el-alert title="warning alert" type="warning" effect="dark"></el-alert>
        <el-alert title="error alert" type="error" effect="dark"></el-alert>
      </el-row>
      <el-row>
        <h3>Light</h3>
        <el-alert title="success alert" type="success"></el-alert>
        <el-alert title="info alert" type="info"></el-alert>
        <el-alert title="warning alert" type="warning"></el-alert>
        <el-alert title="error alert" type="error"></el-alert>
      </el-row>
    </div>

    <div class="sample">
      <h2>Customizable close button</h2>
      <el-alert title="unclosable alert" type="success" :closable="false"></el-alert>
      <el-alert title="customized close-text" type="info" close-text="Gotcha"></el-alert>
      <el-alert title="alert with callback" type="warning" @close="hello"></el-alert>
    </div>

    <div class="sample">
      <h2>With Icon、Contered Text</h2>
      <el-alert title="success alert" type="success" show-icon></el-alert>
      <el-alert title="info alert" type="info" show-icon></el-alert>
      <el-alert title="warning alert" type="warning" show-icon center></el-alert>
      <el-alert title="error alert" type="error" show-icon center></el-alert>
    </div>

    <div class="sample">
      <h2>With description</h2>
      <el-alert title="with descriptin" type="success" description="This is a description."></el-alert>
    </div>

    <div class="sample">
      <h2>With icon and description</h2>
      <el-alert title="success alert" type="success" description="more text description" show-icon></el-alert>
      <el-alert title="info alert" type="info" description="more text description" show-icon></el-alert>
      <el-alert title="warning alert" type="warning" description="more text description" show-icon center></el-alert>
      <el-alert title="error alert" type="error" description="more text description" show-icon center></el-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  methods: {
    hello() {
      alert('Hello World')
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
.el-alert + .el-alert {
  margin-top: 10px;
}
</style>
