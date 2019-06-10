<template>
  <div v-if="$store.state.events && $store.state.challenges">
    <div v-if="$route.params.show">
      <span>Game</span>
      <b-button
        class="m-2"
        @click="$store.commit('setSelectedGame',game)"
        :key="game"
        v-for="game in $store.getters.listGames"
        :variant="bVariant(game)"
      >{{game}}</b-button>
    </div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  methods: {
    bVariant(game) {
      return this.$store.state.selectedGame === game
        ? 'primary'
        : 'outline-light'
    }
  },
  mounted() {
    this.$store.dispatch('fillStore')
  }
}
</script>

<style scoped>
button {
  text-transform: capitalize;
}
</style>

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
