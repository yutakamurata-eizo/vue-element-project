<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Element.js Reference</h1>
    <Menu :menus="this.menus" />
  </div>
</template>

<script>
import Menu from '@/components/common/Menu.vue'
export default {
  name: 'Home',
  data() {
    return {
      menus: [
        { id: 1, name: 'Basic', url: '/basic' },
        { id: 2, name: 'Form', url: '/form' },
        { id: 3, name: 'Data', url: '/data' },
        { id: 4, name: 'Notice', url: '/notice' },
        { id: 5, name: 'Navigation', url: '/navigation' },
        { id: 6, name: 'Others', url: '/others' },
      ],
    }
  },
  components: {
    Menu,
  },
}
</script>
