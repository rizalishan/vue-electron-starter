<template>
  <div id="app">
    <v-app light>
      <v-content>
        <main-layout>
          <router-view></router-view>
        </main-layout>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import MainLayout from '@/components/layouts/MainLayout.vue';
  export default {
    name: 'munshee',

    components: { MainLayout },
  };
</script>

<style>
  /* CSS */
</style>
