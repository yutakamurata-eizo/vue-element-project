<template>
  <div class="message">
    <div class="sample">
      <h2>Basic Message</h2>
      <el-button :plain="true" @click="open">Show message</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>
    </div>

    <div class="sample">
      <h2>Types</h2>
      <el-button :plain="true" @click="open1">message</el-button>
      <el-button :plain="true" @click="open2">success</el-button>
      <el-button :plain="true" @click="open3">warning</el-button>
      <el-button :plain="true" @click="open4">error</el-button>
    </div>

    <div class="sample">
      <h2>Types</h2>
      <el-button :plain="true" @click="open5">message</el-button>
      <el-button :plain="true" @click="open6">success</el-button>
      <el-button :plain="true" @click="open7">warning</el-button>
      <el-button :plain="true" @click="open8">error</el-button>
    </div>

    <div class="sample">
      <h2>Centered text</h2>
      <el-button :plain="true" @click="openCenter">Centered text</el-button>
    </div>

    <div class="sample">
      <h2>Use HTML string</h2>
      <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  methods: {
    open() {
      this.$message('This is a message.')
    },
    openVn() {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'Vnode')]),
      })
    },
    open1() {
      this.$message('This is a message.')
    },
    open2() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      })
    },
    open3() {
      this.$message({
        message: 'Warning, this is a warning message.',
        type: 'warning',
      })
    },
    open4() {
      this.$message.error('Oops, this is a error message.')
    },
    open5() {
      this.$message({
        showClose: true,
        message: 'This is a message.',
      })
    },
    open6() {
      this.$message({
        showClose: true,
        message: 'Congrats, this is a success message.',
        type: 'success',
      })
    },
    open7() {
      this.$message({
        showClose: true,
        message: 'Warning, this is a warning message.',
        type: 'warning',
      })
    },
    open8() {
      this.$message({
        showClose: true,
        message: 'Oops, this is a error message.',
        type: 'error',
      })
    },
    openCenter() {
      this.$message({
        message: 'Centered text',
        center: true,
      })
    },
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>',
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
