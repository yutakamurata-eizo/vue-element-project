<template>
  <div class="backtop">
    <div class="sample">
      <h2>Basic Backtop</h2>
      <div class="content" v-for="i in 20" :key="i">
        content {{ i }}, content {{ i }}, content {{ i }}, content {{ i }}, content {{ i }}, ...
      </div>
      <el-backtop></el-backtop>
      <el-backtop :visibility-height="300" :right="100" :bottom="150">
        <div class="bt">UP</div>
      </el-backtop>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Backtop',
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
.content {
  height: 100px;
  line-height: 100px;
  padding: 20px;
}
.bt {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
</style>
