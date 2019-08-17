<template>
  <div class="timepicker">
    <div class="sample">
      <h2>Fixed TimePicker</h2>
      <el-time-select
        v-model="value1"
        :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
        placeholder="Select time"
      />
    </div>

    <div class="sample">
      <h2>Arbitrary time picker</h2>
      <el-row>
        <el-time-picker
          v-model="value1"
          :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
          placeholder="Arbitrary time"
        />
      </el-row>
      <el-row>
        <el-time-picker
          v-model="value2"
          :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
          placeholder="Arbitrary time"
          arrow-control
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Fixed time range</h2>
      <el-row>
        <el-time-picker
          v-model="startTime"
          :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
          placeholder="start time"
        />
      </el-row>
      <el-row>
        <el-time-picker
          v-model="endTime"
          :picker-options="{ start: '08:30', step: '00:15', end: '18:30', minTime: startTime }"
          placeholder="end time"
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Arbitrary time range</h2>
      <el-row>
        <el-time-picker
          is-range
          v-model="value1"
          range-separator="To"
          start-placeholde="Start time"
          end-placeholde="End time"
        />
      </el-row>
      <el-row>
        <el-time-picker
          is-range
          arrow-control
          v-model="value2"
          range-separator="To"
          start-placeholde="Start time"
          end-placeholde="End time"
        />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimePicker',
  data() {
    return {
      value1: '',
      value2: new Date(2019, 8, 10, 19, 0, 30),
      startTime: '',
      endTime: '',
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
