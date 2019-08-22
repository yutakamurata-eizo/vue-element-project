<template>
  <div class="tag">
    <div class="sample">
      <h2>Basic Tag</h2>
      <el-tag>Tag 1</el-tag>
      <el-tag type="success">Tag 2</el-tag>
      <el-tag type="info">Tag 3</el-tag>
      <el-tag type="warning">Tag 4</el-tag>
      <el-tag type="danger">Tag 5</el-tag>
    </div>

    <div class="sample">
      <h2>Removable Tag</h2>
      <el-tag v-for="tag in tags1" :key="tag.name" :type="tag.type" closable>{{ tag.name }}</el-tag>
    </div>

    <div class="sample">
      <h2>Edit Dynamically</h2>
      <el-tag :key="tag" v-for="tag in tags2" closable :disable-transitions="false" @close="handleClose(tag)">
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="mini"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      />
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>

    <div class="sample">
      <h2>Size</h2>
      <el-tag>Default</el-tag>
      <el-tag size="medium">Medium</el-tag>
      <el-tag size="small">Small</el-tag>
      <el-tag size="mini">Mini</el-tag>
    </div>

    <div class="sample">
      <h2>Theme</h2>
      <el-row>
        <h3>Plain</h3>
        <el-tag v-for="tag in tags1" :key="tag.name" :type="tag.type" effect="plain">
          {{ tag.name }}
        </el-tag>
      </el-row>
      <el-row>
        <h3>Light</h3>
        <el-tag v-for="tag in tags1" :key="tag.name" :type="tag.type" effect="light">
          {{ tag.name }}
        </el-tag>
      </el-row>
      <el-row>
        <h3>Dark</h3>
        <el-tag v-for="tag in tags1" :key="tag.name" :type="tag.type" effect="dark">
          {{ tag.name }}
        </el-tag>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  data() {
    return {
      tags1: [
        { name: 'Tag 1', type: '' },
        { name: 'Tag 2', type: 'success' },
        { name: 'Tag 3', type: 'info' },
        { name: 'Tag 4', type: 'warning' },
        { name: 'Tag 5', type: 'danger' },
      ],
      tags2: ['Tag 1', 'Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: '',
    }
  },
  methods: {
    handleClose(tag) {
      this.tags2.splice(this.tags2.indexOf(tag), 1)
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      if (this.inputValue) {
        this.tags2.push(this.inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
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
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
