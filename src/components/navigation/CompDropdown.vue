<template>
  <div class="dropdown">
    <div class="sample">
      <h2>Basic Dropdown</h2>
      <el-dropdown>
        <span class="el-dropdown-link"> Dropdown List<i class="el-icon-arrow-down el-icon--right"></i> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item disabled>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="sample">
      <h2>Triggering element</h2>
      <el-dropdown>
        <el-button type="primary"> Dropdown List<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown split-button type="primary" @click="handleClick" style="margin-left: 10px;">
        Dropdown List
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="sample">
      <el-row>
        <el-col :span="12">
          <h3>hover to trigger</h3>
          <el-dropdown>
            <span class="el-dropdown-link"> Dropdown List<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

        <el-col :span="12">
          <h3>click to trigger</h3>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link"> Dropdown List<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Menu hiding behavior</h2>
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link"> Dropdown List<i class="el-icon-arrow-down el-icon--right"></i> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item disabled>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="sample">
      <h2>Command event</h2>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link"> Dropdown List<i class="el-icon-arrow-down el-icon--right"></i> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">Action 1</el-dropdown-item>
          <el-dropdown-item command="b">Action 2</el-dropdown-item>
          <el-dropdown-item command="c">Action 3</el-dropdown-item>
          <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
          <el-dropdown-item command="e" disabled>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="sample">
      <h2>Sizes</h2>
      <el-dropdown split-button type="primary">
        Default
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" split-button type="primary" style="margin-left: 15px;">
        Medium
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="small" split-button type="primary" style="margin-left: 15px;">
        Small
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="mini" split-button type="primary" style="margin-left: 15px;">
        Mini
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  methods: {
    handleClick() {
      alert('button click!')
    },
    handleCommand(command) {
      this.$message('click on item ' + command)
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
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
