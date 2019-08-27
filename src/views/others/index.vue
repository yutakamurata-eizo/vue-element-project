<template>
  <div class="index">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <h1>Others</h1>
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
        { id: 1, name: 'Dialog', url: '/others/dialog' },
        { id: 2, name: 'Tooltip', url: '/others/tooltip' },
        { id: 3, name: 'Popover', url: '/others/popover' },
        { id: 4, name: 'Card', url: '/others/card' },
        { id: 5, name: 'Carousel', url: '/others/carousel' },
        { id: 6, name: 'Collapse', url: '/others/collapse' },
        { id: 7, name: 'Timeline', url: '/others/timeline' },
        { id: 8, name: 'Divider', url: '/others/divider' },
        { id: 9, name: 'Calendar', url: '/others/calendar' },
        { id: 10, name: 'Image', url: '/others/image' },
        { id: 11, name: 'Backtop', url: '/others/backtop' },
        { id: 12, name: 'InfiniteScroll', url: '/others/infinite-scroll' },
        { id: 13, name: 'Avatar', url: '/others/avatar' },
        { id: 14, name: 'Drawer', url: '/others/drawer' },
      ],
    }
  },
  components: {
    Menu,
  },
}
</script>
