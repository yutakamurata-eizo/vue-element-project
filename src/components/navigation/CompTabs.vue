<template>
  <div class="tabs">
    <div class="sample">
      <h2>Basic Tabs</h2>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </div>

    <div class="sample">
      <h2>Card Style</h2>
      <el-tabs type="card" @tab-click="handleClick">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
    </div>

    <div class="sample">
      <h2>Border card</h2>
      <el-tabs type="border-card" @tab-click="handleClick">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
    </div>

    <div class="sample">
      <h2>Tab position</h2>
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>

      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
    </div>

    <div class="sample">
      <h2>Custom Tab</h2>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> Route</span>
          Route
        </el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
    </div>

    <div class="sample">
      <h2>Add &amp; close tab</h2>
      <el-tabs v-model="editableTabsValue1" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane v-for="(item, index) in editableTabs1" :key="item.name" :label="item.title" :name="item.name">
          {{ index }} ： {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      activeName: 'first',
      tabPosition: 'left',
      editableTabsValue1: '2',
      editableTabs1: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
      tabIndex1: 2,
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log({ tab: tab })
      console.log({ event: event })
    },
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        const newTabName = ++this.tabIndex1 + ''
        this.editableTabs1.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content',
        })
        this.editableTabsValue1 = newTabName
      }

      if (action === 'remove') {
        const tabs = this.editableTabs1
        let activeName = this.editableTabsValue1
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue1 = activeName
        this.editableTabs1 = tabs.filter(tab => tab.name !== targetName)
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
</style>
