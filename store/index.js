export const state = () => ({
  events: null,
  challenges: null,
  selectedGame: null
})

export const getters = {
  showList(state) {
    const showsWithDupes = state.events.map(({ show }) => show)
    return Array.from(new Set(showsWithDupes))
  },
  listGames(state) {
    const gamesWithDupes = state.challenges.map(({ game }) => game)
    return Array.from(new Set(gamesWithDupes))
  },
  listFrequencies(state) {
    const freqWithDupes = state.challenges.map(({ frequency }) => frequency)
    const freqWithDupes2 = state.events.map(({ frequency }) => frequency)
    const frequencies = freqWithDupes.concat(freqWithDupes2)
    return Array.from(new Set(frequencies))
  },
  eventInfo: state => (show, category) => {
    return state.events.filter(
      event => event.show === show && event.category === category
    )
  },
  eventInfoByShow: state => show => {
    return state.events.filter(event => event.show === show)
  },
  challengesByFrequency: state => (gam, freq) => {
    return state.challenges.filter(
      ({ game, frequency }) => freq === frequency && game === gam
    )
  },
  categoriesByShow: state => show => {
    const catsWithDupes = state.events
      .filter(event => event.show === show)
      .map(({ category }) => category)
    return Array.from(new Set(catsWithDupes))
  }
}

export const mutations = {
  setEvents(state, events) {
    state.events = [...events]
  },
  setChallenges(state, challenges) {
    state.challenges = [...challenges]
  },
  setSelectedGame(state, game) {
    state.selectedGame = game
  }
}

export const actions = {
  async fillStore({ commit, getters }) {
    const challenges = await this.$axios.$get('challenge')
    const events = await this.$axios.$get('event')
    commit('setEvents', events)
    commit('setChallenges', challenges)
    commit('setSelectedGame', getters.listGames[0])
    return 2
  }
}
