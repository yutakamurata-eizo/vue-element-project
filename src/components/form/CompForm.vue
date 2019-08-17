<template>
  <div class="form">
    <div class="sample">
      <h2>Basic Form、Validation</h2>
      <el-form ref="form" :model="formData1" label-width="120px" style="text-align: left;" :rules="rules">
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="formData1.name" />
        </el-form-item>
        <el-form-item label="Activity zone" prop="region">
          <el-select v-model="formData1.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time" required>
          <el-col :span="8">
            <el-date-picker type="date" placeholder="Pick a date" v-model="formData1.date1" style="width: 100%;" />
          </el-col>
          <el-col class="line" :span="1" style="text-align: center;">-</el-col>
          <el-col :span="8">
            <el-time-picker placeholder="Pick a time" v-model="formData1.date2" style="width: 100%;" />
          </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery" prop="type">
          <el-checkbox-group v-model="formData1.type">
            <el-checkbox label="Online activities" name="type"></el-checkbox>
            <el-checkbox label="Promotion activities" name="type"></el-checkbox>
            <el-checkbox label="Offline activities" name="type"></el-checkbox>
            <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources" prop="resource">
          <el-radio-group v-model="formData1.resource">
            <el-radio label="Sponsor"></el-radio>
            <el-radio label="Venue"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form" prop="desc">
          <el-input type="textarea" v-model="formData1.desc" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">Create</el-button>
          <el-button @click="resertForm('form')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="sample">
      <h2>Inline Form</h2>
      <el-form :inline="true" :model="formData2" class="demo-form-inline" style="text-align: left;">
        <el-form-item label="Approved by">
          <el-input v-model="formData2.user" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formData2.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="sample">
      <h2>Alignment</h2>
      <el-radio-group v-model="formData3.labelPosition" size="small">
        <el-radio-button label="left">Left</el-radio-button>
        <el-radio-button label="right">Right</el-radio-button>
        <el-radio-button label="top">Top</el-radio-button>
      </el-radio-group>
      <div style="margin: 20px;"></div>
      <el-form
        :label-position="formData3.labelPosition"
        label-width="100px"
        :model="formData3"
        style="text-align: left;"
      >
        <el-form-item label="Name">
          <el-input v-model="formData3.name"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input v-model="formData3.region"></el-input>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="formData3.type"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="sample">
      <h2>Custom validation rules</h2>
      <el-form ref="form4" :model="formData4" label-width="120px" style="text-align: left;" :rules="rules2" status-icon>
        <el-form-item label="Password" prop="pass">
          <el-input type="password" v-model="formData4.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input type="password" v-model="formData4.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Age" prop="age">
          <el-input v-model.number="formData4.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form4')">Submit</el-button>
          <el-button @click="resetForm('form4')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="sample">
      <h2>Delete or add form items dynamically</h2>
      <el-form ref="form5" :model="formData5" label-width="120px" style="text-align: left;" status-icon>
        <el-form-item
          :prop="email"
          :label="Email"
          :rules="[
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
          ]"
        >
          <el-input v-model="formData5.email" />
        </el-form-item>
        <el-form-item
          v-for="(domain, index) in formData5.domains"
          :label="'Domain' + index"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true,
            message: 'domain can not be null',
            trigger: 'blur',
          }"
        >
          <el-input v-model="domain.value"></el-input
          ><el-button @click.prevent="removeDomain(domain)">Delete</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form5')">Submit</el-button>
          <el-button @click="addDomain">New domain</el-button>
          <el-button @click="resetForm('form5')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="sample">
      <h2>Number Validate</h2>
      <el-form :model="formData6" ref="form6" label-width="120px" style="text-align: left;" status-icon>
        <el-form-item
          label="age"
          prop="age"
          :rules="[{ required: true, message: 'age is required' }, { type: 'number', message: 'age must be a number' }]"
        >
          <el-input type="age" v-model.number="formData6.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form6')">Submit</el-button>
          <el-button @click="resetForm('form6')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the age'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'))
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.formData4.checkPass !== '') {
          this.$refs.form4.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.formData4.pass) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    }
    return {
      formData1: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      formData2: {
        user: '',
        region: '',
      },
      formData3: {
        labelPosition: 'right',
        name: '',
        region: '',
        type: '',
      },
      formData4: {
        pass: '',
        checkPass: '',
        age: '',
      },
      formData5: {
        domains: [
          {
            key: 1,
            value: '',
          },
        ],
        email: '',
      },
      formData6: {
        age: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
          },
        ],
        region: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
          },
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [
          {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
          },
        ],
        desc: [
          {
            required: true,
            message: 'Please input activity form',
            trigger: 'blur',
          },
        ],
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }],
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain(item) {
      var index = this.formData5.domains.indexOf(item)
      if (index !== -1) {
        this.formData5.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.formData5.domains.push({
        key: Date.now(),
        value: '',
      })
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
