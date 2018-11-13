// src/index.ts

import Vue from "vue"
import router from './router'
import App from './App.vue'

import HelloComponent from "./components/Hello.vue";

let v = new Vue({
  el: "#app",
  router,
  render: h => h(App)
});