// JavaScript Document
window.onload = function(){
	var curlm;
	if(arrLeftChildName1){
		oDl1.getElementsByTagName("dd")[0].getElementsByTagName("div")[0].style.display="block";
		curlm=arrLeftFileName[0]+"1";
		patharea.innerHTML="当前位置："+arrLeftColumnName[0]+" > "+arrLeftChildName1[0];
	}else{
		curlm=arrLeftFileName[0];
		patharea.innerHTML="当前位置："+arrLeftColumnName[0];
	};
	brightena(1,"l")
	showcnt(oA1,"1","0","top","l")
	if(arrLeftChildName1){brightenb(1,1,"l")};
}
function brightena(aIndex,lorr){
	oA1.style.backgroundImage="url(images/ct.png)";
	oA1.style.backgroundRepeat="no-repeat";
	oA1.style.color="#000000";
	oA1.style.fontWeight="normal";
	oldFlag=aIndex;
	oldlorr=lorr;
	if(lorr=="l"){oDlnum=oDl1}else{oDlnum=oDl2};
	oA1=oDlnum.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("a")[0];
	oA1.style.backgroundImage="url(images/cur.png)";
	oA1.style.color="#FFFFFF";
	oA1.style.fontWeight="bold";
	var allLi=document.getElementsByTagName("Li");
	for(var i=0; i<allLi.length; i++){
		allLi[i].style.fontWeight="normal";
		allLi[i].style.color="#FFFFFF";
	}	
}
function brightenb(aIndex,bIndex,lorr){
	if(lorr=="l"){oDlnum=oDl1}else{oDlnum=oDl2};
	oLi1=oDlnum.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("Li")[bIndex-1];
	oLi1.style.fontWeight="bold";
	oLi1.style.color="#3f3f3f";
}

function showcnt(obj,aIndex,bIndex,level,lorr){
	var sIndex=bIndex.toString();
/*	if (sIndex.length==1){
		sIndex="0"+bIndex;
		}*/
	if (lorr=="l"){
		slorr="Left";
		}else{
		slorr="Right";	
	}
	var arrChildMenu=eval("arr"+slorr+"ChildName"+aIndex);
	var arrChildStype=eval("arr"+slorr+"ChildStype"+aIndex);
	var arrStype=eval("arr"+slorr+"Stype");
	var arrColumnName=eval("arr"+slorr+"ColumnName");
	var arrFileName=eval("arr"+slorr+"FileName");
	var arrAllDiv=oDl1.getElementsByTagName("div");
	var strZlmHtmlb=""
	if(obj.tagName=="A"){
		brightena(aIndex,lorr);
		if(arrChildMenu){
				for(var i=0; i<arrAllDiv.length; i++){
					arrAllDiv[i].style.display="none";
					document.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("div")[0].style.display="block";
				}
		}
		else{
			for(var i=0; i<arrAllDiv.length; i++){
					arrAllDiv[i].style.display="none";
				}
			brightena(aIndex,lorr);
			patharea.innerHTML="当前位置："+arrColumnName[aIndex-1]
			var zid=arrFileName[aIndex-1];
			if(arrStype[aIndex-1]=="video"){
				document.getElementById("sjlm").innerHTML=""
				document.getElementById("zlmtop").innerHTML ="";
				playvideo(zid);			
			}
			if(arrStype[aIndex-1]=="swf"){
				document.getElementById("sjlm").innerHTML=""
				document.getElementById("zlmtop").innerHTML ="";
				playswf(zid);
			}
			if(arrStype[aIndex-1]=="word"){
				document.getElementById("sjlm").innerHTML=""
				document.getElementById("zlmtop").innerHTML ="";
				playword(zid);
			}
			if(arrStype[aIndex-1]=="zlm"){
				var arrNameTrd=eval("arr"+zid+"Trd");
					for(var i=0; i<arrNameTrd.length; i++){
						var zlmStype=arrNameTrd[i];
						strZlmHtmlb+="<a onclick=playzlm('"+zid+"','"+zlmStype+"') style='font-size:12px;'><img id="+arrNameTrd[i]+"btn imgtv src='images/"+arrNameTrd[i]+"btn.png' border='0' width=69px height=22px/></a>"					
					}
					document.getElementById("zlmtop").innerHTML =strZlmHtmlb
					document.getElementById(arrNameTrd[0]+"btn").src="images/"+arrNameTrd[0]+"btncur.png";
					switch(arrNameTrd[0]){
					case "swf":
						playswf(zid+"1");
					break;
					case "video":
						playzlm(zid,"video");
					
					break;
					case "word":
						playzlm(zid,"word");
					default:
			}
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
					document.getElementById("sjlm").innerHTML=""
					document.getElementById("zlmtop").innerHTML ="";
					playswf(zid);
					break;
				case "video":
					document.getElementById("sjlm").innerHTML=""
					document.getElementById("zlmtop").innerHTML ="";
					playvideo(zid);
					break;
				case "word":
					document.getElementById("sjlm").innerHTML=""
					document.getElementById("zlmtop").innerHTML ="";
					playword(zid);
					break;
				default:
			}
		}

		else{
			if(arrStype[aIndex-1]=="video"){
				document.getElementById("sjlm").innerHTML=""
				document.getElementById("zlmtop").innerHTML ="";
				playvideo(zid);
			}
			if(arrStype[aIndex-1]=="swf"){
				document.getElementById("sjlm").innerHTML=""
				document.getElementById("zlmtop").innerHTML ="";
				playswf(zid);
			}
			if(arrStype[aIndex-1]=="word"){
				document.getElementById("sjlm").innerHTML=""
				document.getElementById("zlmtop").innerHTML ="";
				playword(zid);
			}
		}
	};
};

//三级栏目播放函数
function playzlm(zid,zlmStype){
	var arrNameTrd=eval("arr"+zid+"Trd");
	for(var i=0; i<arrNameTrd.length; i++){
		
		document.getElementById(arrNameTrd[i]+"btn").src="images/"+arrNameTrd[i]+"btn.png";
	}
	document.getElementById(zlmStype+"btn").src="images/"+zlmStype+"btncur.png";
	var nSjNum=eval("arr"+zid+zlmStype+"Num");
	switch(zlmStype){
		case "video":
			playvideo(zid+"1");
			if(nSjNum==1){
				document.getElementById("sjlm").innerHTML=""
				}
			if(nSjNum==2){
				document.getElementById("sjlm").innerHTML="<a onclick=playvideo('"+zid+"1') >视频1</a><a onclick=playvideo('"+zid+"2') >视频2</a>"
				}
			if(nSjNum==3){
				document.getElementById("sjlm").innerHTML="<a onclick=playvideo('"+zid+"1') >视频1</a><a onclick=playvideo('"+zid+"2') >视频2</a><a onclick=playvideo('"+zid+"3') >视频3</a>"
				}	
			if(nSjNum==4){
				document.getElementById("sjlm").innerHTML="<a onclick=playvideo('"+zid+"1') >视频1</a><a onclick=playvideo('"+zid+"2') >视频2</a><a onclick=playvideo('"+zid+"3') >视频3</a><a onclick=playvideo('"+zid+"4') >视频4</a>"
				}		
			//alert(nSjNum)
			
			break;
		case "word":
			playword(zid+"1");
			if(nSjNum==1){
				document.getElementById("sjlm").innerHTML=""
				}
			if(nSjNum==2){
				document.getElementById("sjlm").innerHTML="<a onclick=playword('"+zid+"1') >文本1</a><a onclick=playword('"+zid+"2') >文本2</a>"
				}
			if(nSjNum==3){
				document.getElementById("sjlm").innerHTML="<a onclick=playword('"+zid+"1') >文本1</a><a onclick=playword('"+zid+"2') >文本2</a><a onclick=playword('"+zid+"3') >文本3</a>"
				}
			if(nSjNum==4){
				document.getElementById("sjlm").innerHTML="<a onclick=playword('"+zid+"1') >文本1</a><a onclick=playword('"+zid+"2') >文本2</a><a onclick=playword('"+zid+"3') >文本3</a><a onclick=playword('"+zid+"4') >文本4</a>"
				}		
			break;
						
		case "swf":
			playswf(zid+"1");
			if(nSjNum==1){
				document.getElementById("sjlm").innerHTML=""
				}
			break;
		
		default:
	}
}

//视频播放函数	
function playvideo(zid){
	var oImg1=document.getElementById("imgtv");
	var oImg2=document.getElementById("imgtxt");
		var arrVid=eval("arrVid"+zid.substring(0,4))
	var nVidIndex=parseInt(zid.substring(4,5));
	var StrPath = location.href;
	var bool = StrPath.indexOf("http");
	if (bool>=0){
		var myVid=arrVid[nVidIndex-1];
		var mccp='<div style="padding-top:20px;padding-left:80px;"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="520" height="390" id="cc_'+myVid+'"><param name="movie" value="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode" /><embed src="http://p.bokecc.com/flash/single/039C1380CF417F50_'+myVid+'_true_9223C66477962A2F_1/player.swf" width="520" height="390" name="cc_'+myVid+'" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/></object></div>'
		document.getElementById("videocnt").innerHTML = mccp

	}
	else {
		var mp4path = "wmv/0" + nVidIndex;
		var imgpath = "images/beforevideo";
	var mstr = "<table width='438' style='margin-left:120px; margin-top:30px;' height='352' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	mstr = mstr + "<tr>";
	mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=436 height=350 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
	mstr = mstr + "  </tr>";
	mstr = mstr + "</table>";
	document.getElementById("videocnt").innerHTML = mstr;
	}
}


//swf播放函数
function playswf(zid){
	tpath = "swf/" + zid + ".swf";
	var ptr = "<table width='690' height='430' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	ptr = ptr + "<tr>";
	ptr = ptr + "<td valign=top><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='688' height='428' id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width='688' height='428' wmode='transparent'></embed></object></td>";
	ptr = ptr + "  </tr>";
	ptr = ptr + "</table>";
	document.getElementById("videocnt").innerHTML = ptr;

	//
}
//文本显示函数
function playword(zid){
	document.getElementById("videocnt").innerHTML="<iframe name=myframe id=myframe width=688 height=410 frameborder=0 border=0 scrolling=no src='word/"+zid+".htm'>";
	
}