<template>
  <div class="tooltip">
    <div class="sample">
      <h2>Basic Tooltip</h2>
      <div class="box">
        <div class="top">
          <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
            <el-button>top-start</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
            <el-button>top</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Left Left prompts info" placement="top-end">
            <el-button>top-end</el-button>
          </el-tooltip>
        </div>
        <div class="left">
          <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
            <el-button>left-start</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
            <el-button>left</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
            <el-button>left-end</el-button>
          </el-tooltip>
        </div>

        <div class="right">
          <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
            <el-button>right-start</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
            <el-button>right</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
            <el-button>right-end</el-button>
          </el-tooltip>
        </div>
        <div class="bottom">
          <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
            <el-button>bottom-start</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
            <el-button>bottom</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
            <el-button>bottom-end</el-button>
          </el-tooltip>
        </div>
      </div>
    </div>

    <div class="sample">
      <h2>Theme</h2>
      <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button>Light</el-button>
      </el-tooltip>
    </div>

    <div class="sample">
      <h2>More Content</h2>
      <el-tooltip placement="top">
        <div slot="content">multiple lines<br />second line</div>
        <el-button>Top center</el-button>
      </el-tooltip>
    </div>

    <div class="sample">
      <h2>Advanced</h2>
      <el-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">
        <el-button @click="disabled = !disabled"
          >click to {{ disabled ? 'active' : 'close' }} tooltip function</el-button
        >
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  data() {
    return {
      desabled: false,
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
.box {
  width: 400px;
}
.top {
  text-align: center;
}
.left {
  float: left;
  width: 110px;
}
.right {
  float: right;
  width: 110px;
}
.bottom {
  clear: both;
  text-align: center;
}
.item {
  margin: 4px;
}
.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
.el-button {
  width: 110px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.expand-fade-leave-active {
  margin-left: 20px;
  opacity: 0;
}
</style>
