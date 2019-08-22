import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Basic from './views/basic/index.vue'
import Layout from './views/basic/layout.vue'
import Container from './views/basic/container.vue'
import Color from './views/basic/color.vue'
import Button from './views/basic/button.vue'
import Link from './views/basic/link.vue'
import Data from './views/data/index.vue'
import Table from './views/data/table.vue'
import Tag from './views/data/tag.vue'
import Progress from './views/data/progress.vue'
import Tree from './views/data/tree.vue'
import Pagination from './views/data/pagination.vue'
import Badge from './views/data/badge.vue'
import Form from './views/form/index.vue'
import Radio from './views/form/radio.vue'
import Checkbox from './views/form/checkbox.vue'
import Input from './views/form/input.vue'
import InputNumber from './views/form/inputNumber.vue'
import Select from './views/form/select.vue'
import Cascader from './views/form/cascader.vue'
import Switch from './views/form/switch.vue'
import Slider from './views/form/slider.vue'
import TimePicker from './views/form/timepicker.vue'
import DatePicker from './views/form/datepicker.vue'
import DateTimePicker from './views/form/datetimepicker.vue'
import Upload from './views/form/upload.vue'
import Rate from './views/form/rate.vue'
import ColorPicker from './views/form/colorpicker.vue'
import Transfer from './views/form/transfer.vue'
import Form2 from './views/form/form.vue'
import Navigation from './views/navigation/index.vue'
import Notice from './views/notice/index.vue'
import Others from './views/others/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // === Basic start ===
    {
      path: '/basic',
      name: 'basic',
      component: Basic,
    },
    {
      path: '/basic/layout',
      name: 'basic/layout',
      component: Layout,
    },
    {
      path: '/basic/container',
      name: 'basic/container',
      component: Container,
    },
    {
      path: '/basic/color',
      name: 'basic/color',
      component: Color,
    },
    {
      path: '/basic/button',
      name: 'basic/button',
      component: Button,
    },
    {
      path: '/basic/link',
      name: 'basic/link',
      component: Link,
    },
    // === Basic end ===
    // === Data start ===
    {
      path: '/data',
      name: 'data',
      component: Data,
    },
    {
      path: '/data/table',
      name: 'data/table',
      component: Table,
    },
    {
      path: '/data/tag',
      name: 'data/tag',
      component: Tag,
    },
    {
      path: '/data/progress',
      name: 'data/progress',
      component: Progress,
    },
    {
      path: '/data/tree',
      name: 'data/tree',
      component: Tree,
    },
    {
      path: '/data/pagination',
      name: 'data/pagination',
      component: Pagination,
    },
    {
      path: '/data/badge',
      name: 'data/badge',
      component: Badge,
    },
    // === Data end ===
    // === Form start ===
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
    {
      path: '/form/radio',
      name: 'form/radio',
      component: Radio,
    },
    {
      path: '/form/checkbox',
      name: 'form/checkbox',
      component: Checkbox,
    },
    {
      path: '/form/input',
      name: 'form/input',
      component: Input,
    },
    {
      path: '/form/input-number',
      name: 'form/input-number',
      component: InputNumber,
    },
    {
      path: '/form/select',
      name: 'form/select',
      component: Select,
    },
    {
      path: '/form/cascader',
      name: 'form/cascader',
      component: Cascader,
    },

    {
      path: '/form/switch',
      name: 'form/switch',
      component: Switch,
    },
    {
      path: '/form/slider',
      name: 'form/slider',
      component: Slider,
    },
    {
      path: '/form/timepicker',
      name: 'form/timepicker',
      component: TimePicker,
    },
    {
      path: '/form/datepicker',
      name: 'form/datepicker',
      component: DatePicker,
    },
    {
      path: '/form/datetimepicker',
      name: 'form/datetimepicker',
      component: DateTimePicker,
    },
    {
      path: '/form/upload',
      name: 'form/upload',
      component: Upload,
    },
    {
      path: '/form/rate',
      name: 'form/rate',
      component: Rate,
    },
    {
      path: '/form/colorpicker',
      name: 'form/colorpicker',
      component: ColorPicker,
    },
    {
      path: '/form/transfer',
      name: 'form/transfer',
      component: Transfer,
    },
    {
      path: '/form/form',
      name: 'form/form',
      component: Form2,
    },
    // === Form end ===
    // === Navigation start ===
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation,
    },
    // === Navigation end ===
    // === Notice start ===
    {
      path: '/notice',
      name: 'notice',
      component: Notice,
    },
    // === Notice end ===
    // === Others start ===
    {
      path: '/others',
      name: 'others',
      component: Others,
    },
    // === Others end ===
  ],
})
