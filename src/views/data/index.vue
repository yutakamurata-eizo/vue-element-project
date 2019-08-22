<template>
  <div class="index">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <h1>Data</h1>
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
        { id: 1, name: 'Table', url: '/data/table' },
        { id: 2, name: 'Tag', url: '/data/tag' },
        { id: 3, name: 'Progress', url: '/data/progress' },
        { id: 4, name: 'Tree', url: '/data/tree' },
        { id: 5, name: 'Pagination', url: '/data/pagination' },
        { id: 6, name: 'Badge', url: '/data/badge' },
      ],
    }
  },
  components: {
    Menu,
  },
}
</script>
