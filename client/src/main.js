import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = '/api';
Vue.prototype.axios = axios;

new Vue({
  el: '#app',
  render: h => h(App)
})
