<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h3>
    	<router-link to="/home">主页</router-link>
    	<router-link to="/news">新闻</router-link>
    </h3>
    
    <div>
    	<keep-alive>
    		<router-view></router-view>
    	</keep-alive>
    </div>
    <button @click="send">axios请求</button>
    <btn @click.native="send"></btn>
  </div>
</template>



<script>
	//import axios from 'axios'
import btn from './components/btn.vue'	
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch:{
  	$route:(news,old)=>{
  		console.log('新：'+news.path);
  		console.log('旧：'+old.path);
  	}
  },
  methods:{
  	send(){
  		this.axios.get('https://api.github.com/users/changwenjun').then((res)=>{
  			console.log(res.data);
  		}).catch(err=>{
  			console.log(err);
  		});
  		
  	}
  },
  components:{
  	btn
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
