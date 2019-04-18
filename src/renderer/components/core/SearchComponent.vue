<template>    
  <div class="search-results" v-if="searchTerm !== ''">
    <v-container>
      <h3 class="display-3 my-2 text-xs-center">Results for "{{ searchTerm }}"</h3>    
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'search-component',

  computed: {
    ...mapGetters(['searchVisible', 'searchTerm']),
  },
};
</script>
<style lang="scss" scoped>
$mainColor: var(--v-gray-lighten1);
.search-results {
  width: calc(100% - 50px);
  height: 100%;
  position: fixed;
  top: 48px;
  left: 50px;
  background: $mainColor;
  color: var(--v-gray-darken3);
}
</style>
<style>
.v-input__slot {
  margin-bottom: 0!important;
  border-radius: 0!important;
}

</style>

