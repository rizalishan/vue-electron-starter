<template>
  <div>
    <top-navigation></top-navigation>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 :class="user.isUserLoggedIn ? 'pushed-container' : 'full-container'">
          <side-navigation :display-menu="user.isUserLoggedIn"></side-navigation>
          <div class="pushed-container">
            <slot></slot>
          </div>
        </v-flex>
        <preloader-component></preloader-component>
      </v-layout>
    </v-container>
    <search-component></search-component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopNavigation from '@/components/navigations/TopNavigation.vue';
import SearchComponent from '@/components/core/SearchComponent.vue';
import SideNavigation from '@/components/navigations/SideNavigation.vue';
import PreloaderComponent from '@/components/core/PreloaderComponent.vue';

export default {
  name: 'main-layout',

  components: {
    TopNavigation,
    SideNavigation,
    PreloaderComponent,
    SearchComponent,
    ...mapGetters(['user']),
  },

  props: ['title', 'isOpen'],

  data() {
    return {
      current: 0,
      user: {
        isUserLoggedIn: true,
      },
    };
  },
};
</script>
