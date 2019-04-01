//导航点击
function showcnt(aIndex,obj){
	
	var lierjiarrname = eval("arrerjiName"+aIndex);
	if(lierjiarrname.length==0){

		for(var i=0; i<wLi.length; i++){
			wLi[i].style.backgroundImage="url(images/w_bg.png)";
			wLi[i].style.color="#151515";
			wLi[i].onOff="unselect";
		}
		
		for(var i=0; i<vLi.length; i++){
			vLi[i].style.color="#474644";
		}
		
		for(i=0;i<oaaa.length;i++){
			oaaa[i].style.color="#0364a4"
			oaaa[i].style.backgroundColor="#ffffff"	
		}
		
		obj.onOff="selected"; 	
		wLi[aIndex-1].style.backgroundImage="url(images/w_cur.png)";
		wLi[aIndex-1].style.color="#fff"
		
		var sIndex=aIndex.toString();
		if (aIndex.length==1){
			sIndex="0"+aIndex;
			}
		
		if(arrWordStype[aIndex-1]=="swf"){
			playswf(aIndex);		
		}else if(arrWordStype[aIndex-1]=="word"){
			playswf(aIndex)
			
		}else if(arrWordStype[aIndex-1]=="down"){
			showdown(aIndex)
		}
		document.getElementById("videoplayer").style.height='398px'
	}else{

	}
	
};


//视频点击
function showvideo(aIndex,e){
	jsqplay();
	var sIndex=aIndex.toString();
	if (aIndex.length==1){
		sIndex="0"+aIndex;
		}
	
	for(var i=0; i<vLi.length; i++){
		vLi[i].style.color="#474644";
	}		
	vLi[aIndex-1].style.color="#fff";
	
	//清除所有导航样式
	for(var i=0; i<wLi.length; i++){
		wLi[i].style.backgroundImage="url(images/w_bg.png)";
		wLi[i].style.color="#151515";
		wLi[i].onOff="unselect";
	}		
	for(i=0;i<oerjixl.length;i++){
		oerjixl[i].style.display='none'
	}
	for(i=0;i<oaaa.length;i++){
		oaaa[i].style.color="#0364a4"
		oaaa[i].style.backgroundColor="#ffffff"	
	}
	
	playvideo(aIndex,e);	
	document.getElementById("videoplayer").style.height='398px'	
		
};
//视频播放函数	
function playvideo(aIndex,e){
	jsqplay();
	var nVidIndex=aIndex;
	var sIndex=aIndex.toString();
	if (sIndex.length==1){
		sIndex="0"+aIndex;
		}
	var StrPath = location.href;
	var bool = StrPath.indexOf("http");
	if (bool>=0){
		var myVid=arrVid[nVidIndex-1];
		var mccp='<div><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="708" height="398" id="cc_'+myVid+'"><param name="movie" value="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode" /><embed src="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" width="708" height="398" name="cc_'+myVid+'" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/></object></div>'
		document.getElementById("videoplayer").innerHTML = mccp

	}
	else {
		var mp4path = "video/" +CourseCode + "sp" + sIndex;
		var imgpath = "images/beforevideo";
	var mstr = "<table style='margin-left:44px' width='662' height='398' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	mstr = mstr + "<tr>";
	mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=660 height=396 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;type=http&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#62b7f7' wmode='transparent'></EMBED></td>";
	mstr = mstr + "</tr>";
	mstr = mstr + "</table>";
	document.getElementById("videoplayer").innerHTML = mstr;
	}
}


//文本显示函数
function showword(zid){
	jsqplay();
	document.getElementById("videoplayer").innerHTML="<iframe name=myframe id=myframe width=708 height=422 frameborder=0 border=0 scrolling=auto src='word/"+zid+".htm'>";

}

//swf播放函数
function playswf(zid){
	jsqplay();
	tpath = "swf/" + zid + ".swf";
	var ptr = "<table width='708' height='400' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	ptr = ptr + "<tr>";
	ptr = ptr + "<td valign=top><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='706' height='398' id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width='706' height='398' wmode='transparent'></embed></object></td>";
	ptr = ptr + "  </tr>";
	ptr = ptr + "</table>";
	
	document.getElementById("videoplayer").innerHTML = ptr;
}
function showdown(zid){
	jsqplay();
	tpath = "download/"+zid+".zip";
	var dtr = "<table width='100%' height='100%' bgcolor='#efefef'><tr><td valign='middle' align='center'><a href="+tpath+" target=_blank style='color:#000000; font-size:12px;'><img src=images/down.png width=180px height=180px style='margin-bottom:10px;'><br/>点击下载</a></td></tr></table>";
	document.getElementById("videoplayer").innerHTML = dtr;		
}



//--------------------视频暂停与恢复播放------------------
function getSWF( swfID ) {
if (window.document[ swfID ]) {
	return window.document[ swfID ];
} else if (navigator.appName.indexOf("Microsoft") == -1) {
	if (document.embeds && document.embeds[ swfID ]) {
	return document.embeds[ swfID ];
	}
} else {
	return document.getElementById( swfID );
	}
}

var videovid;
var objectid;
var videoifplay=true;

//播放器界面元素初始化时
function on_cc_player_init( vid, objectID ){
	videovid=vid;
	objectid=objectID;
	var ccplayer = getSWF( objectID );
	var config = {};
	ccplayer.setConfig(config);
}

//暂停播放
function on_spark_player_pause(){
	//var player = getSWF(objectid);
	//player.pause();
	videoifplay = false;
	if(platformDomain=="teacheredu.cn"){
		if(parent.callParentVideoifplay){
			parent.callParentVideoifplay(videoifplay);
		}
	}
}

//恢复播放
function on_spark_player_resume(){
	//var player = getSWF(objectid);
	//player.resume();
	videoifplay = true;
	if(platformDomain=="teacheredu.cn"){
		if(parent.callParentVideoifplay){
			parent.callParentVideoifplay(videoifplay);
		}
	}
}

//结束播放
function on_spark_player_stop(){
	videoifplay = false;
	if(platformDomain=="teacheredu.cn"){
		if(parent.callParentVideoifplay){
			parent.callParentVideoifplay(videoifplay);
		}
	}
}

//告诉计时器计时调用函数，传值true
function jsqplay(){
	videoifplay = true;
	if(platformDomain=="teacheredu.cn"){
		if(parent.callParentVideoifplay){
			parent.callParentVideoifplay(videoifplay);
		}
	}
}


//获取url中的domain参数
function getUrlParam(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return unescape(r[2]); return null; 
} 

var platformDomain;
platformDomain = getUrlParam('domain');


if(platformDomain=="teacheredu.cn"){
	document.domain = platformDomain;	
}















