// JavaScript Document
$(function(){
	
	var sswidth=$(".right").width()

	setSize()
					
	function setSize(){
		$(".left").css("width",$(window).width()-sswidth)
		$(".left").css("height",$(window).height()-47)

		$( ".video" ).css( "height",$( ".video" ).width()*9/16);
		$( ".video" ).css("marginLeft",($(".left").width()-$( ".video" ).width()-34)/2);
		$( ".video" ).css("marginTop",($(".left").height()-$( ".video" ).height()-34)/2);
		
	}
	
	$(window).resize(setSize);


	var onOff = true;
	$(".jt").click(function(){
		if(onOff){
			$( ".right,.jr" ).animate( {"right":-sswidth}, "normal", "linear");
			$( ".left" ).animate( {"width":$(".left").width()+sswidth}, "normal", "linear");
			$(this).addClass("open");
			onOff = false;
		}else{
			$( ".right" ).animate( {"right":0}, "normal", "linear");
			$( ".jr" ).animate( {"right":18}, "normal", "linear");	
			$( ".left" ).animate( {"width":$( ".left" ).width()-sswidth}, "normal", "linear");
			
			$(this).removeClass("open");
			onOff = true;
		}
		
	})
	
	
	function playvideo(){
		var str = '<script src="https://p.bokecc.com/player?vid='+myvid[0]+'&siteid=039C1380CF417F50&autoStart=true&width='+$(".video").width()+'&height=100%&playerid=3E79747550AACD79&playertype=1" type="text/javascript"></script>'
		$(".video").html(str);
	}
	
	playvideo();

});


