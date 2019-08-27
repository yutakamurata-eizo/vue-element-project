<template>
  <div class="card">
    <div class="sample">
      <h2>Basic Card</h2>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
          <el-button style="float: right; padding: 3px, 0;" type="text">Operation button</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </div>

    <div class="sample">
      <h3>Simple Card</h3>
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </div>

    <div class="sample">
      <h2>With images</h2>
      <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">Operationg</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Shadow</h2>
      <el-row>
        <el-col :span="8">
          <el-card shadow="always">
            Always
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            Hover
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never">
            Never
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      currentDate: new Date(),
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
  text-align: left;
}
.sample:first-child {
  margin-top: 0;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.box-card {
  width: 480px;
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 100%;
  display: block;
}
</style>
