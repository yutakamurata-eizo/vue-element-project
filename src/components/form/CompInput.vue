<template>
  <div class="input">
    <div class="sample">
      <h2>Basic Input</h2>
      <el-input placeholder="Please input" v-model="input" />
    </div>

    <div class="sample">
      <h2>Disabled Input</h2>
      <el-input placeholder="Please input" v-model="input" :disabled="true" />
    </div>

    <div class="sample">
      <h2>Clearable Input</h2>
      <el-input placeholder="Please input" v-model="input" clearable />
    </div>

    <div class="sample">
      <h2>Password Input</h2>
      <el-input placeholder="Please input" v-model="input" show-password />
    </div>

    <div class="sample">
      <h2>Input with Icon</h2>
      <el-row>
        <h3>Using attributes</h3>
        <el-input placeholder="Pick a date" suffix-icon="el-icon-date" v-model="formData.input1" style="width: 50%;" />
        <el-input
          placeholder="Type something"
          prefix-icon="el-icon-search"
          v-model="formData.input2"
          style="width: 50%;"
        />
      </el-row>
      <el-row>
        <h3>Using slots</h3>
        <el-input placeholder="Pick a date" v-model="formData.input1" style="width: 50%;">
          <i slot="suffix" class="el-input__icon el-icon-date"></i>
        </el-input>
        <el-input placeholder="Type something" v-model="formData.input2" style="width: 50%;">
          <i slot="prefix" class="el-input__icon el-icon-search"></i> </el-input
        >"
      </el-row>
    </div>

    <div class="sample">
      <h2>Textarea</h2>
      <el-input type="textarea" :row="3" placeholder="Please input" v-model="textarea" />
    </div>

    <div class="sample">
      <h2>Autosize Textarea</h2>
      <el-row>
        <el-input type="textarea" autosize placeholder="Please input" v-model="formData.textarea1" />
      </el-row>
      <el-row>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="Please input"
          v-model="formData.textarea2"
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Mixed Input</h2>
      <el-row>
        <el-input placeholder="Please input" v-model="input">
          <template slot="prepend"
            >Http://</template
          >
        </el-input>
      </el-row>
      <el-row>
        <el-input placeholder="Please input" v-model="input">
          <template slot="append"
            >.com</template
          >
        </el-input>
      </el-row>
      <el-row>
        <el-input placeholder="Please input" v-model="input" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="Select">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-row>
    </div>

    <div class="sample">
      <h2>Input Sizes</h2>
      <el-row>
        <el-input placeholder="Please input" v-model="input" />
      </el-row>
      <el-row>
        <el-input placeholder="Please input" v-model="input" size="medium" />
      </el-row>
      <el-row>
        <el-input placeholder="Please input" v-model="input" size="small" />
      </el-row>
      <el-row>
        <el-input placeholder="Please input" v-model="input" size="mini" />
      </el-row>
    </div>

    <div class="sample">
      <h2>Autocomplete</h2>
      <el-row>
        <el-col :span="12">
          <h3>list suggestions when activated</h3>
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="Please input"
            @select="handleSelect"
          />
        </el-col>
        <el-col :span="12">
          <h3>list suggestions on input</h3>
          <el-autocomplete
            class="inline-input"
            v-model="state2"
            :fetch-suggestions="querySearch"
            placeholder="Please input"
            :trigger-on-focus="false"
            @select="handleSelect"
          />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Limit length</h2>
      <el-row>
        <el-input type="text" placeholder="Please input" v-model="input" maxlength="10" show-word-limit />
      </el-row>
      <el-row>
        <el-input type="textarea" placeholder="Please input" v-model="textarea" maxlength="30" show-word-limit />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      input: '',
      textarea: '',
      select: '',
      formData: {
        input1: '',
        input2: '',
        textarea1: '',
        textarea2: '',
      },
      state1: '',
      state2: '',
      links: [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ],
    }
  },
  methods: {
    querySearch(queryString, cb) {
      const links = this.links
      const results = queryString ? links.filter(this.createFilter(queryString)) : links
      // call callback function to return suggestions
      cb(results)
    },
    createFilter(queryString) {
      return link => {
        return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    handleSelect(item) {
      alert(item)
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
h3 {
  margin-bottom: 15px;
}
.el-select .el-input {
  width: 150px;
}
</style>
