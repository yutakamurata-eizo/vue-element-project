<template>
  <div class="table1">
    <div class="sample">
      <h2>Basic table</h2>
      <el-table :data="tableData1" style="width: 100%;">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Striped table</h2>
      <el-table :data="tableData1" stripe style="width: 100%;">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Table with border</h2>
      <el-table :data="tableData1" border style="width: 100%;">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Table with status</h2>
      <el-table :data="tableData1" :row-class-name="tableRowClassName" style="width: 100%;">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Table with fixed header</h2>
      <el-table :data="tableData2" height="250" style="width: 100%;">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Table with fixed column</h2>
      <el-table :data="tableData3" style="width: 100%;">
        <el-table-column prop="date" label="Date" width="150"></el-table-column>
        <el-table-column prop="name" label="Name" width="120"></el-table-column>
        <el-table-column prop="state" label="State" width="120"></el-table-column>
        <el-table-column prop="city" label="City" width="120"></el-table-column>
        <el-table-column prop="address" label="Address" width="300"></el-table-column>
        <el-table-column prop="zip" label="Zip" width="120"></el-table-column>
        <el-table-column fixed="right" label="Operations" width="120">
          <template>
            <el-button @click="handleClick" type="text" size="small">Detail</el-button>
            <el-button type="text" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Table with fixed column and header</h2>
      <el-table :data="tableData3" style="width: 100%;" height="200">
        <el-table-column fixed prop="date" label="Date" width="150"></el-table-column>
        <el-table-column prop="name" label="Name" width="120"></el-table-column>
        <el-table-column prop="state" label="State" width="120"></el-table-column>
        <el-table-column prop="city" label="City" width="120"></el-table-column>
        <el-table-column prop="address" label="Address" width="400"></el-table-column>
        <el-table-column prop="zip" label="Zip" width="150"></el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Fluid-height Table with fixed header(and columns)</h2>
      <el-table :data="tableData3" style="width: 100%;" height="200">
        <el-table-column fixed prop="date" label="Date" width="150"></el-table-column>
        <el-table-column prop="name" label="Name" width="120"></el-table-column>
        <el-table-column prop="state" label="State" width="120"></el-table-column>
        <el-table-column prop="city" label="City" width="120"></el-table-column>
        <el-table-column prop="address" label="Address" width="400"></el-table-column>
        <el-table-column prop="zip" label="Zip" width="150"></el-table-column>
        <el-table-column fixed="right" label="Operations" width="120">
          <template>
            <el-button @click="handleClick" type="text" size="small">Detail</el-button>
            <el-button type="text" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Grouping table head</h2>
      <el-table :data="tableData4" style="width: 100%;">
        <el-table-column prop="date" label="Date" width="150"></el-table-column>
        <el-table-column label="Delivery Info">
          <el-table-column prop="name" label="Name" width="120"></el-table-column>
          <el-table-column label="Address Info">
            <el-table-column prop="state" label="State" width="120"></el-table-column>
            <el-table-column prop="city" label="City" width="120"></el-table-column>
            <el-table-column prop="address" label="Address" width="300"></el-table-column>
            <el-table-column prop="zip" label="Zip" width="120"></el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Single select</h2>
      <el-table
        ref="singleTable"
        :data="tableData5"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%;"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="date" label="Date" width="120"></el-table-column>
        <el-table-column property="name" label="Name" width="120"></el-table-column>
        <el-table-column property="address" label="Address"></el-table-column>
      </el-table>
      <div style="margin-top: 20px;">
        <el-button @click="setCurrent(tableData5[1])">Select second row</el-button>
        <el-button @click="setCurrent(tableData5[0])">Clear selection</el-button>
      </div>
    </div>

    <div class="sample">
      <h2>Multiple select</h2>
      <el-table
        ref="multipleTable"
        :data="tableData5"
        highlight-current-row
        @current-change="handleCurrentChange2"
        style="width: 100%;"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="Date" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="Name" width="120"></el-table-column>
        <el-table-column property="address" label="Address" show-overflow-tooltip></el-table-column>
      </el-table>
      <div style="margin-top: 20px;">
        <el-button @click="toggleSelection([tableData5[1], tableData5[2]])"
          >Toggle selection status of second and third rows</el-button
        >
        <el-button @click="toggleSelection()">Clear selection</el-button>
      </div>
    </div>

    <div class="sample">
      <h2>Sorting</h2>
      <el-table :data="tableData5" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%;">
        <el-table-column prop="date" label="Date" width="180" sortable></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address" :formatter="formatter"></el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Filter</h2>
      <el-row>
        <el-button @click="resetDateFilter">reset date filter</el-button>
        <el-button @click="clearFilter">reset all filters</el-button>
      </el-row>
      <el-row>
        <el-table ref="filterTable" :data="tableData3" style="width: 100%;">
          <el-table-column
            prop="date"
            label="Date"
            width="180"
            sortable
            column-key="date"
            :filters="[
              { text: '2016-05-01', value: '2016-05-01' },
              { text: '2016-05-02', value: '2016-05-02' },
              { text: '2016-05-03', value: '2016-05-03' },
              { text: '2016-05-04', value: '2016-05-04' },
            ]"
            :filter-method="filterHandler"
          ></el-table-column>
          <el-table-column prop="name" label="Name" width="180"></el-table-column>
          <el-table-column prop="address" label="Address"></el-table-column>
          <el-table-column
            prop="tag"
            label="Tag"
            width="100"
            :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" disable-transitions>{{
                scope.row.tag
              }}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </div>

    <div class="sample">
      <h2>Custom column template</h2>
      <el-table :data="tableData6" style="width: 100%;">
        <el-table-column label="Date" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px;">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Name" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>Name: {{ scope.row.name }}</p>
              <p>Address: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Table with custom header</h2>
      <el-table
        :data="tableData6.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;"
      >
        <el-table-column label="Date" prop="date"></el-table-column>
        <el-table-column label="Name" prop="name"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="Type to search" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Expandable row</h2>
      <el-table :data="tableData3" style="width: 100%;">
        <el-table-column type="expand">
          <template slot-scope="props">
            <p>State：{{ props.row.state }}</p>
            <p>City：{{ props.row.city }}</p>
            <p>Address：{{ props.row.address }}</p>
            <p>Zip：{{ props.row.zip }}</p>
          </template>
        </el-table-column>
        <el-table-column label="Date" prop="date"></el-table-column>
        <el-table-column label="Name" prop="name"></el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Tree data and lazy mode</h2>
      <el-table :data="tableData7" style="width: 100%; margin-bottom: 20px;" row-key="id" border default-expand-all>
        <el-table-column prop="date" label="Date" sortable width="180"></el-table-column>
        <el-table-column prop="name" label="Name" sortable width="180"></el-table-column>
      </el-table>
      <el-table
        :data="tableData8"
        style="width: 100%"
        row-key="id"
        border
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="date" label="Date" width="180"> </el-table-column>
        <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Summary row</h2>
      <el-table :data="tableData9" border show-summary style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="amount1" sortable label="Amount 1"> </el-table-column>
        <el-table-column prop="amount2" sortable label="Amount 2"> </el-table-column>
        <el-table-column prop="amount3" sortable label="Amount 3"> </el-table-column>
      </el-table>

      <el-table
        :data="tableData9"
        border
        height="200"
        :summary-method="getSummaries"
        show-summary
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="amount1" label="Cost 1 ($)"> </el-table-column>
        <el-table-column prop="amount2" label="Cost 2 ($)"> </el-table-column>
        <el-table-column prop="amount3" label="Cost 3 ($)"> </el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Rowspan and colspan</h2>
      <el-table :data="tableData10" :span-method="arraySpanMethod" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="amount1" sortable label="Amount 1"> </el-table-column>
        <el-table-column prop="amount2" sortable label="Amount 2"> </el-table-column>
        <el-table-column prop="amount3" sortable label="Amount 3"> </el-table-column>
      </el-table>

      <el-table :data="tableData10" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="amount1" label="Amount 1"> </el-table-column>
        <el-table-column prop="amount2" label="Amount 2"> </el-table-column>
        <el-table-column prop="amount3" label="Amount 3"> </el-table-column>
      </el-table>
    </div>

    <div class="sample">
      <h2>Custom index</h2>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod"> </el-table-column>
        <el-table-column prop="date" label="Date" width="180"> </el-table-column>
        <el-table-column prop="name" label="Name" width="180"> </el-table-column>
        <el-table-column prop="address" label="Address"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      tableData2: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      tableData3: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
      ],
      tableData4: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
      ],
      tableData5: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      currentRow: null,
      multipleSelection: [],
      tableData6: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Ai',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Python',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Vue',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      search: '',
      tableData7: [
        {
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu',
            },
            {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu',
            },
          ],
        },
        {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu',
        },
      ],
      tableData8: [
        {
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          hasChildren: true,
        },
        {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu',
        },
      ],
      tableData9: [
        {
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
        },
        {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
        },
        {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9,
        },
        {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17,
        },
        {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15,
        },
      ],
      tableData10: [
        {
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
        },
        {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
        },
        {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9,
        },
        {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17,
        },
        {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15,
        },
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
      ],
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
    },
    handleClick() {
      console.log('click')
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange(val) {
      this.currentRow = val
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleCurrentChange2(val) {
      this.currentRow = val
    },
    formatter(row, column) {
      return row.address
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
        ])
      }, 1000)
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = 'Total Cost'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] =
            '$ ' +
            values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          }
        }
      }
    },
    indexMethod(index) {
      return index * 2
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
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
