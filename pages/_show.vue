<template>
  <section>
    <h1>{{show}}</h1>
    <div class="my-3 mx-2" v-for="category in categories" :key="category">
      <h4>{{category}}</h4>
      <div>
        <b-button
          @click="newChallenge(quickEvent,'frequent')"
          class="m-1"
          variant="success"
          v-for="quickEvent in getEventsByFrequency(category,'frequent')"
          :key="quickEvent"
        >{{quickEvent}}</b-button>
      </div>
      <div>
        <b-button
          @click="newChallenge(mediumEvent,'normal')"
          class="m-1"
          variant="warning"
          v-for="mediumEvent in getEventsByFrequency(category,'normal')"
          :key="mediumEvent"
        >{{mediumEvent}}</b-button>
      </div>
      <div>
        <b-button
          @click="newChallenge(longEvent,'rare')"
          class="m-1"
          variant="danger"
          v-for="longEvent in getEventsByFrequency(category,'rare')"
          :key="longEvent"
        >{{longEvent}}</b-button>
      </div>
    </div>
  </section>
</template>

<script>
import io from 'socket.io-client'
export default {
  data() {
    return {
      socket: io(),
      categories: null,
      events: null
    }
  },
  computed: {
    game() {
      return this.$store.state.selectedGame
    }
  },
  asyncData({ params }) {
    return { show: params.show }
  },
  methods: {
    newChallenge(eventName, frequency) {
      const { show, game } = this
      const challenges = this.$store.state.challenges
      this.socket.emit('clicked', {
        eventName,
        frequency,
        show,
        game
      })
    },
    getEventsByFrequency(category, frequency) {
      return this.events
        .filter(
          event => event.category === category && event.frequency === frequency
        )
        .map(event => event.description)
    }
  },
  mounted() {
    this.categories = this.$store.getters.categoriesByShow(this.show)
    this.events = this.$store.getters.eventInfoByShow(this.show)
  }
}
</script>

<style scoped>
* {
  text-transform: capitalize;
}
</style>
