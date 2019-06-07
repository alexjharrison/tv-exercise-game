<template>
  <div id="content-table" v-if="tableData">
    <h4 class="my-3">{{title}}</h4>
    <b-table :sort-by="fields[1]" dark :items="items">
      <!-- <span slot="remove" slot-scope="frank" v-html="frank.value"></span> -->
      <template slot="remove" slot-scope="row">
        <b-button variant="danger" size="sm" @click="remove(row.value)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: ['tableData', 'title', 'fields'],
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
      console.log(_id)
    }
  }
}
</script>

<style scoped>
h4 {
  text-transform: capitalize;
}
</style>
