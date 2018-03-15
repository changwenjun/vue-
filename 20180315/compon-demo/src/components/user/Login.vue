<template>
	<div id="login">{{msg}}</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'用户登录'
			}
		}
	}
</script>

<style scoped="scoped">

#login{
	color:red;
	font-size: 18px;
}
</style>