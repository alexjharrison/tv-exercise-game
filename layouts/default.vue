<template>
  <div>
    <!-- <nuxt/> -->
  </div>
</template>

<script>
export default {
  fetch({ store }) {
    // console.log('hi')
    return store.dispatch('fillStore')
  },
  mounted() {
    // console.log('hi')
    // this.$store.dispatch('fillStore')
  }
}
</script>


<style>
body {
  background: #283048; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #859398,
    #283048
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #859398,
    #283048
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin: 1.5em;
  color: #fff;
}
</style>
