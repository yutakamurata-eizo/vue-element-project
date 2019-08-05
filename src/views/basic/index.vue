<template>
  <div class="index">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <h1>Basic</h1>
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
        { id: 1, name: 'Layout', url: '/basic/layout' },
        { id: 2, name: 'Container', url: '/basic/container' },
        { id: 3, name: 'Color', url: '/basic/color' },
        { id: 4, name: 'Button', url: '/basic/button' },
        { id: 5, name: 'Link', url: '/basic/link' },
      ],
    }
  },
  components: {
    Menu,
  },
}
</script>
