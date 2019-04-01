// JavaScript Document
window.onload = function(){
	var curlm;
	if(arrChildName1){
		oDl1.getElementsByTagName("dd")[0].getElementsByTagName("div")[0].style.display="block";
		curlm=arrFileName[0]+"1";
	}else{
		curlm=arrFileName[0];
	};
	brightena(1,"l")
	//showswitchbtn(curlm,"1");
	showcnt(oA1,"1","0","top","l")
	if(arrChildName1){brightenb(1,1,"l")};
}
function brightena(aIndex,lorr){
	oA1.style.color="#000000";
	oA1.style.fontWeight="normal";
	oldFlag=aIndex;
	oldlorr=lorr;
	if(lorr=="l"){oDlnum=oDl1}else{oDlnum=oDl2};
	oA1=oDlnum.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("a")[0];
	oA1.style.color="#001d57";
	oA1.style.fontWeight="bold";
	var allLi=oDl1.getElementsByTagName("Li");
	for(var i=0; i<allLi.length; i++){
		allLi[i].style.fontWeight="normal";
		allLi[i].style.color="#000000";
	}	
}
function brightenb(aIndex,bIndex,lorr){
	if(lorr=="l"){oDlnum=oDl1}else{oDlnum=oDl2};
	oLi1=oDlnum.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("Li")[bIndex-1];
	oLi1.style.fontWeight="bold";
	oLi1.style.color="#187bdc";
}

function showcnt(obj,aIndex,bIndex,level,lorr){
	var sIndex=bIndex.toString();
/*	if (sIndex.length==1){
		sIndex="0"+bIndex;
		}*/
	var arrChildMenu=eval("arr"+"ChildName"+aIndex);
	var arrChildStype=eval("arr"+"ChildStype"+aIndex);
	/*var arrStype=eval("arr"+"Stype");
	var arrColumnName=eval("arr"+"ColumnName");
	var arrFileName=eval("arr"+"FileName");*/
	var arrAllDiv=oDl1.getElementsByTagName("div");
	if(obj.tagName=="A"){
		brightena(aIndex,lorr);
		if(arrChildMenu){
				for(var i=0; i<arrAllDiv.length; i++){
					//arrAllDiv[i].style.display="none";
					document.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("div")[0].style.display="block";
				}
		}
		else{
			for(var i=0; i<arrAllDiv.length; i++){
				//	arrAllDiv[i].style.display="none";
				}
			brightena(aIndex,lorr);
			if(arrStype[aIndex-1]=="video"){
				document.getElementById("zlmtop").style.display = "none";
				var zid=arrFileName[aIndex-1];
				playvideo(zid);		
			}
			if(arrStype[aIndex-1]=="swf"){
				var zid=arrFileName[aIndex-1];
				playswf(zid,"b");
			}
			if(arrStype[aIndex-1]=="swfa"){
				var zid=arrFileName[aIndex-1];
				playswfa(zid,"b");
			}
			if(arrStype[aIndex-1]=="word"){
				var zid=arrFileName[aIndex-1];
				showword(zid,"b");
			}
			
		}
		
	}
	else{
		brightena(aIndex,lorr);
		brightenb(aIndex,bIndex,lorr)
		var zid=arrFileName[aIndex-1]+sIndex;
		if(arrChildStype){//定义了二级的类型
			curChildStype=eval("arr"+"ChildStype"+aIndex);
			switch(curChildStype[bIndex-1]){
				case "swf":
					playswf(zid,"b");
					break;
				case "swfa":
					playswfa(zid,"b");
					break;
				case "video":
					showswitchbtn(zid,bIndex);
					playvideo(zid);
					break;
				case "word":
					showword(zid,"b");
					break;
				case "download":
					jsqplay();
					document.getElementById("videocnt").innerHTML="<table width='656' height='377' bgcolor='#CCCCCC'><tr><td valign='middle' align='center'><a href=download/"+zid+".zip target=_blank style='color:#000000; font-size:12px;'><img src=images/down.png width=180px height=180px><br/>下载："+arrChildMenu[bIndex-1]+"</a></td></tr></table>"
					break;
				case "trd":
				
					//alert(zid)
				//showswitchbtn(zid,bIndex);
				//playvideo(zid,nSwitch);		
				default:
			}
		}

		else{
			if(arrStype[aIndex-1]=="video"){
				showswitchbtn(zid,bIndex);
				playvideo(zid);
			}
			if(arrStype[aIndex-1]=="swf"){
				playswf(zid,"b");
			}
			if(arrStype[aIndex-1]=="swfa"){
				playswfa(zid,"b");
			}
			if(arrStype[aIndex-1]=="trd"){
				//alert(zid)
				showswitchbtn(zid)
			}
		}
	};
};

//视频播放函数	
function playvideo(filename){
	jsqplay();
	var myVid = "";
	if(filename.length==4){
		myVid = eval("arr"+filename+"Vid");
	}else{
		myVid=eval("arr"+filename.split("-")[0]+"Vid")[filename.split("-")[1]-1];
	}
	if(!myVid){
		playswf("tzzl1-1","a");
		return;
	}
	var StrPath = location.href;
	if (StrPath.substring(0,4).toUpperCase()=="HTTP"){
		document.getElementById("videocnt").innerHTML ="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='661' height='410' id='cc_"+myVid+"'><param name='movie' value='http://p.bokecc.com/flash/single/039C1380CF417F50_"+myVid+"_true_A632ECD56D55DA5C_1/player.swf' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='always' /><param value='transparent' name='wmode' /><embed src='http://p.bokecc.com/flash/single/039C1380CF417F50_"+myVid+"_true_A632ECD56D55DA5C_1/player.swf' width='661' height='410' name='cc_"+myVid+"' allowFullScreen='true' wmode='transparent' allowScriptAccess='always' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'/></object>";
	}
	else {
		imgpath="images/beforevideo"
		mp4path = "video/" + filename;
		var mstr = "<table width='676' height='405' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
		mstr = mstr + "<tr>";
		mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=676 height=405 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
		mstr = mstr + "  </tr>";
		mstr = mstr + "</table>";
		document.getElementById("videocnt").innerHTML =mstr;
	}
}
//视频/文本切换按钮
function showswitchbtn(zid,bIndex){
	document.getElementById("zlmtop").style.display = "block";
	

/*	if(arrZtxxSwitch[bIndex-1]=="2"){
	document.getElementById("zlmtop").innerHTML = "<table width=140px height=22px><tr><td width=70px height=22px><a onclick=playvideo('"+zid+"',2) style='font-size:12px;'><img id=imgtv src='images/tviconcur.png' border='0' width=69px height=22px/></a></td><td width=70px><a style='font-size:12px;' onclick=playswf('"+zid+"','t2')><img id=imgtxt src='images/txticon.png'  width=69px height=22px border='0'/></a></td></tr></table>";
	}else{
	document.getElementById("zlmtop").innerHTML = "<table width=140px height=22px><tr><td width=70px height=22px><a style='font-size:12px;'></a></td><td width=70px><a><img id=imgtv src='images/tviconcur.png' border='0' width=69px height=22px/></a></td></tr></table>";
	}*/
	var arrnametrd=eval("arrname"+zid)
	//alert(arrnametrd)
	var strTrdUl="";
	var strTrdLi="";
	for(var i=0; i<arrnametrd.length; i++){
			var m=i+1;
			var trdfilename=zid+"-"+m
			//alert(trdfilename)
			strTrdLi=strTrdLi+"<li id="+trdfilename+" onclick=showtrd(this)>"+arrnametrd[i]+"</li>";
			strTrdUl="<ul class=trdul>"+strTrdLi+"</ul>";
			//alert(strTrdUl)
		}
		//alert(strTrdUl)
	document.getElementById("zlmtop").innerHTML = strTrdUl;
	  playvideo(zid+"-1")
	
}


function showtrd(obj){
	jsqplay();
	var trdstypename=(eval("arrstype"+obj.id.split("-")[0])[obj.id.split("-")[1]-1])
	switch(trdstypename){
				case "swf":
					playswf(obj.id,"a");
					break;
				case "swfa":
					playswfa(obj.id,"a");
					break;	
				case "video":
					playvideo(obj.id);
					break;
				case "word":
					showword(obj.id,"a");
				case "download":
					jsqplay();
					document.getElementById("videocnt").innerHTML="<table width='656' height='377' bgcolor='#CCCCCC'><tr><td valign='middle' align='center'><a href=download/"+zid+".zip target=_blank style='color:#000000; font-size:12px;'><img src=images/down.png width=180px height=180px><br/>下载："+arrChildMenu[bIndex-1]+"</a></td></tr></table>"
					break;
				default:
	}
}
//swf播放函数
function playswf(zid,tt){
	jsqplay();
	tpath = "swf/" + zid + ".swf";
	var ptr = "<table width='677' height='390' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	ptr = ptr + "<tr>";
	ptr = ptr + "<td valign=top style='border-bottom:1px solid #ccc';><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='675' height='390' id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width='675' height='390' wmode='transparent'></embed></object></td>";
	ptr = ptr + "  </tr>";
	//ptr = ptr + "<tr><td><a href='swf/"+zid+".docx' style='line-height:30px; font-size:12px; font-family:宋体; color:#e87800;'>右键单击此处，点击”目标另存为“可下载此文档（docx格式）</a></td></tr>"
	ptr = ptr + "</table>";
	if(tt!=="a"){
		document.getElementById("zlmtop").style.display = "none";
		}	
	document.getElementById("videocnt").innerHTML = ptr;
	
	//
}

//swf播放函数（不带下载）
function playswfa(zid,tt){
	jsqplay();
	tpath = "swf/" + zid + ".swf";
	var ptr = "<table width='660' height='410' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	ptr = ptr + "<tr>";
	ptr = ptr + "<td valign=top style='border-bottom:1px solid #ccc';><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='660' height='410' id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width='660' height='410' wmode='transparent'></embed></object></td>";
	ptr = ptr + "  </tr>";
	ptr = ptr + "</table>";
	if(tt!=="a"){
		document.getElementById("zlmtop").style.display = "none";
		}	
	document.getElementById("videocnt").innerHTML = ptr;
	
	//
}

//文本显示函数
function showword(zid,tt){
	jsqplay();
	document.getElementById("zlmtop").style.display = "none";
	document.getElementById("videocnt").innerHTML="<iframe name=myframe id=myframe width=675 height=400 allowtransparency='true' frameborder=0 border=0 scrolling=no src='word/"+zid+".htm'>";
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











