import Vue from 'vue';
import axios from 'axios';
import Vuetify from 'vuetify/lib';
import { Scroll } from 'vuetify/lib/directives';
import 'typeface-dosis/index.css';
import 'typeface-abel/index.css';
import '@fortawesome/fontawesome-pro/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from './App';
import router from './router';
import store from './store';
import db from './models.js';

import ColorTheme from './assets/theme/color';
import './assets/theme/main.styl';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: ColorTheme,
  options: {
    customProperties: true,
  },
  directives: {
    Scroll,
  },
});

Vue.prototype.$db = db;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
