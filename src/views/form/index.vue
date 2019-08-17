<template>
  <div class="index">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <h1>Form</h1>
    <Menu :menus="this.menus" />
  </div>
</template>

<script>
import Menu from '@/components/common/Menu.vue'
export default {
  name: 'Index',
  data() {
    return {
      menus: [
        { id: 1, name: 'Radio', url: '/form/radio' },
        { id: 2, name: 'Checkbox', url: '/form/checkbox' },
        { id: 3, name: 'Input', url: '/form/input' },
        { id: 4, name: 'InputNumber', url: '/form/input-number' },
        { id: 5, name: 'Select', url: '/form/select' },
        { id: 6, name: 'Cascader', url: '/form/cascader' },
        { id: 7, name: 'Switch', url: '/form/switch' },
        { id: 8, name: 'Slider', url: '/form/slider' },
        { id: 9, name: 'TimePicker', url: '/form/timepicker' },
        { id: 10, name: 'DatePicker', url: '/form/datepicker' },
        { id: 11, name: 'DateTimePicker', url: '/form/datetimepicker' },
        { id: 12, name: 'Upload', url: '/form/upload' },
        { id: 13, name: 'Rate', url: '/form/rate' },
        { id: 14, name: 'ColorPicker', url: '/form/colorpicker' },
        { id: 15, name: 'Transfer', url: '/form/transfer' },
        { id: 16, name: 'Form', url: '/form/form' },
      ],
    }
  },
  components: {
    Menu,
  },
}
</script>
