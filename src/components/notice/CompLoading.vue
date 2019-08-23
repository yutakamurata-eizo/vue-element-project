<template>
  <div class="loading">
    <div class="sample">
      <h2>Loading inside a container</h2>
      <el-row>
        <el-button type="primary" @click="toggleLoading">Loading</el-button>
      </el-row>
      <el-row>
        <el-table v-loading="loading" :data="tableData" style="width: 100%;">
          <el-table-column prop="date" label="Date" width="180"> </el-table-column>
          <el-table-column prop="name" label="Name" width="180"> </el-table-column>
          <el-table-column prop="address" label="Address"> </el-table-column>
        </el-table>
      </el-row>
    </div>

    <div class="sample">
      <h2>Customization</h2>
      <el-row>
        <el-button type="primary" @click="toggleLoading">Loading</el-button>
      </el-row>
      <el-row>
        <el-table
          v-loading="loading"
          element-loading-text="Loading..."
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          :data="tableData"
          style="width: 100%;"
        >
          <el-table-column prop="date" label="Date" width="180"> </el-table-column>
          <el-table-column prop="name" label="Name" width="180"> </el-table-column>
          <el-table-column prop="address" label="Address"> </el-table-column>
        </el-table>
      </el-row>
    </div>

    <div class="sample">
      <h2>Full screen loading</h2>
      <el-button
        type="primary"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        >As a directive</el-button
      >
      <el-button type="primary" @click="openFullScreen2">As a service</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
      ],
      loading: false,
      fullscreenLoading: false,
    }
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
    },
    openFullScreen1() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 5000)
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
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
