<template>
  <div class="tree">
    <div class="sample">
      <h2>Basic Tree</h2>
      <el-tree :data="data1" :props="defaultProps1" @node-click="handleNodeClick"> </el-tree>
    </div>

    <div class="sample">
      <h2>Selectable</h2>
      <el-tree :props="props1" :load="loadNode1" lazy show-checkbox @check-change="handleCheckChange"></el-tree>
    </div>

    <div class="sample">
      <h2>Custom leaf node in lazy mode</h2>
      <el-tree :props="props2" :load="loadNode2" lazy show-checkbox></el-tree>
    </div>

    <div class="sample">
      <h2>Disabled checkbox</h2>
      <el-tree :data="data2" :prop="defaultProps2" show-checkbox @check-change="handleCheckChange"></el-tree>
    </div>

    <div class="sample">
      <h2>Default expanded and default checked</h2>
      <el-tree
        :data="data2"
        node-key="id"
        show-megsggsage
        :default-expanded-key="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps3"
      ></el-tree>
    </div>

    <div class="sample">
      <h2>Checking tree nodex</h2>
      <el-tree
        :data="data3"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps4"
      ></el-tree>
      <div class="buttons">
        <el-button @click="getCheckedNodes">get by node</el-button>
        <el-button @click="getCheckedKeys">get by key</el-button>
        <el-button @click="setCheckedNodes">set by node</el-button>
        <el-button @click="setCheckedKeys">set by key</el-button>
        <el-button @click="resetChecked">reset</el-button>
      </div>
    </div>

    <div class="sample">
      <h2>Tree node filtering</h2>
      <el-input placeholder="Filter keyword" v-model="filterText"></el-input>
      <el-tree
        class="filter-tree"
        :data="data3"
        :props="defaultProps4"
        default-expand-all
        :filter-node-metod="filterNode"
        ref="tree"
      ></el-tree>
    </div>

    <div class="sample">
      <h2>Accordion</h2>
      <el-tree :data="data3" :props="defaultProps4" accordion @node-click="handleNodeClick"></el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tree',
  data() {
    return {
      data1: [
        {
          label: 'Level one 1',
          children: [
            {
              label: 'Level two 1-1',
              children: [
                {
                  label: 'Level three 1-1-1',
                },
              ],
            },
          ],
        },
        {
          label: 'Level one 2',
          children: [
            {
              label: 'Level two 2-1',
              children: [
                {
                  label: 'Level three 2-1-1',
                },
              ],
            },
            {
              label: 'Level two 2-2',
              children: [
                {
                  label: 'Level three 2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: 'Level one 3',
          children: [
            {
              label: 'Level two 3-1',
              children: [
                {
                  label: 'Level three 3-1-1',
                },
              ],
            },
            {
              label: 'Level two 3-2',
              children: [
                {
                  label: 'Level three 3-2-1',
                },
              ],
            },
          ],
        },
      ],
      defaultProps1: {
        children: 'children',
        label: 'label',
      },
      props1: {
        label: 'name',
        children: 'zones',
      },
      count: 1,
      props2: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf',
      },
      data2: [
        {
          id: 1,
          label: 'Level one 1',
          children: [
            {
              id: 3,
              label: 'Level two 2-1',
              children: [
                {
                  id: 4,
                  label: 'Level three 3-1-1',
                },
                {
                  id: 5,
                  label: 'Level three 3-1-2',
                  disabled: true,
                },
              ],
            },
            {
              id: 2,
              label: 'Level two 2-2',
              disabled: true,
              children: [
                {
                  id: 6,
                  label: 'Level three 3-2-1',
                },
                {
                  id: 7,
                  label: 'Level three 3-2-2',
                  disabled: true,
                },
              ],
            },
          ],
        },
      ],
      defaultProps2: {
        children: 'children',
        label: 'label',
        disabled: 'disabled',
      },
      defaultProps3: {
        children: 'children',
        label: 'label',
      },
      data3: [
        {
          id: 1,
          label: 'Level one 1',
          children: [
            {
              id: 4,
              label: 'Level two 1-1',
              children: [
                {
                  id: 9,
                  label: 'Level three 1-1-1',
                },
                {
                  id: 10,
                  label: 'Level three 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: 'Level one 2',
          children: [
            {
              id: 5,
              label: 'Level two 2-1',
            },
            {
              id: 6,
              label: 'Level two 2-2',
            },
          ],
        },
        {
          id: 3,
          label: 'Level one 3',
          children: [
            {
              id: 7,
              label: 'Level two 3-1',
            },
            {
              id: 8,
              label: 'Level two 3-2',
            },
          ],
        },
      ],
      defaultProps4: {
        children: 'children',
        label: 'label',
      },
      filterText: '',
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    loadNode1(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'Root1' }, { name: 'Root2' }])
      }
      if (node.level > 3) return resolve([])

      var hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        var data
        if (hasChild) {
          data = [
            {
              name: 'zone' + this.count++,
            },
            {
              name: 'zone' + this.count++,
            },
          ]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    },
    loadNode2(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region' }])
      }
      if (node.level > 1) return resolve([])

      setTimeout(() => {
        const data = [
          {
            name: 'leaf',
            leaf: true,
          },
          {
            name: 'zone',
          },
        ]

        resolve(data)
      }, 500)
    },
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes())
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys())
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: 'Level two 2-1',
        },
        {
          id: 9,
          label: 'Level three 1-1-1',
        },
      ])
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3])
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([])
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
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
