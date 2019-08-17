<template>
  <div class="input-number">
    <div class="sample">
      <h2>Basic InputNumber</h2>
      <el-input-number v-model="input1" @change="handleChange" :min="1" :max="10" />
    </div>

    <div class="sample">
      <h2>Disabled InputNumber</h2>
      <el-input-number v-model="input1" @change="handleChange" :min="1" :max="10" disabled />
    </div>

    <div class="sample">
      <h2>Steps、Strictly Steps</h2>
      <el-row>
        <el-input-number v-model="input1" @change="handleChange" :step="2" />
      </el-row>
      <el-row>
        <el-input-number v-model="input2" @change="handleChange" :step="2" step-strictly />
      </el-row>
    </div>

    <div class="sample">
      <h2>Precision</h2>
      <el-input-number v-model="input3" @change="handleChange" :precision="2" :step="0.2" :max="10" />
    </div>

    <div class="sample">
      <h2>Size</h2>
      <el-row>
        <el-input-number v-model="input1" @change="handleChange" :min="1" :max="10" />
      </el-row>
      <el-row>
        <el-input-number v-model="input1" @change="handleChange" :min="1" :max="10" size="medium" />
      </el-row>
      <el-row>
        <el-input-number v-model="input1" @change="handleChange" :min="1" :max="10" size="small" />
      </el-row>
      <el-row>
        <el-input-number v-model="input1" @change="handleChange" :min="1" :max="10" size="mini" />
      </el-row>
    </div>

    <div class="sample">
      <h2>Control Position</h2>
      <el-input-number v-model="input1" @change="handleChange" :min="1" :max="10" controls-position="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data() {
    return {
      input1: 1,
      input2: 1,
      input3: 1,
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>
