//vuex配置
import Vue from 'vue'
import Vuex from 'Vuex'


Vue.use(Vuex);

//定义属性/(数据)

var state={
	count:2
}

//定义getters 
var getters={
	count(state){
		return state.count;
	},
	numb(state){
		return state.count%2==0?'偶数':'奇数'
	}
}

//定义Actions(方法),要执行的操作，流程判断，异步请求

const actions={
	/*incer(context){
		context.state.count++;
	},
	inout(context){
		context.state.count--;
	}*/
	
	incer({commit,state}){
		commit('incre');//提交一个名为incer的变化,名字可自定义
		//state.count++;
	},
	inout({commit,state}){
		if(state.count>10){
			commit('inout');//提交一个名为inout的变化,名字可自定义
			//state.count--;
		}
	},
	VueAjax({commit,state}){
		//异步操作
		var p=new Promise((res,rej)=>{
			setTimeout(()=>{
				res();
			},3000)
		});
		p.then(()=>{
			commit('incre');
		})
		
		p.catch(()=>{
			console.log("操作失败")
		})
	}
}

//处理状态的变化，定义mutations。
const mutations={
	incre(state){
		state.count++;
	},
	inout(state){
		state.count--;
	}
}




//导出store对象

const store=new Vuex.Store({
	state,
	getters,
	actions,
	mutations
	
})

export default store
