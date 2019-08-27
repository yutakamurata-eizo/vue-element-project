<template>
  <div class="divider">
    <div class="sample">
      <h2>Basic Divider</h2>
      <div>
        <span
          >I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and
          goes.</span
        >
        <el-divider></el-divider>
        <span>There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.</span>
      </div>
    </div>

    <div class="sample">
      <h2>Custom content</h2>
      <div>
        <span>What you are you do not see, what you see is your shadow. </span>
        <el-divider content-position="left">Rabindranath Tagore</el-divider>
        <span>I cannot choose the best. The best chooses me.</span>
        <el-divider><i class="el-icon-star-on"></i></el-divider>
        <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
        <el-divider content-position="right">Rabindranath Tagore</el-divider>
      </div>
    </div>

    <div class="sample">
      <h2>Vertical divider</h2>
      <div>
        <span>Rain</span>
        <el-divider direction="vertical"></el-divider>
        <span>Home</span>
        <el-divider direction="vertical"></el-divider>
        <span>Grass</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Divider',
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
