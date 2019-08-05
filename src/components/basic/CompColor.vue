<template>
  <div class="color">
    <div class="sample">
      <h2>Main Color</h2>
      <div v-for="item in blandColor" class="tile" :style="{ background: item.color }" :key="item.id">
        {{ item.color }}
      </div>
    </div>

    <div class="sample">
      <h2>Secondary Color</h2>
      <h3>Success</h3>
      <div
        v-for="item in successColor"
        @click="colorCopy(item.color)"
        class="tile"
        :style="{ background: item.color }"
        :key="item.id"
      >
        {{ item.color }}
      </div>

      <h3>Warning</h3>
      <div
        v-for="item in warningColor"
        @click="colorCopy(item.color)"
        class="tile"
        :style="{ background: item.color }"
        :key="item.id"
      >
        {{ item.color }}
      </div>

      <h3>Danger</h3>
      <div
        v-for="item in dangerColor"
        @click="colorCopy(item.color)"
        class="tile"
        :style="{ background: item.color }"
        :key="item.id"
      >
        {{ item.color }}
      </div>

      <h3>Info</h3>
      <div
        v-for="item in infoColor"
        @click="colorCopy(item.color)"
        class="tile"
        :style="{ background: item.color }"
        :key="item.id"
      >
        {{ item.color }}
      </div>
    </div>

    <div class="sample">
      <h2>Neutral Color</h2>
      <template v-for="item in neutralColor">
        <h3 :key="item.id">{{ item.name }}</h3>
        <div @click="colorCopy(item.color)" class="tile" :style="{ background: item.color }" :key="item.id">
          {{ item.color }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Color',
  data() {
    return {
      blandColor: [
        { id: 1, color: '#409EFF' },
        { id: 2, color: 'rgb(83, 168, 255)' },
        { id: 3, color: 'rgb(102, 177, 255)' },
        { id: 4, color: 'rgb(121, 187, 255)' },
        { id: 5, color: 'rgb(140, 197, 255)' },
        { id: 6, color: 'rgb(160, 207, 255)' },
        { id: 7, color: 'rgb(179, 216, 255)' },
        { id: 8, color: 'rgb(198, 226, 255)' },
        { id: 9, color: 'rgb(217, 236, 255)' },
      ],
      successColor: [
        { id: 1, color: '#67C23A' },
        { id: 2, color: 'rgb(225, 243, 216)' },
        { id: 3, color: 'rgb(240, 249, 235)' },
      ],
      warningColor: [
        { id: 1, color: '#E6A23C' },
        { id: 2, color: 'rgb(250, 236, 216)' },
        { id: 3, color: 'rgb(253, 246, 236)' },
      ],
      dangerColor: [
        { id: 1, color: '#F56C6C' },
        { id: 2, color: 'rgb(253, 226, 226)' },
        { id: 3, color: 'rgb(254, 240, 240)' },
      ],
      infoColor: [
        { id: 1, color: '#909399' },
        { id: 2, color: 'rgb(233, 233, 235)' },
        { id: 3, color: 'rgb(244, 244, 245)' },
      ],
      neutralColor: [
        { id: 1, name: 'Primary Text', color: '#303133' },
        { id: 2, name: 'Regular Text', color: '#606266' },
        { id: 3, name: 'Secondary Text', color: '#909399' },
        { id: 4, name: 'Placeholder Text', color: '#C0C4CC' },
        { id: 5, name: 'Base Border', color: '#DCDFE6' },
        { id: 6, name: 'Light Border', color: '#E4E7ED' },
        { id: 7, name: 'Lighter Border', color: '#EBEEF5' },
        { id: 8, name: 'Extra Light Border', color: '#F2F6FC' },
        { id: 9, name: 'Basic Black', color: '#000000' },
        { id: 10, name: 'Basic White', color: '#FFFFFF' },
      ],
    }
  },
  methods: {
    colorCopy: color => {
      alert(color)
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
h3 {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.tile {
  display: inline-block;
  margin-top: 10px;
  width: 140px;
  height: 60px;
  line-height: 60px;
  border: #bbb solid 1px;
  border-radius: 5px;
  color: #333;
}
.tile + .tile {
  margin-left: 10px;
}
.tile:hover {
  cursor: pointer;
}
</style>
