import Vue from 'vue';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./common/router.js"
// import store from "./common/store.js"
import App from './App.vue';

Vue.use(ElementUI);

axios.defaults.baseURL = '/api';
Vue.prototype.axios = axios;

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
