<template>
  <v-toolbar :dense="true" :flat="true" color="gray lighten-1">
    <v-text-field color="gray lighten-1" :dense="false" flat clearable label="Search ..." solo-inverted v-model="search"></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <notification-popup-component></notification-popup-component>
      <report-popup-component></report-popup-component>
      <user-popup-component></user-popup-component>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import { mapGetters } from 'vuex';
import { UserPopupComponent, NotificationPopupComponent, ReportPopupComponent } from '@/components/popups';

export default {
  name: 'top-navigation',

  components: {
    UserPopupComponent,
    NotificationPopupComponent,
    ReportPopupComponent,
  },

  computed: {
    ...mapGetters([
      'searchTerm',
    ]),

    search: {
      get() {
        return this.searchTerm;
      },

      set(val) {
        this.$store.dispatch('SET_SEARCH_TERM', val);
      },
    },
  },
};
</script>
<style lang="scss">
.v-toolbar {
  .v-toolbar__content {
    padding-left: 50px;
  }
  .v-input__append-inner {
    display: none!important;
  }
  i {
    font-size: 1.5em;
  }
}
</style>
