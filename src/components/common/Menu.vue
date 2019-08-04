<template>
  <div class="menu">
    <div v-for="menu in menus" :key="menu.id" style="margin-top: 20px; margin-bottom: 20px;">
      <router-link :to="menu.url">
        {{ menu.name }}
      </router-link>
    </div>
    <div v-if="home">
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      home: null,
    }
  },
  props: ['menus'],
  created() {
    // Homeの場合はリンクを非表示
    this.home = this.$route.path !== '/'
  },
}
</script>
