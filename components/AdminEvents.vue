<template>
  <div id="admin-events">
    <h1>Events</h1>
    <b-form-select class="col-sm-4" v-model="show" :options="showList"/>
    <content-table
      v-for="category in tables"
      :key="category"
      :tableData="eventInfo(show,category)"
      :title="category"
      :fields="['description','frequency']"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContentTable from '@/components/ContentTable'
export default {
  data() {
    return {
      show: '',
      tables: []
    }
  },
  components: {
    ContentTable
  },
  computed: {
    ...mapGetters(['categoriesByShow', 'eventInfo', 'showList'])
  },
  mounted() {
    this.show = this.showList[0]
    this.tables = this.categoriesByShow(this.show)
  }
}
</script>

<style scoped>
</style>
