// JavaScript Document
window.onload = function(){
	var curlm;
	if(arrMyChildName1){
		curlm=arrFileName[0]+"01";
	}else{
		curlm=arrFileName[0];
	};
	brightena(1);
	switch(arrMyChildStype1[0]){
				case "swf":
					playswf(curlm);
					break;
				case "video":
					playvideo(curlm,"false");
					break;
				case "download":
					document.getElementById("videoplayer").innerHTML="<table width='900' height='500' bgcolor='#f0f0f0'><tr><td valign='middle' align='center'><a href=download/"+curlm+".rar target=_blank style='color:#000000; font-size:14px;'><img border=0 src=images/down.png width=180px height=180px><br/>下载："+arrMyChildName1[0]+"</a></td></tr></table>"
					break;
				default:
			}
	
	if(arrMyChildName1){brightenb(1,1)};
}
function brightena(aIndex){
	//oA1.style.backgroundImage="url(images/ct.png)";
	oldFlag=aIndex;
	oA1=oTopDiv.getElementsByTagName("div")[aIndex-1].getElementsByTagName("a")[0];
	//oA1.style.backgroundImage="url(images/cur.png)";
	var allLi=document.getElementsByTagName("Li");
	var allDiv=document.getElementsByTagName("Div");
	for(var i=0; i<allLi.length; i++){
		allLi[i].style.color="#474644";
	}	
	for(var i=0; i<allDiv.length; i++){
		allDiv[i].style.backgroundImage="";
	}	
}
function brightenb(aIndex,bIndex){
	oLi=oTopDiv.getElementsByTagName("div")[aIndex-1].getElementsByTagName("Li")[bIndex-1];
	oLi.style.color="#e39f1b";
	oDiv=oTopDiv.getElementsByTagName("div")[aIndex-1].getElementsByTagName("div")[0]
	//oDiv.style.backgroundImage="url(images/triangle.png)";
	//oDiv.style.backgroundRepeat = "no-repeat"
	//oDiv.style.backgroundPosition ="0 35px"
}
function showcnt(obj,aIndex,bIndex,level){
	var sIndex=bIndex.toString();
	if (sIndex.length==1){
		sIndex="0"+bIndex;
		}
	var arrMyChildMenu=eval("arrMyChildName"+aIndex);
	var arrChildStype=eval("arrMyChildStype"+aIndex);
	var arrColumnName
	if(obj.tagName=="A"){
		if(arrMyChildMenu){
			return;
		}
		else{
			brightena(aIndex);
			if(arrStype[aIndex-1]=="video"){
				var zid=arrFileName[aIndex-1];
				playvideo(zid,"true");	
			}
			if(arrStype[aIndex-1]=="swf"){
				var zid=arrFileName[aIndex-1];
				playswf(zid);
			}
		}
		
	}
	else{
		
		brightena(aIndex);
		brightenb(aIndex,bIndex)
		var zid=arrFileName[aIndex-1]+sIndex;
		if(arrChildStype){
			curChildStype=eval("arrMyChildStype"+aIndex);
			switch(curChildStype[bIndex-1]){
				case "swf":
					playswf(zid);
					break;
				case "video":
					playvideo(zid,"true");
					break;
				case "download":
					jsqplay()
					document.getElementById("videoplayer").innerHTML="<table width='900' height='500' bgcolor='#f0f0f0'><tr><td valign='middle' align='center'><a href=download/"+zid+".rar target=_blank style='color:#000000; font-size:14px;'><img border=0 src=images/down.png width=180px height=180px><br/>下载："+arrMyChildMenu[bIndex-1]+"</a></td></tr></table>"
					break;
				default:
			}
		}

		else{
			if(arrStype[aIndex-1]=="video"){
				playvideo(zid,"true");
			}
			if(arrStype[aIndex-1]=="swf"){
				playswf(zid);
			}
		}
	};
};

//视频播放函数	
function playvideo(zid,autob){
	jsqplay()
	if(autob=="false"){
		jsqplayno();
	}
	var arrVid=eval("arrVid"+zid.substring(0,3))
	var nVidIndex=zid.substring(3,5);
	var StrPath = location.href;
	var bool = StrPath.indexOf("http");
	if (bool>=0){
		var myVid=arrVid[nVidIndex-1];
		
		var mccp='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="905" height="510" id="cc_'+myVid+'"><param name="movie" value="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_'+autob+'_9223C66477962A2F_1/player.swf" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode" /><embed src="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_'+autob+'_9223C66477962A2F_1/player.swf" width="905" height="510" name="cc_'+myVid+'" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/></object>'
		document.getElementById("videoplayer").innerHTML = mccp
	}
	else {
		var mp4path = mp4path = "video/" +CourseCode + zid;
		var imgpath = "images/beforevideo";
	var mstr = "<table width='905' height='510' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	mstr = mstr + "<tr>";
	mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=903 height=508 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
	mstr = mstr + "  </tr>";
	mstr = mstr + "</table>";
	document.getElementById("videoplayer").innerHTML = mstr;
	}

}
//swf播放函数
function playswf(zid){
	jsqplay()
	tpath = "swf/" + zid + ".swf";
	var ptr = "<table width='904' height='508' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	ptr = ptr + "<tr>";
	ptr = ptr + "<td valign=top><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='904' height='508' id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width='904' height='508' wmode='transparent'></embed></object></td>";
	ptr = ptr + "  </tr>";
	ptr = ptr + "</table>";
	document.getElementById("videoplayer").innerHTML = ptr;
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

//开始播放
function on_spark_player_start(){
	videoifplay = true;
	if(platformDomain=="teacheredu.cn"){
		if(parent.callParentVideoifplay){
			parent.callParentVideoifplay(videoifplay);
		}
	}
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

//告诉计时器计时调用函数，传值false
function jsqplayno(){
	videoifplay = false;
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
