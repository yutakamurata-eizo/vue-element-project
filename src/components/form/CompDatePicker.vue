<template>
  <div class="datepicker">
    <div class="sample">
      <h2>Basic DatePicker</h2>
      <el-row>
        <el-col :span="12">
          <h3>Default</h3>
          <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
        </el-col>
        <el-col :span="12">
          <h3>Picker with quick options</h3>
          <el-date-picker v-model="value2" type="date" placeholder="Pick a day" :picker-options="pickerOptions" />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Other measurements</h2>
      <el-row>
        <el-col :span="12">
          <h3>Week</h3>
          <el-date-picker v-model="value3" type="week" format="week WW" placeholder="Pick a week" />
        </el-col>
        <el-col :span="12">
          <h3>Month</h3>
          <el-date-picker v-model="value4" type="month" placeholder="Pick a month" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <h3>Year</h3>
          <el-date-picker v-model="value5" type="year" placeholder="Pick a year" />
        </el-col>
        <el-col :span="12">
          <h3>Dates</h3>
          <el-date-picker v-model="value6" type="dates" placeholder="Pick a one or more dates" />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Date Range</h2>
      <el-row>
        <h3>Default</h3>
        <el-date-picker
          v-model="value7"
          type="daterange"
          range-separator="To"
          start-placeholde="Start date"
          end-placeholde="End date"
        />
      </el-row>
      <el-row>
        <h3>With quick options</h3>
        <el-date-picker
          v-model="value8"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="To"
          start-placeholde="Start date"
          end-placeholde="End date"
          :picker-options="pickerOptions2"
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Date Range</h2>
      <el-row>
        <h3>Default</h3>
        <el-date-picker
          v-model="value9"
          type="monthrange"
          range-separator="To"
          start-placeholde="Start month"
          end-placeholde="End month"
        />
      </el-row>
      <el-row>
        <h3>With quick options</h3>
        <el-date-picker
          v-model="value10"
          type="monthrange"
          align="right"
          unlink-panels
          range-separator="To"
          start-placeholde="Start month"
          end-placeholde="End month"
          :picker-options="pickerOptions3"
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Default Value</h2>
      <el-row>
        <h3>date</h3>
        <el-date-picker v-model="value1" type="date" placeholder="Pick a date" default-value="2019-08-10" />
      </el-row>
      <el-row>
        <h3>daterange</h3>
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          start-placeholder="Start date"
          end-placeholder="End date"
          default-value="2019-08-10"
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Date Format</h2>
      <el-row>
        <h3>Emits Date object</h3>
        <div>Value: {{ value11 }}</div>
        <el-date-picker v-model="value11" type="date" placeholder="Pick a date" format="yyyy/MM/dd" />
      </el-row>
      <el-row>
        <h3>Use value-format</h3>
        <div>Value: {{ value12 }}</div>
        <el-date-picker
          v-model="value12"
          type="date"
          placeholder="Pick a date"
          format="yyyy/MM/dd"
          value-format="yyyy-MM-dd"
        />
      </el-row>
      <el-row>
        <h3>Timestamp</h3>
        <div>Value: {{ value13 }}</div>
        <el-date-picker
          v-model="value13"
          type="date"
          placeholder="Pick a date"
          format="yyyy/MM/dd"
          value-format="timestamp"
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Default time for start date and end date</h2>
      <div>Component value: {{ value14 }}</div>
      <el-date-picker
        v-model="value14"
        type="daterange"
        start-placeholder="Start date"
        end-placeholder="End date"
        :default-time="['00:00:00', '23:59:59']"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      value14: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date())
            },
          },
          {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            },
          },
          {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            },
          },
        ],
      },
      pickerOptions2: {
        shortcuts: [
          {
            text: 'Last week',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'Last month',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
      pickerOptions3: {
        shortcuts: [
          {
            text: 'This month',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()])
            },
          },
          {
            text: 'This year',
            onClick(picker) {
              const end = new Date()
              const start = new Date(new Date().getFullYear(), 0)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'Last 6 months',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 6)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
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
</style>
