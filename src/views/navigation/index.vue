<template>
  <div class="index">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <h1>Navigation</h1>
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
        { id: 1, name: 'NavMenu', url: '/navigation/nav-menu' },
        { id: 2, name: 'Tabs', url: '/navigation/tabs' },
        { id: 3, name: 'Breadcrumb', url: '/navigation/breadcrumb' },
        { id: 4, name: 'PageHeader', url: '/navigation/page-header' },
        { id: 5, name: 'Dropdown', url: '/navigation/dropdown' },
        { id: 6, name: 'Steps', url: '/navigation/steps' },
      ],
    }
  },
  components: {
    Menu,
  },
}
</script>
