<template>
  <div class="popover">
    <div class="sample">
      <h2>Basic Popover</h2>
      <el-popover
        placement="top-start"
        title="Title"
        width="200"
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference">Hover to activate</el-button>
      </el-popover>

      <el-popover
        placement="bottom"
        title="Title"
        width="200"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference">Click to activate</el-button>
      </el-popover>

      <el-popover
        placement="right"
        title="Title"
        width="200"
        trigger="focus"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference">Focus to activate</el-button>
      </el-popover>

      <el-popover
        placement="bottom"
        title="Title"
        width="200"
        trigger="manual"
        content="this is content, this is content, this is content"
        v-model="visible"
      >
        <el-button slot="reference" @click="visible = !visible">Manual to activate</el-button>
      </el-popover>
    </div>

    <div class="sample">
      <h2>Nested infomation</h2>
      <el-popover width="400" trigger="click">
        <el-table :data="gridData">
          <el-table-column width="150" property="date" label="date"></el-table-column>
          <el-table-column width="100" property="name" label="name"></el-table-column>
          <el-table-column width="300" property="address" label="address"></el-table-column>
        </el-table>
        <el-button slot="reference">Click to activate</el-button>
      </el-popover>
    </div>

    <div class="sample">
      <h2>Nested operation</h2>
      <el-popover placement="top" width="160" v-model="visible">
        <p>Are you sure to delete this?</p>
        <div style="text-align: right; margin: 0;">
          <el-button size="mini" type="text" @click="visible = false">cancel</el-button>
          <el-button type="primary" size="mini" @click="visible = false">confirm</el-button>
        </div>
        <el-button slot="reference">Delete</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  data() {
    return {
      visible: false,
      gridData: [
        {
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City',
        },
        {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City',
        },
        {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City',
        },
        {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City',
        },
      ],
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
span + span {
  margin-left: 10px;
}
span > button {
  width: 150px;
}
</style>
