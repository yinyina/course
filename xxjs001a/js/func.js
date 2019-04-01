// JavaScript Document
window.onload = function(){
	playvideo();
}

//视频播放函数	
function playvideo(){
		var myVid=arrydyVid[0];
		var mstr = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="708" height="398" id="cc_'+myVid+'"><param name="movie" value="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode" /><embed src="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" width="708" height="398" name="cc_'+myVid+'" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/></object>'

	document.getElementById("videoplayer").innerHTML = mstr;
	


	//imgpath = "images/beforevideo";
//	var mmserver = "http://video2.teacheredu.cn/test/"; 
//	var StrPath = location.href;
//	if (StrPath.substring(0,4).toUpperCase()=="HTTP"){	
//			mp4path = mmserver + VideoFolder + "/" + CourseCode + "/video/" + CourseCode + zid;
//	}
//	else {
//			mp4path = "video/" + zid;
//	}
///*	var mstr = "<table><tr><td height=3px></td></tr></table><table width='626' height='377' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
//	mstr = mstr + "<tr>";
//	mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=624 height=375 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;type=http&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
//	mstr = mstr + "  </tr>";
//	mstr = mstr + "</table>";
//	document.getElementById("videocnt").innerHTML = mstr;*/
//	
//	var flashvars={
//		f:mp4path+'.mp4',//视频地址
//		a:'',//调用时的参数，只有当s>0的时候有效
//		s:'0',//调用方式，0=普通方法（f=视频地址），1=网址形式,2=xml形式，3=swf形式(s>0时f=网址，配合a来完成对地址的组装)
//		c:'0',//是否读取文本配置,0不是，1是
//		x:'',//调用配置文件路径，只有在c=1时使用。默认为空调用的是ckplayer.xml
//		//i:'http://www.ckplayer.com/images/loadimg3.jpg',//初始图片地址
//		//d:'http://www.ckplayer.com/down/pause6.1_1.swf|http://www.ckplayer.com/down/pause6.1_2.swf',//暂停时播放的广告，swf/图片,多个用竖线隔开，图片要加链接地址，没有的时候留空就行
//		u:'',//暂停时如果是图片的话，加个链接地址
//		//t:'10|10',//视频开始前播放swf/图片时的时间，多个用竖线隔开
//		y:'',//这里是使用网址形式调用广告地址时使用，前提是要设置l的值为空
//		//z:'http://www.ckplayer.com/down/buffer.swf',//缓冲广告，只能放一个，swf格式
//		e:'2',//视频结束后的动作，0是调用js函数，1是循环播放，2是暂停播放并且不调用广告，3是调用视频推荐列表的插件，4是清除视频流并调用js功能和1差不多，5是暂停播放并且调用暂停广告
//		v:'80',//默认音量，0-100之间
//		p:'1',//视频默认0是暂停，1是播放，2是不加载视频
//		h:'3',//播放http视频流时采用何种拖动方法，=0不使用任意拖动，=1是使用按关键帧，=2是按时间点，=3是自动判断按什么(如果视频格式是.mp4就按关键帧，.flv就按关键时间)，=4也是自动判断(只要包含字符mp4就按mp4来，只要包含字符flv就按flv来)
//		q:'',//视频流拖动时参考函数，默认是start
//		m:'',//让该参数为一个链接地址时，单击播放器将跳转到该地址
//		o:'',//当p=2时，可以设置视频的时间，单位，秒
//		w:'',//当p=2时，可以设置视频的总字节数
//		g:'',//视频直接g秒开始播放
//		j:'',//跳过片尾功能，j>0则从播放多少时间后跳到结束，<0则总总时间-该值的绝对值时跳到结束
//		//k:'110|330',//提示点时间，如 30|60鼠标经过进度栏30秒，60秒会提示n指定的相应的文字
//		//n:'提示点一的内容|提示点二的内容',//提示点文字，跟k配合使用，如 提示点1|提示点2
//		wh:'',//宽高比，可以自己定义视频的宽高或宽高比如：wh:'4:3',或wh:'1080:720'
//		lv:'0',//是否是直播流，=1则锁定进度栏
//		loaded:'loadedHandler',//当播放器加载完成后发送该js函数loaded
//		//调用播放器的所有参数列表结束
//		//以下为自定义的播放器参数用来在插件里引用的
//		my_url:encodeURIComponent(window.location.href)//本页面地址
//		//调用自定义播放器参数结束
//		};
//	var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'opaque'};//这里定义播放器的其它参数如背景色（跟flashvars中的b不同），是否支持全屏，是否支持交互
//	var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4','http://www.ckplayer.com/webm/0.webm->video/webm','http://www.ckplayer.com/webm/0.ogv->video/ogg'];
//	CKobject.embed('ckplayer/ckplayer.swf','videoplayer','ckplayer_a1','100%','100%',false,flashvars,video,params);
//	/*
//		以上代码演示的兼容flash和html5环境的。如果只调用flash播放器或只调用html5请看其它示例
//	*/
//	/*
//	CKobject.embedSWF(播放器路径,容器id,播放器id/name,播放器宽,播放器高,flashvars的值,其它定义也可省略);
//	下面三行是调用html5播放器用到的
//	
//	var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4','http://www.ckplayer.com/webm/0.webm->video/webm','http://www.ckplayer.com/webm/0.ogv->video/ogg'];
//	var support=['iPad','iPhone','ios','android+false','msie10+false'];
//	CKobject.embedHTML5('videocnt','ckplayer_a1',600,400,video,flashvars,support);*/

}
