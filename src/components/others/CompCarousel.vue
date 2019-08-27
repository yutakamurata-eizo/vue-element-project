<template>
  <div class="carousel">
    <div class="sample">
      <h2>Basic Carousel</h2>
      <el-row>
        <el-col :span="11">
          <h3>Switch when indicator is hovered (default)</h3>
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="11" style="margin-left: 10px;">
          <h3>Switch when indicator is clicked (default)</h3>
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Indicators、Arrows</h2>
      <el-carousel :interval="5000" indicator-position="outside" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 style="line-height: 300px;">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="sample">
      <h2>Card mode</h2>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium" style="line-height: 200px;">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="sample">
      <h2>Vertical</h2>
      <el-carousel :interval="4000" direction="vertical" height="200px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="medium" style="line-height: 200px;">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
