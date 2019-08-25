<template>
  <div class="steps" style="text-align: left;">
    <div class="sample">
      <h2>Basic Steps</h2>
      <el-steps :active="active" finish-status="success">
        <el-step title="Step 1"></el-step>
        <el-step title="Step 2"></el-step>
        <el-step title="Step 3"></el-step>
      </el-steps>

      <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
    </div>

    <div class="sample">
      <h2>Step bar that contains status</h2>
      <el-steps :space="300" :active="1" finish-status="success">
        <el-step title="Done"></el-step>
        <el-step title="Processing"></el-step>
        <el-step title="Step 3"></el-step>
      </el-steps>
    </div>

    <div class="sample">
      <h2>Step bar with description、Center</h2>
      <el-steps :active="2" align-center>
        <el-step title="Step 1" description="Some description"></el-step>
        <el-step title="Step 2" description="Some description"></el-step>
        <el-step title="Step 3" description="Some description"></el-step>
        <el-step title="Step 4" description="Some description"></el-step>
      </el-steps>
    </div>

    <div class="sample">
      <h2>Step bar with icon</h2>
      <el-steps :active="1">
        <el-step title="Step 1" icon="el-icon-edit"></el-step>
        <el-step title="Step 2" icon="el-icon-upload"></el-step>
        <el-step title="Step 3" icon="el-icon-picture"></el-step>
      </el-steps>
    </div>

    <div class="sample">
      <h2>Vertical step bar</h2>
      <div style="height: 300px;">
        <el-steps direction="vertical" :active="1">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </div>
    </div>

    <div class="sample">
      <h2>Simple step bar</h2>
      <el-steps :space="200" :active="1" simple>
        <el-step title="Step 1" icon="el-icon-edit"></el-step>
        <el-step title="Step 2" icon="el-icon-upload"></el-step>
        <el-step title="Step 3" icon="el-icon-picture"></el-step>
      </el-steps>

      <el-steps :active="1" finish-status="success" simple style="margin-top: 20px;">
        <el-step title="Step 1"></el-step>
        <el-step title="Step 2"></el-step>
        <el-step title="Step 3"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
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
