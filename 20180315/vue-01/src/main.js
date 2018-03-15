import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routeConfig from './router.js'
import axios from 'axios'
//使用vueRouter
Vue.use(VueRouter);

//创建路由实例
const router=new VueRouter(routeConfig);
Vue.prototype.axios=axios;
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
