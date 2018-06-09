
$(function(){
	var index=0,
		time=null,
		pics=$(".banner-slide"),
		len=pics.length;

	//清除定时器
	$(".main").mouseover(function(){
		clearInterval(timer);
	})
	//鼠标不放在图片上，图片自动轮播
	$(".main").mouseout(function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){ 
				index=0;
			}
			changeImg();
		},2000)
	})
	//自动在main上触发鼠标离开的事件
	$(".main").mouseout();
	//绑定点击下一张的事件
	$("#next").click(function(){
		index++;
		if(index>=len){
			index=0;
		}
		changeImg();
	})
	//绑定点击上一张的事件
	$("#prev").click(function(){
		index--;
		if(index<0){
			index=len-1;
		}
		changeImg();
	})
	//遍历所有圆点，然后给每个圆点绑定点击事件
	$('#dots>span').each(function(suoyin){
		$(this).click(function(){
			index=suoyin;
			changeImg();
		})
	})
	//切换图片
	function changeImg(){
		$(".banner-slide").removeClass("slide-active");
		$("#dots>span").removeClass("active");
		pics.eq(index).addClass("slide-active");
		$("#dots>span").eq(index).addClass("active");
	}

})