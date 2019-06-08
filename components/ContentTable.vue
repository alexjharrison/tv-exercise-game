<template>
  <div id="content-table" class="mx-4" v-if="tableData">
    <h4 class="my-3">{{title}}</h4>
    <b-table :sort-by="fields[1]" dark :items="items">
      <template slot="remove" slot-scope="row">
        <b-button variant="danger" size="sm" @click="remove(row.value)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: ['tableData', 'title', 'fields', 'type'],
  computed: {
    items() {
      return this.tableData.map(item => {
        return {
          ..._.pick(item, this.fields),
          remove: item._id
        }
      })
    }
  },
  methods: {
    remove(_id) {
      this.$axios
        .$delete(`${this.type}/${_id}`)
        .then(res => this.$store.dispatch('fillStore'))
        .catch(e => console.log({ e }))
    }
  }
}
</script>

<style scoped>
h4 {
  text-transform: capitalize;
}
</style>
