<template>
  <div class="notification">
    <div class="sample">
      <h2>Basic Notification</h2>
      <el-button plain @click="open1">Closes automatically</el-button>
      <el-button plain @click="open2">Won't closes automatically</el-button>
    </div>

    <div class="sample">
      <h2>With types</h2>
      <el-button plain @click="open3">Success</el-button>
      <el-button plain @click="open4">Warning</el-button>
      <el-button plain @click="open5">Info</el-button>
      <el-button plain @click="open6">Error</el-button>
    </div>

    <div class="sample">
      <h2>Custom position</h2>
      <el-button plain @click="open7">Top Right</el-button>
      <el-button plain @click="open8">Bottom Right</el-button>
      <el-button plain @click="open9">Bottom Left</el-button>
      <el-button plain @click="open10">Top Left</el-button>
    </div>

    <div class="sample">
      <h2>With offset</h2>
      <el-button plain @click="open11">Notification with offset</el-button>
    </div>

    <div class="sample">
      <h2>Use HTML string</h2>
      <el-button plain @click="open12">Use HTML String</el-button>
    </div>

    <div class="sample">
      <h2>Hide close button</h2>
      <el-button plain @click="open13">Hide close button</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  methods: {
    open1() {
      const h = this.$createElement
      this.$notify({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder'),
      })
    },
    open2() {
      this.$notify({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0,
      })
    },
    open3() {
      this.$notify({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
      })
    },
    open4() {
      this.$notify({
        title: 'Warning',
        message: 'This is warning message',
        type: 'warning',
      })
    },
    open5() {
      this.$notify.info({
        title: 'Info',
        message: 'This is an info message',
      })
    },
    open6() {
      this.$notify.error({
        title: 'Error',
        message: 'This is an error message',
      })
    },
    open7() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the top right corner",
      })
    },
    open8() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the top bottom corner",
        position: 'bottom-right',
      })
    },
    open9() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the bottom left corner",
        position: 'bottom-left',
      })
    },
    open10() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the top left corner",
        position: 'top-left',
      })
    },
    open11() {
      this.$notify.success({
        title: 'Success',
        message: 'This is a success message',
        offset: 100,
      })
    },
    open12() {
      this.$notify({
        title: 'HTML String',
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>',
      })
    },
    open13() {
      this.$notify.success({
        this: 'Info',
        message: 'This is a message without close button',
        showClose: false,
      })
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
