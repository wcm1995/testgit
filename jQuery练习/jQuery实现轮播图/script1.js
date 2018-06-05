function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;  //检查id的类型
}
var index=0,
    timer=null,
    pics=byId("banner").getElementsByTagName("div"),
    len=pics.length;

function slideImg(){
	var main=byId("main");
	main.onmouseover=function(){
		if(timer) clearInterval(timer);
	}
	main.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
            	index=0;
			}
			//切换图片
			changeImg();
		},3000);
	}
	//自动在main上触发鼠标离开的事件
	main.onmouseout();
}

//切换图片
function changeImg(){
	for(var i=0;i<len;i++){
		pics[i].style.display="none";
	}
	pics[index].style.display='block';
}
slideImg();