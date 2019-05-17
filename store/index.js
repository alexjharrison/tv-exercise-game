export const state = () => ({
  events: [],
  challenges: []
})

export const mutations = {
  setEvents(state, events) {
    console.log(events)
    state.events.splice(0, state.events.length, events)
  },
  setChallenges(state, challenges) {
    state.challenges.splice(0, state.challenges.length, challenges)
  }
}

export const actions = {
  fillStore({ commit }) {
    this.$axios
      .$get('http://localhost:3003/challenge')
      .then(challenges => commit('setChallenges', challenges))
      .catch(e => console.log(e))
    this.$axios
      .$get('http://localhost:3003/event')
      .then(events => commit('setEvents', events))
      .catch(e => console.log(e))
  },
  async nuxtServerInit({ dispatch }) {
    return await dispatch('fillStore')
  }
}
