<template>
  <div class="about">
    <button @click="doSearch">
      Search
    </button>
    <hr />
    <p>status: {{ result.status }}</p>
    <p>zipcode: {{ result.zipcode }}</p>
    <p>prefcode: {{ result.prefcode }}</p>
    <p>address1: {{ result.address1 }}</p>
    <p>address2: {{ result.address2 }}</p>
    <p>address3: {{ result.address3 }}</p>
  </div>
</template>

<script>
export default {
  name: 'ZipSearch',
  data: () => {
    return {
      result: {
        status: null,
        zipcode: '',
        prefcode: '',
        address1: '',
        address2: '',
        address3: ''
      }
    }
  },
  methods: {
    doSearch () {
      this.$axios
        .get('/zipcode.json')
        .then(res => {
          // console.log(res)
          const dt = res.data.results[0]
          // console.log(dt)
          this.result.status = res.data.status
          this.result.zipcode = dt.zipcode
          this.result.prefcode = dt.prefcode
          this.result.address1 = dt.address1
          this.result.address2 = dt.address2
          this.result.address3 = dt.address3
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
