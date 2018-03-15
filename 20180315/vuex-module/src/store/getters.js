//定义getters 
var getters={
	count(state){
		return state.count;
	},
	numb(state){
		return state.count%2==0?'偶数':'奇数'
	}
}