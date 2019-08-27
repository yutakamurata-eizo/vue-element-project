<template>
  <div class="playground avatar">
    <h1>Avatar</h1>
    <CompAvatar />
    <div style="margin-top: 20px;">
      <router-link to="/others">Back</router-link>
    </div>
  </div>
</template>

<script>
import CompAvatar from '@/components/others/CompAvatar.vue'
export default {
  name: 'avatar',
  components: {
    CompAvatar,
  },
}
</script>

<style>
.playground {
  margin: 0 auto;
  width: 1000px;
}
</style>
