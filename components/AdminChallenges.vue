<template>
  <div id="admin-challenges" v-if="listGames">
    <h1>Challenges</h1>
    <b-form-select class="col-sm-4" v-model="game" :options="listGames"/>
    <content-table
      v-for="frequency in frequencies"
      :key="frequency"
      :tableData="challengesByFrequency(game,frequency)"
      :title="frequency"
      :fields="['','description']"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContentTable from '@/components/ContentTable'
export default {
  data() {
    return {
      frequencies: [],
      game: ''
    }
  },
  components: {
    ContentTable
  },
  computed: {
    ...mapGetters(['challengesByFrequency', 'listGames', 'listFrequencies'])
  },
  mounted() {
    this.game = this.listGames[0]
    this.frequencies = this.listFrequencies
  }
}
</script>

<style scoped>
</style>
