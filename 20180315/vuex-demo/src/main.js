import Vue from 'vue'
import App from './App.vue'
import store from './store.js'


new Vue({
	store,//配置store选项，指定为store对象，自动将store对象注入到所有的子组件中。子组件中通过瘫痪$store访问该store对象
  el: '#app',
  render: h => h(App)
})
