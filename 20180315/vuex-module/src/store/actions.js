//定义Actions(方法),要执行的操作，流程判断，异步请求

const actions={
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