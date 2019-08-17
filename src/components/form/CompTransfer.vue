<template>
  <div class="transfer">
    <div class="sample">
      <h2>Basic Transfer</h2>
      <el-row>
        <el-transfer v-model="value1" :data="data1"></el-transfer>
      </el-row>
    </div>

    <div class="sample">
      <h2>Filterable</h2>
      <el-row>
        <h3>Default Filter Method</h3>
        <el-transfer filterable filter-placeholder="State Abbreviations" v-model="value2" :data="data2" />
      </el-row>
      <el-row>
        <h3>Custom Filter Method</h3>
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="State Abbreviations"
          v-model="value2"
          :data="data2"
        />
      </el-row>
    </div>

    <div class="sample">
      <h2>Customizable</h2>
      <el-row>
        <h3>Customize data items using render-content</h3>
        <el-transfer
          v-model="value3"
          filterable
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :render-content="renderFunc"
          :titles="['Source', 'Target']"
          :button-texts="['To left', 'To right']"
          :format="{ noChecked: '${total}', hasChecked: '${checked} / ${total}' }"
          @change="handleChange"
          :data="data3"
        >
          <el-button class="transfer-footer" slot="left-footer" size="small">Operation</el-button>
          <el-button class="transfer-footer" slot="right-footer" size="small">Operation</el-button>
        </el-transfer>
      </el-row>
      <el-row>
        <h3>Customize data items using scoped slot</h3>
        <el-transfer
          v-model="value4"
          filterable
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :titles="['Source', 'Target']"
          :button-texts="['To left', 'To right']"
          :format="{ noChecked: '${total}', hasChecked: '${checked} / ${total}' }"
          @change="handleChange"
          :data="data3"
        >
          <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
          <el-button class="transfer-footer" slot="left-footer" size="small">Operation</el-button>
          <el-button class="transfer-footer" slot="right-footer" size="small">Operation</el-button>
        </el-transfer>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data() {
    const generateData1 = () => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        })
      }
      return data
    }
    const generateData2 = () => {
      const data = []
      const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut']
      const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
      states.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          initial: initials[index],
        })
      })
      return data
    }
    return {
      data1: generateData1(),
      data2: generateData2(),
      data3: generateData1(),
      value1: [1, 4],
      value2: [],
      value3: [1],
      value4: [1],
      filterMethod(query, item) {
        return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1
      },
      renderFunc(h, option) {
        return (
          <span>
            {option.key} - {option.label}
          </span>
        )
      },
    }
  },
  methods: {
    handleChange(value, direction, moveKeys) {
      console.log(value, direction, moveKeys)
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
.el-transfer {
  text-align: left;
}
</style>
