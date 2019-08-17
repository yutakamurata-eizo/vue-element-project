<template>
  <div class="datetimepicker">
    <div class="sample">
      <h2>Date and time</h2>
      <el-row>
        <h3>Default</h3>
        <el-date-picker v-model="value1" type="datetime" placeholder="Select date and time" />
      </el-row>
      <el-row>
        <h3>With shortcuts</h3>
        <el-date-picker
          v-model="value2"
          type="datetime"
          placeholder="Select date and time"
          :picker-options="pickerOptions"
        />
      </el-row>
      <el-row>
        <h3>With default time</h3>
        <el-date-picker v-model="value3" type="datetime" placeholder="Select date and time" default-time="12:00:00" />
      </el-row>
    </div>

    <div class="sample">
      <h3>Default time value for start date and end date</h3>
      <el-row>
        <el-date-picker
          v-model="value4"
          type="datetimerange"
          start-placeholde="Start Date"
          end-placeholde="End Date"
          :default-time="['12:00:00']"
        />
      </el-row>
      <el-row>
        <el-date-picker
          v-model="value5"
          type="datetimerange"
          align="right"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          :default-time="['12:00:00', '08:00:00']"
        />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateTimePicker',
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      pickerOptions: {
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
