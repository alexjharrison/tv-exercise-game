<template>
  <div id="admin">
    <b-tabs active-nav-item-class="font-weight-bold" fill content-class="mt-3">
      <b-tab title="Challenges">
        <admin-challenges/>
      </b-tab>
      <b-tab title="Events">
        <admin-events/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import AdminChallenges from '@/components/AdminChallenges'
import AdminEvents from '@/components/AdminEvents'
export default {
  components: {
    AdminChallenges,
    AdminEvents
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
.tab-pane {
  outline: none;
}
</style>
