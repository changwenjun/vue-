<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
		<div>
			<button @click="incer">+</button>
			<span>{{count}}</span>
			<button  @click="inout">-</button>
			<p>{{numb}}</p>
		</div>
		
		<div><button @click="VueAjax">数据判断</button></div>
  </div>
</template>

<script>
	import  {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Hello World'
    }
  },
	computed:mapGetters([
	 	'count','numb'//取到的事函数返回值
	 ]),
	methods:mapActions([
	 	'incer','inout','VueAjax'
	 ])
 /* computed:{
  	count(){
  		return this.$store.state.count
  	}
  }*/
 
/* computed:mapState([
 	'count'
 ])*/
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
