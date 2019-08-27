<template>
  <div class="calendar">
    <div class="sample">
      <h2>Basic Calendar</h2>
      <el-calendar v-model="value" />
    </div>

    <div class="sample">
      <h2>Custom content</h2>
      <el-calendar>
        <!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax-->
        <template slot="dateCell" slot-scope="{ date, data }">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{
              data.day
                .split('-')
                .slice(1)
                .join('-')
            }}
            {{ data.isSelected ? '✔️' : '' }}
          </p>
        </template>
      </el-calendar>
    </div>

    <div class="sample">
      <h2>Range</h2>
      <el-calendar :range="['2019-03-04', '2019-03-24']"> </el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      value: new Date(),
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
.is-selected {
  color: #1989fa;
}
</style>
