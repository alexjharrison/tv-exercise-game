<template>
  <div>
    <span>Show</span>
    <b-button
      :to="'/'+show"
      :variant="buttonVariant(show)"
      class="m-2"
      v-for="show in shows"
      :key="show"
    >{{show}}</b-button>
    <p class="show">{{show}}</p>
    <p class="event">{{event}}</p>
    <div class="challenge-wrapper">
      <p :class="'challenge ' + (challenge?'border':'')">{{challenge}}</p>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  data() {
    return {
      socket: io(),
      show: '',
      event: '',
      challenge: ''
    }
  },
  computed: {
    shows() {
      return this.$store.getters.showList
    }
  },
  methods: {
    buttonVariant(show) {
      return show === this.show ? 'primary' : 'outline-light'
    }
  },
  mounted() {
    this.socket.on('update', ({ eventName, randChall, show }) => {
      this.event = eventName
      this.challenge = randChall
      this.show = show
      const click = new Audio('/pop.mp3')
      click.play()
      setTimeout(() => {
        this.event = ''
        this.challenge = ''
        this.show = ''
      }, 60000)
    })
  }
}
</script>

<style scoped>
p {
  text-align: center;
  text-transform: capitalize;
}
.show {
  font-size: 30px;
}
.event {
  font-size: 40px;
}
.challenge-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.challenge {
  padding: 10px;
  font-size: 80px;
}
.border {
  border-radius: 10px;
  border: 3px solid white;
}
</style>
