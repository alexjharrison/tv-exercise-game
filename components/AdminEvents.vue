<template>
  <div id="admin-events">
    <h1>Events</h1>
    <div class="container row">
      <b-form-select class="col-sm-3" v-model="show" :options="showList"/>
      <b-button
        @click="showCollapse = !showCollapse;newShow=false"
        class="mx-2"
        variant="info"
      >Add Challenge for {{show}}</b-button>
      <b-button
        @click="newShow = !newShow;showCollapse=false"
        variant="outline-light"
      >Create New Show</b-button>
    </div>
    <b-form v-if="newShow" @submit.prevent="addShow" class="col-md-4 mx-0 my-4">
      <label>New Show Name</label>
      <b-input-group>
        <b-input v-model="newShowName"/>
        <b-button variant="outline-light">Submit</b-button>
      </b-input-group>
    </b-form>
    <b-collapse v-model="showCollapse" id="add-event">
      <b-card id="card-event" class="col-sm-6 my-2">
        <h3>Add Event to {{show}}</h3>
        <b-form @submit.prevent="addEvent">
          <b-form-group class="mb-2" label="Frequency">
            <b-form-radio-group
              v-model="newEventFrequency"
              :options="frequencies"
              buttons
              button-variant="outline-light"
              size="sm"
            />
          </b-form-group>
          <label>Select Category</label>
          <b-input list="category-list" v-model="newShowCategory"/>
          <datalist id="category-list">
            <option v-for="category in categories" :key="category">{{category}}</option>
          </datalist>
          <label>New Event</label>
          <b-form-input v-model="newEventName" class="mb-2 col-sm-8"/>
          <b-button type="submit" variant="light" size="sm">Submit</b-button>
        </b-form>
      </b-card>
    </b-collapse>
    <div class="row">
      <content-table
        v-for="category in categories"
        :key="category"
        :tableData="eventInfo(show,category)"
        :title="category"
        :fields="['description','frequency']"
        type="event"
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
      show: '',
      categories: [],
      frequencies: ['normal', 'frequent', 'rare'],
      showCollapse: false,
      newEventFrequency: 'normal',
      newEventName: '',
      newShow: false,
      newShowName: '',
      newShowCategory: ''
    }
  },
  components: {
    ContentTable
  },
  computed: {
    ...mapGetters(['categoriesByShow', 'eventInfo', 'showList'])
  },
  watch: {
    show() {
      this.categories = this.categoriesByShow(this.show)
    }
  },
  methods: {
    addShow() {
      this.show = this.newShowName
      this.newShow = false
      this.showCollapse = true
      this.newShowName = ''
    },
    addEvent() {
      this.$axios
        .post('event', {
          description: this.newEventName,
          frequency: this.newEventFrequency,
          category: this.newShowCategory,
          show: this.show
        })
        .then(() => this.$store.dispatch('fillStore'))
        .catch(e => console.log(e))
      this.newEventName = ''
    }
  },
  mounted() {
    this.show = this.showList[0]
    this.categories = this.categoriesByShow(this.show)
  }
}
</script>

<style scoped>
#card-event {
  background-color: rgba(0, 0, 0, 0.486);
}
</style>
