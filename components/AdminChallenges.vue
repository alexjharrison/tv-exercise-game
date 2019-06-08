<template>
  <div id="admin-challenges" v-if="listGames">
    <h1>Challenges</h1>
    <div class="container row">
      <b-form-select class="col-sm-2" v-model="game" :options="listGames"/>
      <b-button
        @click="showCollapse = !showCollapse;newGame=false"
        class="mx-2"
        variant="info"
      >Add Challenge for {{game}}</b-button>
      <b-button
        @click="newGame = !newGame;showCollapse=false"
        variant="outline-light"
      >Create New Game</b-button>
    </div>
    <b-form v-if="newGame" @submit.prevent="addGame" class="col-md-4 mx-0 my-4">
      <label>New Game Name</label>
      <b-input-group>
        <b-input v-model="newGameName"/>
        <b-button variant="outline-light">Submit</b-button>
      </b-input-group>
    </b-form>
    <b-collapse v-model="showCollapse" id="add-challenge">
      <b-card id="card-challenge" class="col-sm-6 my-2">
        <h3>Add Challenge to {{game}}</h3>
        <b-form @submit.prevent="addChallenge">
          <b-form-group class="mb-2" label="Frequency">
            <b-form-radio-group
              v-model="newChallengeFrequency"
              :options="frequencies"
              buttons
              button-variant="outline-light"
              size="sm"
            />
          </b-form-group>
          <p class="m-0">New Challenge</p>
          <b-form-input v-model="newChallengeName" class="mb-2 col-sm-8"/>
          <b-button type="submit" variant="light" size="sm">Submit</b-button>
        </b-form>
      </b-card>
    </b-collapse>
    <div class="row">
      <content-table
        v-for="frequency in frequencies"
        :key="frequency"
        :tableData="challengesByFrequency(game,frequency)"
        :title="frequency"
        :fields="['','description']"
        type="challenge"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContentTable from '@/components/ContentTable'
export default {
  data() {
    return {
      frequencies: [],
      game: '',
      showCollapse: false,
      newChallengeFrequency: 'normal',
      newChallengeName: '',
      newGame: false,
      newGameName: ''
    }
  },
  components: {
    ContentTable
  },
  computed: {
    ...mapGetters(['challengesByFrequency', 'listGames', 'listFrequencies'])
  },
  methods: {
    addChallenge() {
      this.$axios
        .post('http://localhost:3003/challenge', {
          description: this.newChallengeName,
          frequency: this.newChallengeFrequency,
          game: this.game
        })
        .then(() => this.$store.dispatch('fillStore'))
        .catch(e => console.log(e))
      this.newChallengeName = ''
    },
    addGame() {
      this.game = this.newGameName
      this.newGame = false
      this.showCollapse = true
      this.newGameName = ''
    }
  },
  mounted() {
    this.game = this.listGames[0]
    this.frequencies = this.listFrequencies
  }
}
</script>

<style scoped>
#card-challenge {
  background-color: rgba(0, 0, 0, 0.486);
}
</style>
