<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    
    
    <div>
		  <el-button>默认按钮</el-button>
		  <el-button type="primary" @click="send">主要按钮</el-button>
		  <el-button type="success">成功按钮</el-button>
		  <el-button type="info">信息按钮</el-button>
		  <el-button type="warning">警告按钮</el-button>
		  <el-button type="danger">危险按钮</el-button>
		</div>
		
		
		<div>
			<el-row type="flex" class="row-bg">
			  <el-col :span="6"><div class="grid-content bg-purple">1111</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light">222</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">333</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">444</div></el-col>
			</el-row>
			<el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="6"><div class="grid-content bg-purple">111</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light">222</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">333</div></el-col>
			</el-row>
		</div>
		
		
		<div class="time">
			<timef></timef>
		</div>
		<div class="upload">
			<upload></upload>
		</div>
		<div id="org"></div>
  </div>
</template>

<script>
	
import timef from './components/time.vue'
import Upload from './components/Upload.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: '欢饮来到Vue'
    }
  },
  methods:{
  	send(){
  		console.log(5)
  	}
  },
  components:{
  	timef,Upload
  }
}
</script>

<style lang="less">
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
@color:red;
#org{
	background: @color;
	width:100px;
	height:100px;
}
</style>
