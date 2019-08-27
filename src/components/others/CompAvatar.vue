<template>
  <div class="avatar2">
    <div class="sample">
      <h2>Basic Avatar</h2>
      <el-row>
        <el-col :span="12">
          <h3>circle</h3>
          <div class="demo-basic--circle">
            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
            <div class="block" v-for="size in sizeList" :key="size">
              <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <h3>square</h3>
          <div class="demo-basic--square">
            <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
            <div class="block" v-for="size in sizeList" shape="square" :key="size">
              <el-avatar :size="size" :src="squareUrl"></el-avatar>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Types</h2>
      <el-row>
        <el-col :span="7">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </el-col>
        <el-col :span="7">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </el-col>
        <el-col :span="7">
          <el-avatar>user</el-avatar>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Fallback when image load error</h2>
      <el-row>
        <el-avatar :size="60" src="http://empty" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['large', 'medium', 'small'],
    }
  },
  methods: {
    errorHandler() {
      return true
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
