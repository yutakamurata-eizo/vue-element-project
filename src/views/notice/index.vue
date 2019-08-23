<template>
  <div class="index">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <h1>Notice</h1>
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
        { id: 1, name: 'Alert', url: '/notice/alert' },
        { id: 2, name: 'Loading', url: '/notice/loading' },
        { id: 3, name: 'Message', url: '/notice/message' },
        { id: 4, name: 'MessageBox', url: '/notice/message-box' },
        { id: 5, name: 'Notification', url: '/notice/notification' },
      ],
    }
  },
  components: {
    Menu,
  },
}
</script>
