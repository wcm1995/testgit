/*$(function(){
	$("#loginlink").click(function(){
		$("#layer-mask").show();
		$("#layer-pop").show();
		$("#layer-close").click(function(){
			$("#layer-mask").hide();
		    $("#layer-pop").hide();
		})
	})
})*/


//封装函数
$(function(){
	$("#loginlink").click(function(){
		var loginHtml = $("#loginHtml").html();
	    showLayer(loginHtml,400,300,closeCallback);
	    //登陆表单校验
	    $("#loginSubmitBtn").click(function(){
	    	var username=$("#username").val();
	    	var password=$("#password").val();
	    	if(username==='imooc'&&password==='imooc'){
	    		alert("登陆成功");
	    	}else{
	    		$(".error-msg").html("账号或者密码输入错误");
	    	}
	    })
    });
    function closeCallback(){
    	$(".error-msg").html("");
    }

    //显示弹出层
	function showLayer(html,width,height,closeCallback){
		$("#layer-mask").show();
		$("#layer-pop").show();
		$("#layer-pop").css({
			width:width,
			height:height
		});
		$("#layer-content").html(html);
		$("#layer-close").click(function(){
			hideLayer();
			//关闭的回调函数
			closeCallback();
		});
    }
    function hideLayer(){
		$("#layer-mask").hide();
	    $("#layer-pop").hide();
    }
});
