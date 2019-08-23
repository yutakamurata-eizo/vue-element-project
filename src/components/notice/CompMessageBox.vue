<template>
  <div class="message-box">
    <div class="sample">
      <h2>Alert</h2>
      <el-button type="text" @click="open1">Click to open the Message Box</el-button>
    </div>

    <div class="sample">
      <h2>Confirm</h2>
      <el-button type="text" @click="open2">Click to open the Message Box</el-button>
    </div>

    <div class="sample">
      <h2>Prompt</h2>
      <el-button type="text" @click="open3">Click to open the Message Box</el-button>
    </div>

    <div class="sample">
      <h2>Custmization</h2>
      <el-button type="text" @click="open4">Click to open the Message Box</el-button>
    </div>

    <div class="sample">
      <h2>Use HTML String</h2>
      <el-button type="text" @click="open5">Click to open the Message Box</el-button>
    </div>

    <div class="sample">
      <h2>Distinguishing cancel and close</h2>
      <el-button type="text" @click="open6">Click to open the Message Box</el-button>
    </div>

    <div class="sample">
      <h2>Centered content</h2>
      <el-button type="text" @click="open7">Click to open the Message Box</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  methods: {
    open1() {
      this.$alert('This is a message', 'Title', {
        confirmButtonText: 'OK',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`,
          })
        },
      })
    },
    open2() {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled',
          })
        })
    },
    open3() {
      this.$prompt('Please input your e-mail', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email',
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: 'Your email is: ' + value,
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled',
          })
        })
    },
    oepn4() {
      const h = this.$createElement
      this.$msgbox({
        title: 'Message',
        message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = 'Loading...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        },
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action,
        })
      })
    },
    open5() {
      this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
        dangerouslyUseHTMLString: true,
      })
    },
    open6() {
      this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
        distinguishCancelAndClose: true,
        confirmButtonText: 'Save',
        cancelButtonText: 'Discard Changes',
      })
        .then(() => {
          this.$message({
            type: 'info',
            message: 'Changes saved. Proceeding to a new route.',
          })
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message:
              action === 'cancel' ? 'Changes discarded. Proceeding to a new route.' : 'Stay in the current route.',
          })
        })
    },
    open7() {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        center: true,
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled',
          })
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
