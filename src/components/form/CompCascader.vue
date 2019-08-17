<template>
  <div class="cascader">
    <div class="sample">
      <h2>Basic Cascader、Disabled、Clearable</h2>
      <el-row>
        <el-col :span="12">
          <h3>Child options expand when clicked(default)</h3>
          <el-cascader v-model="value" :options="options" @change="handleChange" clearable />
        </el-col>
        <el-col :span="12">
          <h3>Child options expand when hovered</h3>
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
            clearable
          />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Display only the last label</h2>
      <el-cascader v-model="value" :options="options" @change="handleChange" :show-all-levels="false" />
    </div>

    <div class="sample">
      <h2>Multiple Selection</h2>
      <el-row>
        <el-col :span="12">
          <h3>Display all tags(default)</h3>
          <el-cascader :options="options2" :props="props" clearable />
        </el-col>
        <el-col :span="12">
          <h3>Collapse tags</h3>
          <el-cascader :options="options2" :props="props" collapse-tags clearable />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Select any level options</h2>
      <el-row>
        <el-col :span="12">
          <h3>Single Selection</h3>
          <el-cascader :options="options" :props="{ checkStrictly: true }" clearable />
        </el-col>
        <el-col :span="12">
          <h3>Multiple Selection</h3>
          <el-cascader :options="options" :props="{ multiple: true, checkStrictly: true }" clearable />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Dynamic loading</h2>
      <el-cascader :props="props2"></el-cascader>
    </div>

    <div class="sample">
      <h2>Filterable</h2>
      <el-row>
        <el-col :span="12">
          <h3>Single Selection</h3>
          <el-cascader placeholder="Try search" :options="options" filterable />
        </el-col>
        <el-col :span="12">
          <h3>Multiple Selection</h3>
          <el-cascader placeholder="Try search" :options="options" :props="{ multiple: true }" filterable />
        </el-col>
      </el-row>
    </div>

    <div class="sample">
      <h2>Custom option content</h2>
      <el-cascader :options="options">
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }})</span>
        </template>
      </el-cascader>
    </div>

    <div class="sample">
      <h2>Cascader panel</h2>
      <el-cascader-panel :options="options"></el-cascader-panel>
    </div>
  </div>
</template>

<script>
let id = 0

export default {
  name: 'Cascader',
  data() {
    return {
      value: [],
      options: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              disabled: true,
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency',
                },
                {
                  value: 'feedback',
                  label: 'Feedback',
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency',
                },
                {
                  value: 'controllability',
                  label: 'Controllability',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation',
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation',
                },
              ],
            },
          ],
        },
        {
          value: 'component',
          label: 'Component',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout',
                },
                {
                  value: 'color',
                  label: 'Color',
                },
                {
                  value: 'typography',
                  label: 'Typography',
                },
                {
                  value: 'icon',
                  label: 'Icon',
                },
                {
                  value: 'button',
                  label: 'Button',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio',
                  disabled: true,
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox',
                  disabled: true,
                },
                {
                  value: 'input',
                  label: 'Input',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber',
                },
                {
                  value: 'select',
                  label: 'Select',
                },
                {
                  value: 'cascader',
                  label: 'Cascader',
                },
                {
                  value: 'switch',
                  label: 'Switch',
                },
                {
                  value: 'slider',
                  label: 'Slider',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker',
                },
                {
                  value: 'upload',
                  label: 'Upload',
                },
                {
                  value: 'rate',
                  label: 'Rate',
                },
                {
                  value: 'form',
                  label: 'Form',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table',
                },
                {
                  value: 'tag',
                  label: 'Tag',
                },
                {
                  value: 'progress',
                  label: 'Progress',
                },
                {
                  value: 'tree',
                  label: 'Tree',
                },
                {
                  value: 'pagination',
                  label: 'Pagination',
                },
                {
                  value: 'badge',
                  label: 'Badge',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert',
                },
                {
                  value: 'loading',
                  label: 'Loading',
                },
                {
                  value: 'message',
                  label: 'Message',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox',
                },
                {
                  value: 'notification',
                  label: 'Notification',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu',
                },
                {
                  value: 'tabs',
                  label: 'Tabs',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown',
                },
                {
                  value: 'steps',
                  label: 'Steps',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip',
                },
                {
                  value: 'popover',
                  label: 'Popover',
                },
                {
                  value: 'card',
                  label: 'Card',
                },
                {
                  value: 'carousel',
                  label: 'Carousel',
                },
                {
                  value: 'collapse',
                  label: 'Collapse',
                },
              ],
            },
          ],
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'docs',
              label: 'Design Documentation',
            },
          ],
        },
      ],
      props: {
        multiple: true,
      },
      options2: [
        {
          value: 1,
          label: 'Asia',
          children: [
            {
              value: 2,
              label: 'China',
              children: [
                { value: 3, label: 'Beijing' },
                { value: 4, label: 'Shanghai' },
                { value: 5, label: 'Hangzhou' },
              ],
            },
            {
              value: 6,
              label: 'Japan',
              children: [{ value: 7, label: 'Tokyo' }, { value: 8, label: 'Osaka' }, { value: 9, label: 'Kyoto' }],
            },
            {
              value: 10,
              label: 'Korea',
              children: [{ value: 11, label: 'Seoul' }, { value: 12, label: 'Busan' }, { value: 13, label: 'Taegu' }],
            },
          ],
        },
        {
          value: 14,
          label: 'Europe',
          children: [
            {
              value: 15,
              label: 'France',
              children: [
                { value: 16, label: 'Paris' },
                { value: 17, label: 'Marseille' },
                { value: 18, label: 'Lyon' },
              ],
            },
            {
              value: 19,
              label: 'UK',
              children: [
                { value: 20, label: 'London' },
                { value: 21, label: 'Birmingham' },
                { value: 22, label: 'Manchester' },
              ],
            },
          ],
        },
        {
          value: 23,
          label: 'North America',
          children: [
            {
              value: 24,
              label: 'US',
              children: [
                { value: 25, label: 'New York' },
                { value: 26, label: 'Los Angeles' },
                { value: 27, label: 'Washington' },
              ],
            },
            {
              value: 28,
              label: 'Canada',
              children: [
                { value: 29, label: 'Toronto' },
                { value: 30, label: 'Montreal' },
                { value: 31, label: 'Ottawa' },
              ],
            },
          ],
        },
      ],
      props2: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: ++id,
              label: `Option-${id}`,
              leaf: level >= 2,
            }))
            resolve(nodes)
          }, 1000)
        },
      },
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
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
