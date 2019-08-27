<template>
  <div class="image">
    <div class="sample">
      <h2>Basic Image</h2>
      <el-row>
        <el-col :span="4" v-for="fit in fits" :key="fit">
          <span class="demonstration">{{ fit }}</span>
          <el-image style="width: 130px; height: 130px;" :src="url" :fit="fit" />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Placeholder</h2>
      <el-row>
        <el-col :span="11">
          <span class="demonstration">Default</span>
          <el-image :src="src" />
        </el-col>
        <el-col :span="11">
          <span class="demonstration">Custom</span>
          <el-image :src="src">
            <div slot="placeholder" class="image-slot">Loading<span class="dot">...</span></div>
          </el-image>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Load Failed</h2>
      <el-row>
        <el-col :span="11">
          <span class="demonstration">Default</span>
          <el-image style="width: 400px; height: 250px; background: #f5f7fa; line-height: 250px;"></el-image>
        </el-col>
        <el-col :span="11">
          <span class="demonstration">Custom</span>
          <el-image style="width: 400px; height: 250px; background: #f5f7fa; line-height: 250px; font-size: 40px;">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
      </div>
    </div>

    <div class="sample">
      <h2>Image Preview</h2>
      <div class="demo-image__preview">
        <el-image style="width: 100px; height: 100px;" :src="url2" :preview-src-list="srcList"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Image',
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scaledown'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
      ],
      url2: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
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
.el-col {
  text-align: center;
}
.el-col + .el-col {
  margin-left: 10px;
}
.demonstration {
  text-align: center;
}
.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
</style>
