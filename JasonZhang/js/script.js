//封装一个代替getElementById()的方法
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}
 console.log(byId("main")); //等同于console.log(document.getElementById("main"));
console.log(byId(55));

var index=0,timer=null,//定义全局变量
    pics=byId("banner").getElementsByTagName("div"),
    dots=byId("dots").getElementsByTagName("span"),
    prev=byId("prev"),
    next=byId("next"),
    len=pics.length;

function slideImg(){
	var main=byId("main");
	main.onmouseover=function(){  //鼠标移到图片 上
		if(timer) clearInterval(timer);//滑过清除定时器，离开继续
	}
	main.onmouseout=function(){  //鼠标移出图片
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}			
			changeImg();//切换图片
		},2000);
	}
	main.onmouseout();//自动在main上触发鼠标离开的事件

	//遍历所有点击，且绑定点击事件，点击圆点切换图片
	for(var d=0;d<len;d++){
		dots[d].id=d; //给所有span添加一个id的属性，值为d，作为当前span的索引
		dots[d].onclick=function(){
			index=this.id;

			//调用changeImg，实现切换图片
			changeImg();
		}
	}
	//下一张
	next.onclick=function(){
		index++;
		if(index>=len) index=0;
		changeImg();
	}
	//上一张
	prev.onclick=function(){
		index--;
		if(index<0) index=len-1;
		changeImg();
	}
}

//切换图片
function changeImg(){
	//遍历banner下所有的div及dots下所有的span，将div其隐藏，将span清除类
	for(var i=0;i<len;i++){
		pics[i].style.display="none";
		dots[i].className="";
	}
	//根据index索引找到当前div和span将其显示出来,并设为当前
	pics[index].style.display="block";
	dots[index].className="active";

}

slideImg();