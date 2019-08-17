<template>
  <div class="select">
    <div class="sample">
      <h2>Basic Select、Disabled、Clearable</h2>
      <el-select v-model="select1" placeholder="Select" clearable>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>
    </div>

    <div class="sample">
      <h2>Multible Select</h2>
      <el-row>
        <el-col :span="12">
          <el-select v-model="value1" multiple placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-select v-model="value2" multiple collapse-tags placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Custom Template</h2>
      <el-row>
        <el-select v-model="value1" placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left;">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-row>
    </div>

    <div class="sample">
      <h2>Grouping</h2>
      <el-select v-model="value1" placeholder="Select">
        <el-option-group v-for="group in options2" :key="group.label" :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
        </el-option-group>
      </el-select>
    </div>

    <div class="sample">
      <h2>Filtering</h2>
      <el-select v-model="select1" filterable placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>

    <div class="sample">
      <h2>Remote Search</h2>
      <el-select
        v-model="remote.value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="Please enter a keyword"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option v-for="item in remote.options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      options: [
        { value: 'Option1', label: 'Option1' },
        { value: 'Option2', label: 'Option2', disabled: true },
        { value: 'Option3', label: 'Option3' },
        { value: 'Option4', label: 'Option4' },
        { value: 'Option5', label: 'Option5' },
      ],
      select1: '',
      value1: [],
      value2: [],
      options2: [
        {
          label: 'Popular cities',
          options: [
            {
              value: 'Shanghai',
              label: 'Shanghai',
            },
            {
              value: 'Beijing',
              label: 'Beijing',
            },
          ],
        },
        {
          label: 'City name',
          options: [
            {
              value: 'Chengdu',
              label: 'Chengdu',
            },
            {
              value: 'Shenzhen',
              label: 'Shenzhen',
            },
            {
              value: 'Guangzhou',
              label: 'Guangzhou',
            },
            {
              value: 'Dalian',
              label: 'Dalian',
            },
          ],
        },
      ],
      remote: {
        options: [],
        value: [],
        list: [],
        loading: false,
        states: [
          'Alabama',
          'Alaska',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'Florida',
          'Georgia',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Pennsylvania',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
      },
    }
  },
  mounted() {
    this.remote.list = this.remote.states.map(item => {
      return { value: item, label: item }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.remote.loading = true
        setTimeout(() => {
          this.remote.loading = false
          this.remote.options = this.remote.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.remote.options = []
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
