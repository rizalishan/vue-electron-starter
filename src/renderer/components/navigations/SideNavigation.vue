<template>
  <div class="menu">
    <v-list-tile p-x-0>
      <v-list-tile-content>
        <i class="fal fa-bars"></i>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile :class="checkMenu(menu.url)" v-for="(menu, index) in menus" :key="index" p-x-0>
      <v-list-tile-content>
        <router-link :to="menu.url">
          <v-badge right color="accent">
            <span v-if="menu.updates > 0" slot="badge">{{ menu.updates }}</span>
            <v-tooltip right color="secondary">
              <i slot="activator" :class="'fal ' + menu.icon"></i>
              <span>{{ menu.title }}</span>
            </v-tooltip>
          </v-badge>
        </router-link>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'slide-navigation',

  computed: {
    ...mapGetters([
      'menus',
    ]),
  },

  methods: {
    checkMenu(type) {
      return this.$route.fullPath.indexOf(type) > -1 ? 'active' : '';
    },
  },
};
</script>

<style scoped>
  .menu {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 50px;
    background: var(--v-gray-base);
  }

  .menu a {
    margin: 0 auto;
    color: var(--v-secondary-base);
    text-decoration: none;
  }

  .v-icon {
    margin: 0 auto;
  }

  .active {
    background: var(--v-primary-lighten2);
  }

  .menu i {
    display: block;
    text-align: center;
    width: 100%;
    font-size: 1.8rem;
    padding: 5px;
  }
</style>
<style>
  .menu .v-list__tile {
    padding: 6px 0!important;
    height: auto;
  }
  .menu div[role="listitem"]:first-child .v-list__tile {
    padding: 2px 0!important;
    height: 40px;
  }
  .menu .v-badge__badge {
    right: 0;
    top: auto;
    bottom: 0;
  }
</style>