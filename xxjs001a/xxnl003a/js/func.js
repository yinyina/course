// JavaScript Document
window.onload = function(){
	var curlm;
	if(arrMyChildName1){
		curlm=arrFileName[0]+"01";
	}else{
		curlm=arrFileName[0];
	};
	brightena(1);
	playvideo(curlm,"1");
	if(arrMyChildName1){brightenb(1,1)};
}
function brightena(aIndex){
	oA1.style.backgroundImage="url(images/ct.png)";
	oldFlag=aIndex;
	oA1=oDl.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("a")[0];
	oA1.style.backgroundImage="url(images/cur.png)";
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
	oLi=oDl.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("Li")[bIndex-1];
	oLi.style.color="#e39f1b";
	oDiv=oDl.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("div")[0]
	oDiv.style.backgroundImage="url(images/triangle.png)";
	oDiv.style.backgroundRepeat = "no-repeat"
	oDiv.style.backgroundPosition ="0 35px"
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
				playvideo(zid);			
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
					playvideo(zid);
					break;
				default:
			}
		}

		else{
			if(arrStype[aIndex-1]=="video"){
				playvideo(zid);
			}
			if(arrStype[aIndex-1]=="swf"){
				playswf(zid);
			}
		}
	};
};

//视频播放函数	
function playvideo(zid){
	var arrVid=eval("arrVid"+zid.substring(0,3))
	var nVidIndex=parseInt(zid.substring(3,5));
	var StrPath = location.href;
	var bool = StrPath.indexOf("http");
	if (bool>=0){
		var myVid=arrVid[nVidIndex-1];
		
		var mccp='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="708" height="400" id="cc_'+myVid+'"><param name="movie" value="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode" /><embed src="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" width="708" height="400" name="cc_'+myVid+'" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/></object>'
		document.getElementById("videoplayer").innerHTML = mccp

	}
	else {
		var mp4path = mp4path = "video/" +CourseCode + zid;
		var imgpath = "images/beforevideo";
	var mstr = "<table width='708' height='400' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	mstr = mstr + "<tr>";
	mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=708 height=400 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
	mstr = mstr + "  </tr>";
	mstr = mstr + "</table>";
	document.getElementById("videoplayer").innerHTML = mstr;
	}

}
//swf播放函数
function playswf(zid){
	tpath = "swf/" + zid + ".swf";
	var ptr = "<table width='708' height='398' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	ptr = ptr + "<tr>";
	ptr = ptr + "<td valign=top><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='708' height='398' id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width='708' height='398' wmode='transparent'></embed></object></td>";
	ptr = ptr + "  </tr>";
	ptr = ptr + "</table>";
	document.getElementById("videoplayer").innerHTML = ptr;
}