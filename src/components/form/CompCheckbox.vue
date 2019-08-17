<template>
  <div class="checkbox">
    <div class="sample">
      <h2>Basic Checkbox</h2>
      <el-row>
        <el-checkbox v-model="checked1">Option1</el-checkbox>
      </el-row>
    </div>

    <div class="sample">
      <h2>Disabled Checkbox</h2>
      <el-row>
        <el-checkbox v-model="checked1">Option1</el-checkbox>
        <el-checkbox v-model="checked2" disabled>Option2</el-checkbox>
      </el-row>
    </div>

    <div class="sample">
      <h2>Checkbox Group</h2>
      <el-row>
        <el-checkbox-group v-model="group.check1">
          <el-checkbox label="1">Option1</el-checkbox>
          <el-checkbox label="2">Option2</el-checkbox>
          <el-checkbox label="3" disabled>Option3</el-checkbox>
          <el-checkbox label="4">Option4</el-checkbox>
        </el-checkbox-group>
      </el-row>
    </div>

    <div class="sample">
      <h2>Check All</h2>
      <el-row>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="onCheckAllChange">
          Check All
        </el-checkbox>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="group.check2" @change="onCheckOptionChange">
          <el-checkbox v-for="item in options" :label="item.id" :key="item.id">{{ item.name }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
    </div>

    <div class="sample">
      <h2>Minimum/Maximum Checked</h2>
      <el-row>
        <el-checkbox-group v-model="group.check1" :min="1" :max="3">
          <el-checkbox label="1">Option1</el-checkbox>
          <el-checkbox label="2">Option2</el-checkbox>
          <el-checkbox label="3">Option3</el-checkbox>
          <el-checkbox label="4">Option4</el-checkbox>
        </el-checkbox-group>
      </el-row>
    </div>

    <div class="sample">
      <h2>Checkbox Button</h2>
      <el-row>
        <el-checkbox-group v-model="group.check1">
          <el-checkbox-button label="1">Option1</el-checkbox-button>
          <el-checkbox-button label="2">Option2</el-checkbox-button>
          <el-checkbox-button label="3">Option3</el-checkbox-button>
          <el-checkbox-button label="4">Option4</el-checkbox-button>
        </el-checkbox-group>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="group.check2" size="medium">
          <el-checkbox-button label="1">Option1</el-checkbox-button>
          <el-checkbox-button label="2">Option2</el-checkbox-button>
          <el-checkbox-button label="3">Option3</el-checkbox-button>
          <el-checkbox-button label="4">Option4</el-checkbox-button>
        </el-checkbox-group>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="group.check3" size="small">
          <el-checkbox-button label="1">Option1</el-checkbox-button>
          <el-checkbox-button label="2">Option2</el-checkbox-button>
          <el-checkbox-button label="3">Option3</el-checkbox-button>
          <el-checkbox-button label="4" disabled>Option4</el-checkbox-button>
        </el-checkbox-group>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="group.check4" size="mini" disabled>
          <el-checkbox-button label="1">Option1</el-checkbox-button>
          <el-checkbox-button label="2">Option2</el-checkbox-button>
          <el-checkbox-button label="3">Option3</el-checkbox-button>
          <el-checkbox-button label="4">Option4</el-checkbox-button>
        </el-checkbox-group>
      </el-row>
    </div>

    <div class="sample">
      <h2>Border Checkbox</h2>
      <el-row>
        <el-checkbox-group v-model="group.check1">
          <el-checkbox label="1" border>Option1</el-checkbox>
          <el-checkbox label="2" border>Option2</el-checkbox>
          <el-checkbox label="3" border>Option3</el-checkbox>
          <el-checkbox label="4" border>Option4</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="group.check2" size="medium">
          <el-checkbox label="1" border>Option1</el-checkbox>
          <el-checkbox label="2" border>Option2</el-checkbox>
          <el-checkbox label="3" border>Option3</el-checkbox>
          <el-checkbox label="4" border>Option4</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="group.check3" size="small">
          <el-checkbox label="1" border>Option1</el-checkbox>
          <el-checkbox label="2" border>Option2</el-checkbox>
          <el-checkbox label="3" border>Option3</el-checkbox>
          <el-checkbox label="4" border disabled>Option4</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="group.check4" size="mini" disabled>
          <el-checkbox label="1" border>Option1</el-checkbox>
          <el-checkbox label="2" border>Option2</el-checkbox>
          <el-checkbox label="3" border>Option3</el-checkbox>
          <el-checkbox label="4" border>Option4</el-checkbox>
        </el-checkbox-group>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      checked1: false,
      checked2: true,
      group: {
        check1: ['2'],
        check2: ['3'],
        check3: ['2'],
        check4: ['3'],
      },
      options: [
        { id: '1', name: 'Option1' },
        { id: '2', name: 'Option2' },
        { id: '3', name: 'Option3' },
        { id: '4', name: 'Option4' },
      ],
      checkAll: false,
      isIndeterminate: true,
    }
  },
  methods: {
    onCheckAllChange(value) {
      this.group.check2 = value ? this.options : []
      this.isIndeterminate = false
    },
    onCheckOptionChange(value) {
      const cnt = value.length
      this.checkAll = cnt === this.options.length
      this.isIndeterminate = cnt > 0 && cnt < this.options.length
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
