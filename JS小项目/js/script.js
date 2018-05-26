//封装一个代替getElementById()的方法
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

//全局变量
var index=0,
    timer=null,
    pics=byId("banner").getElementsByTagName("div"),
    option=byId("option").getElementsByTagName("li"),
    len=pics.length;
    box=byId("box");

function slideImg(){
	changeImg();
	var main=byId("main");
	//滑过清除定时器，离开继续
	box.onmouseover=function(){
    	//滑过清除定时器
    	if(timer) clearInterval(timer);

	}
	box.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
            //切换图片
            changeImg();
		},1000)                            
	}                                               //调用onmouseout事件
	//自动在main上触发鼠标离开的事件                                               
	box.onmouseout();                              //调用onmouseout方法    

	//遍历所有选项，且绑定事件，点击选项切换图片
	for(var d=0;d<len;d++){
		//给所有li添加一个id的属性，值为d，作为当前li的索引
		option[d].id=d;
		option[d].onclick=function(){
			//改变index为当前li的id值
			index=this.id;
		
			//调用changeImg，实现切换图片
			changeImg();
		}
	}                                                           
}


//切换图片
function changeImg(){
	//遍历banner下的div及option下所有的li，将div其隐藏，将li清除类
	for(var i=0;i<len;i++){
		pics[i].style.display="none";
		option[i].className="";
	}
	//根据index索引找到当前div和当前li，将其显示出来和设为当前
	pics[index].style.display="block";
	option[index].className="active";
}
slideImg();