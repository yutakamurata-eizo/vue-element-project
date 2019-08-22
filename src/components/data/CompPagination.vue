<template>
  <div class="pagination">
    <div class="sample">
      <h2>Basic Pagination</h2>
      <el-row>
        <h3>When you have few pages</h3>
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </el-row>
      <el-row>
        <h3>When you have more than 7 pages</h3>
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </el-row>
    </div>

    <div class="sample">
      <h2>Number of pages</h2>
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
    </div>

    <div class="sample">
      <h2>Buttons with background color</h2>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>

    <div class="sample">
      <h2>Small Pagination</h2>
      <el-pagination small layout="prev, pager, next" :total="1000"></el-pagination>
    </div>

    <div class="sample">
      <h2>More elements</h2>
      <el-row>
        <h3>Total item count</h3>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        />
      </el-row>
      <el-row>
        <h3>Change page size</h3>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000"
        />
      </el-row>
      <el-row>
        <h3>Jump to</h3>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        />
      </el-row>
      <el-row>
        <h3>All combined</h3>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Hide pagination when there is only one page</h2>
      <el-switch v-model="value"></el-switch>
      <el-pagination :hide-on-single-page="value" :total="5" layout="prev, pager, next" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      value: false,
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`)
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`)
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
