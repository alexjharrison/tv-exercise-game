<template>
  <section>
    <h1>{{show}}</h1>
    <div class="my-3 mx-2" v-for="category in categories" :key="category">
      <h4>{{category}}</h4>
      <div>
        <b-button
          @click="newChallenge(quickEvent,'quick')"
          class="m-1"
          variant="success"
          v-for="quickEvent in events.quick[category]"
          :key="quickEvent"
        >{{quickEvent}}</b-button>
      </div>
      <div>
        <b-button
          @click="newChallenge(mediumEvent,'medium')"
          class="m-1"
          variant="warning"
          v-for="mediumEvent in events.medium[category]"
          :key="mediumEvent"
        >{{mediumEvent}}</b-button>
      </div>
      <div>
        <b-button
          @click="newChallenge(longEvent,'long')"
          class="m-1"
          variant="danger"
          v-for="longEvent in events.long[category]"
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
      socket: io()
    }
  },
  asyncData({ store, params }) {
    const show = params.show
    const events = store.state.events[show]
    const categories = Object.keys(events.quick)
    return { show, events, categories }
  },
  methods: {
    newChallenge(eventName, difficulty) {
      const { show } = this
      const challenges = this.$store.state.challenges
      this.socket.emit('clicked', { eventName, difficulty, show, challenges })
    }
  }
}
</script>

<style scoped>
* {
  text-transform: capitalize;
}
</style>
