// JavaScript Document
window.onload = function(){
	var curlm;
	if(arrLeftChildName1){
		curlm=arrLeftFileName[0]+"01";
		patharea.innerHTML="当前位置："+arrLeftColumnName[0]+" > "+arrLeftChildName1[0];
	}else{
		curlm=arrLeftFileName[0];
		patharea.innerHTML="当前位置："+arrLeftColumnName[0];
	};
	brightena(1,"l")
	
	playvideo(curlm,"1");
	if(arrLeftChildName1){brightenb(1,1,"l")};
}
function brightena(aIndex,lorr){
	oA1.style.backgroundImage="url(images/btn"+oldlorr+oldFlag+".png)";
	oldFlag=aIndex;
	oldlorr=lorr;
	if(lorr=="l"){oDlnum=oDl1}else{oDlnum=oDl2};
	oA1=oDlnum.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("a")[0];
	oA1.style.backgroundImage="url(images/btn"+lorr+aIndex+"cur.png)";
	var allLi=document.getElementsByTagName("Li");
	for(var i=0; i<allLi.length; i++){
		allLi[i].style.backgroundImage="url(images/level2_bg.png)";
	}	
}
function brightenb(aIndex,bIndex,lorr){
	if(lorr=="l"){oDlnum=oDl1}else{oDlnum=oDl2};
	oLi1=oDlnum.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("Li")[bIndex-1];
	oLi1.style.backgroundImage="url(images/level2cur_bg.png)";
}
function showcnt(obj,aIndex,bIndex,level,lorr){
	var sIndex=bIndex.toString();
	if (sIndex.length==1){
		sIndex="0"+bIndex;
		}
	if (lorr=="l"){
		slorr="Left";
		}else{
		slorr="Right"	
	}
	var arrChildMenu=eval("arr"+slorr+"ChildName"+aIndex);
	var arrChildStype=eval("arr"+slorr+"ChildStype"+aIndex);
	var arrStype=eval("arr"+slorr+"Stype");
	var arrColumnName=eval("arr"+slorr+"ColumnName");
	var arrFileName=eval("arr"+slorr+"FileName");
	if(obj.tagName=="A"){
		if(arrChildMenu){
			return;
		}
		else{
			brightena(aIndex,lorr);
			patharea.innerHTML="当前位置："+arrColumnName[aIndex-1]
			if(arrStype[aIndex-1]=="video"){
				var zid=arrFileName[aIndex-1];
				
				playvideo(zid,'1');			
			}
			if(arrStype[aIndex-1]=="swf"){
				var zid=arrFileName[aIndex-1];
				playswf(zid);
			}
		}
		
	}
	else{
		brightena(aIndex,lorr);
		brightenb(aIndex,bIndex,lorr)
		patharea.innerHTML="当前位置："+arrColumnName[aIndex-1]+" > "+arrChildMenu[bIndex-1];
		var zid=arrFileName[aIndex-1]+sIndex;
		if(arrChildStype){
			curChildStype=eval("arr"+slorr+"ChildStype"+aIndex);
			switch(curChildStype[bIndex-1]){
				case "swf":
					playswf(zid);
					break;
				case "video":
					
					playvideo(zid,'1');
					break;
				case "download":
					jsqplay()
					document.getElementById("videocnt").innerHTML="<table width='626' height='377' bgcolor='#CCCCCC'><tr><td valign='middle' align='center'><a href=download/"+zid+".zip target=_blank style='color:#000000; font-size:12px;'><img src=images/down.png width=180px height=180px border=0><br/>下载："+arrChildMenu[bIndex-1]+"</a></td></tr></table>"
					document.getElementById("switchbut").innerHTML = "";
					break;
				default:
			}
		}

		else{
			if(arrStype[aIndex-1]=="video"){
				
				playvideo(zid,'1');
			}
			if(arrStype[aIndex-1]=="swf"){
				playswf(zid);
			}
		}
	};
};

//视频播放函数	
function playvideo(zid,e){
	jsqplay()
/*	var oImg1=document.getElementById("img512");
	var oImg2=document.getElementById("img128");
	
	var mmserver = "http://video2.teacheredu.cn/test/jjcourse/"; */
	//alert(zid.substring(0,2))
	var arrVid=eval("arrVid"+zid.substring(0,2))
	var nVidIndex=zid.substring(2,4);
	if(nVidIndex){
		}else{
		nVidIndex=1;
	}
	var StrPath = location.href;
	var bool = StrPath.indexOf("http");
	if (bool>=0){
		var myVid=arrVid[nVidIndex-1];
		var mccp='<div style="padding-top:20px;"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="620" height="350" id="cc_'+myVid+'"><param name="movie" value="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode" /><embed src="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" width="620" height="350" name="cc_'+myVid+'" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/></object></div>'
		document.getElementById("videocnt").innerHTML = mccp

	}
	else {
		var mp4path = "video/" +CourseCode + zid + "-512";
		var imgpath = "images/beforevideo";
	var mstr = "<table><tr><td height=3px></td></tr></table><table width='626' height='377' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	mstr = mstr + "<tr>";
	mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=624 height=375 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;type=http&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
	mstr = mstr + "  </tr>";
	mstr = mstr + "</table>";
	document.getElementById("videocnt").innerHTML = mstr;
	}
}


//swf播放函数
function playswf(zid){
	jsqplay()
	tpath = "swf/" + zid + ".swf";
	var ptr = "<table><tr><td height=3px></td></tr></table><table width='626' height='388' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	ptr = ptr + "<tr>";
	ptr = ptr + "<td valign=top><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='624' height='388' id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width='624' height='388' wmode='transparent'></embed></object></td>";
	ptr = ptr + "  </tr>";
	ptr = ptr + "</table>";
	document.getElementById("videocnt").innerHTML = ptr;
	document.getElementById("switchbut").innerHTML = "";
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





