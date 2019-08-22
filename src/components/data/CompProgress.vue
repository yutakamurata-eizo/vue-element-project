<template>
  <div class="progress">
    <div class="sample">
      <h2>Linear progress bar</h2>
      <el-row style="text-align: left;">
        <el-col :span="12">
          <el-progress :percentage="50"></el-progress>
          <el-progress :percentage="100" :format="format"></el-progress>
          <el-progress :percentage="100" status="success"></el-progress>
          <el-progress :percentage="100" status="warning"></el-progress>
          <el-progress :percentage="50" status="exception"></el-progress>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Internal percentage</h2>
      <el-row style="text-align: left;">
        <el-col :span="12">
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Custom Color</h2>
      <el-row style="text-align: left;">
        <el-col :span="12">
          <el-progress :percentage="percentage" :color="customColor"></el-progress>
          <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
          <el-progress :percentage="percentage" :color="customColors"></el-progress>
        </el-col>
      </el-row>
      <el-row>
        <el-button icon="el-icon-minus" @click="decrease"></el-button>
        <el-button icon="el-icon-plus" @click="increase"></el-button>
      </el-row>
    </div>

    <div class="sample">
      <h2>Circular progress bar</h2>
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="70" status="warning"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>

    <div class="sample">
      <h2>Dashboard progress bar</h2>
      <el-row style="text-align: left;">
        <el-progress type="dashboard" :percentage="percentage" :color="customColors"></el-progress>
      </el-row>
      <el-row>
        <el-button icon="el-icon-minus" @click="decrease"></el-button>
        <el-button icon="el-icon-plus" @click="increase"></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  data() {
    return {
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? 'Full' : `${percentage}%`
    },
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },
    increase() {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease() {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
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
.el-progress + .el-progress {
  margin-top: 10px;
}
.el-progress--circle + .el-progress--circle {
  margin-left: 10px;
}
</style>
