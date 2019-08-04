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
        { id: 1, name: 'xxx', url: '/xxx' },
        { id: 2, name: 'xxx', url: '/xxx' },
        { id: 3, name: 'xxx', url: '/xxx' },
        { id: 4, name: 'xxx', url: '/xxx' },
        { id: 5, name: 'xxx', url: '/xxx' },
        { id: 6, name: 'xxx', url: '/xxx' },
        { id: 7, name: 'xxx', url: '/xxx' },
        { id: 8, name: 'xxx', url: '/xxx' },
        { id: 9, name: 'xxx', url: '/xxx' },
        { id: 10, name: 'xxx', url: '/xxx' },
      ],
    }
  },
  components: {
    Menu,
  },
}
</script>
