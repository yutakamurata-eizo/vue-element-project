<template>
  <div class="radio">
    <div class="sample">
      <h2>Basic Radio</h2>
      <el-row>
        <el-radio v-model="radio" label="1">Option A</el-radio>
        <el-radio v-model="radio" label="2">Option B</el-radio>
      </el-row>
    </div>

    <div class="sample">
      <h2>Disabled Radio</h2>
      <el-row>
        <el-radio v-model="radio" label="1" disabled>Option A</el-radio>
        <el-radio v-model="radio" label="2" disabled>Option B</el-radio>
      </el-row>
    </div>

    <div class="sample">
      <h2>Radio Group</h2>
      <el-row>
        <el-radio-group v-model="group.radio1" @change="doChange(group.radio1)">
          <el-radio label="1">Option A</el-radio>
          <el-radio label="2">Option B</el-radio>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-radio-group v-model="group.radio2" @change="doChange(group.radio2)">
          <el-radio label="1">Option A</el-radio>
          <el-radio label="2" disabled>Option B</el-radio>
          <el-radio label="3">Option C</el-radio>
        </el-radio-group>
      </el-row>
    </div>

    <div class="sample">
      <h2>Radio Button</h2>
      <el-row>
        <el-radio-group v-model="group.radio1" @change="doChange(group.radio1)">
          <el-radio-button label="1">New York</el-radio-button>
          <el-radio-button label="2">Washington</el-radio-button>
          <el-radio-button label="3">Los Angeles</el-radio-button>
          <el-radio-button label="4">Chicago</el-radio-button>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-radio-group v-model="group.radio2" @change="doChange(group.radio2)" size="medium">
          <el-radio-button label="1">New York</el-radio-button>
          <el-radio-button label="2">Washington</el-radio-button>
          <el-radio-button label="3">Los Angeles</el-radio-button>
          <el-radio-button label="4">Chicago</el-radio-button>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-radio-group v-model="group.radio3" @change="doChange(group.radio3)" size="small">
          <el-radio-button label="1">New York</el-radio-button>
          <el-radio-button label="2" disabled>Washington</el-radio-button>
          <el-radio-button label="3">Los Angeles</el-radio-button>
          <el-radio-button label="4">Chicago</el-radio-button>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-radio-group v-model="group.radio4" @change="doChange(group.radio4)" size="mini">
          <el-radio-button label="1">New York</el-radio-button>
          <el-radio-button label="2">Washington</el-radio-button>
          <el-radio-button label="3" disabled>Los Angeles</el-radio-button>
          <el-radio-button label="4">Chicago</el-radio-button>
        </el-radio-group>
      </el-row>
    </div>

    <div class="sample">
      <h2>Border Radio</h2>
      <el-row>
        <el-radio-group v-model="group.radio1" @change="doChange(group.radio1)">
          <el-radio label="1" border>Option A</el-radio>
          <el-radio label="2" border>Option B</el-radio>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-radio-group v-model="group.radio2" @change="doChange(group.radio2)" size="medium">
          <el-radio label="1" border>Option A</el-radio>
          <el-radio label="2" border>Option B</el-radio>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-radio-group v-model="group.radio3" @change="doChange(group.radio3)" size="small" disabled>
          <el-radio label="1" border>Option A</el-radio>
          <el-radio label="2" border>Option B</el-radio>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-radio-group v-model="group.radio4" @change="doChange(group.radio4)" size="mini">
          <el-radio label="1" border>Option A</el-radio>
          <el-radio label="2" border disabled>Option B</el-radio>
        </el-radio-group>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      radio: '1',
      group: {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
      },
    }
  },
  methods: {
    doChange: value => {
      alert(value)
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
