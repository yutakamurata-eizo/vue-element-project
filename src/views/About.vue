<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr />
    <ZipSearch />
  </div>
</template>

<script>
import ZipSearch from '@/components/ZipSearch.vue'

export default {
  name: 'about',
  components: {
    ZipSearch,
  },
}
</script>
