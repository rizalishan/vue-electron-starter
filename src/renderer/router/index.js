import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'licence-page',
    component: require('@/modules/licence/LicencePage.vue').default,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const moduleFiles = require.context('@/modules', true, /\.route\.js$/);
moduleFiles.keys().forEach((key) => {
  routes.concat(moduleFiles(key).default);
});

export default new Router({
  routes,
});
