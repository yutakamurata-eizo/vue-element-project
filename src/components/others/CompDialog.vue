<template>
  <div class="dialog2">
    <div class="sample">
      <h2>Basic Dialog</h2>
      <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

      <el-dialog title="Tips" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
    </div>

    <div class="sample">
      <h2>Customizations</h2>
      <!-- Table Start -->
      <el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>

      <el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
          <el-table-column property="date" label="Date" width="150"></el-table-column>
          <el-table-column property="name" label="Name" width="200"></el-table-column>
          <el-table-column property="address" label="Address"></el-table-column>
        </el-table>
      </el-dialog>
      <!-- Table End -->

      <!-- Form Start -->
      <el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>

      <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Promotion name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Zones" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="Please select a zone">
              <el-option label="Zone No.1" value="shanghai"></el-option>
              <el-option label="Zone No.2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
      <!-- Form End -->
    </div>

    <div class="sample">
      <h2>Centered content</h2>
      <el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>

      <el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
        <span>It should be noted that the content will not be aligned in center by default</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      dialogVisible: false,
      gridData: [
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
        {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      formLabelWidth: '120px',
      centerDialogVisible: false,
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(() => {
          done()
        })
        .catch(() => {})
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
