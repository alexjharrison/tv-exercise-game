<template>
  <div id="admin">
    <b-tabs active-nav-item-class="font-weight-bold" fill content-class="mt-3">
      <b-tab title="Challenges">
        <h1>Challenges</h1>
        <b-button v-b-modal.challenge-modal variant="primary" class="m-2">Remove Challenges</b-button>
        <b-modal size="xl" id="challenge-modal">
          <p slot="modal-footer"></p>
          <h4 slot="modal-title">Challenges</h4>
          <b-table striped :items="challenges">
            <template slot="delete" slot-scope="row">
              <b-button
                variant="danger"
                size="sm"
                @click="deleteItem(row.value, 'challenge')"
              >Delete</b-button>
            </template>
          </b-table>
        </b-modal>

        <h4>Frequency</h4>

        <h4>Challenge</h4>
      </b-tab>
      <b-tab title="Events">
        <h1>Events</h1>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  computed: {
    events() {
      return this.$store.state.events
    },
    challenges() {
      return this.$store.state.challenges.map(
        ({ description, game, frequency, _id }) => ({
          description,
          game,
          frequency,
          delete: _id
        })
      )
    }
  },
  methods: {
    deleteItem(id, model) {
      console.log(id)
      this.$axios
        .$delete('http://localhost:3003/' + model + '/' + id)
        .then(res => {
          console.log(res)
          this.$store.dispatch('fillStore')
        })
    }
  }
}
</script>

<style>
a.nav-link {
  color: white !important;
}
a.nav-link.active {
  color: black !important;
}
</style>
