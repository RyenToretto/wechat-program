import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store/index'
import Mint from 'mint-ui';

import 'mint-ui/lib/style.css'
import './mock/mockServer'

Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
