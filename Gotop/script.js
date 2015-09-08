// 页面加载完毕后触发
window.onload=function  () {
	var obtn=document.getElementById('btn');
	// 获取页面可视区的高度
	var clientHeight=document.documentElement.clientHeight;
	var timer=null;
	var isTop=true;

	// 滚动条滚动时触发
	window.onscroll=function(){

		var osTop=document.documentElement.scrollTop || document.body.scrollTop;		
		// 200赋值
		if(osTop>=clientHeight){
			//obtn.css("display","block");
			obtn.style.display='block';
		}else{
			obtn.style.display='none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop=false;
	}

	obtn.onclick=function(){
		// 设置定时器
		timer=setInterval(function(){
			// 属性可读可写 获取距离顶部高度
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;		
		var ispeed=Math.floor(-osTop/6);
		// 200赋值
		document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
		isTop=true;
		console.log(osTop-ispeed);

		if(osTop==0){
			clearInterval(timer);
		}
		},50);		
	}
}