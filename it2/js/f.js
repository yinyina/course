$(function(){
		var StrPath = location.href;
		var bool = StrPath.indexOf("http");
		
		document.title = sCourseTitle;

	//课程名称
		$( "#coursetitle" ).html( sCourseTitle );

	//加载课程栏目
		//第一个栏目	
		loadlist();	
		function loadlist(){
			var onewLi = null;
			var $Ul = $( "#menuvideolist ul" );
			var numa = 0;
			var numb = 0;
			var numc = 0;
			$.each( arrList,function( i,elem ){
				switch(elem.level){
					case "1":
						numa++;
						numb=0;
						onewLi = $( "<li class='level1'>"+elem.coursename+"</li>" ).appendTo($Ul).attr({"liindex":i,"indexa":numa,"level":"1"})
					break;
					case "2":
						numb++;
						numc=0;
						onewLi = $( "<li class='level2'>"+elem.coursename+"</li>" ).appendTo($Ul).attr({"liindex":i,"indexa":numa,"indexb":numb})
					break;
					case "3":
						numc++;
						onewLi = $( "<li class='level3'>"+elem.coursename+"</li>" ).appendTo($Ul).attr({"liindex":i,"indexa":numa,"indexb":numb,"indexc":numc,"title":elem.coursename})
					break;
					default:
					break;
				}
			})
		}
		
		//其他栏目
		var kcjsarra = new Array();
		var kcjsarrb = new Array();
		loaddowmlist();
		function loaddowmlist(){
			var downlistli = null;
			var downlist = null;
			var downdiv = document.getElementById("menurightlist");
			for(var i=0; i<arrkcjs.length; i++){
				var kcjsa = arrkcjs[i].split("-")[0];
				var kcjsb = arrkcjs[i].split("-")[1];
				kcjsarra.push(kcjsa);
				kcjsarrb.push(kcjsb);
			}
			for(var i=0; i<arrkcjs.length; i++){
				this.index = i;
				downlistli = '<dl><dt>' +  kcjsarra[this.index] + '</dt><dd></dd></dl>';
				downlist = downlistli;
				downdiv.innerHTML += downlist;
			}
		}
		
		var downdivul = document.getElementById("menurightlist");	
		var downdivli = downdivul.getElementsByTagName("dd");
		var arrkcjsliarrnum;
		var arrkcjsliarr;
		
		for(var i=0; i<downdivli.length; i++){
			downdivli[i].index = i;
			var downlilistli = '';
			var downullist = '';
			var downullists = '';
			arrkcjsliarrnum = downdivli[i].index+1;
			arrkcjsliarr = eval("arrkcjsli"+arrkcjsliarrnum)
			for(j=0;j<arrkcjsliarr.length;j++){
				this.num = j;
				downlilistli='<p title="'+arrkcjsliarr[this.num]+'">'+ arrkcjsliarr[this.num] +'</p>'
				downullist += downlilistli;
			}	
			downullists = downullist;
			$(downdivli[i]).append(downullists);
		}

	//获取元素
		$menulistalldl = $(".menulist dl");
		$menulistalldt = $(".menulist dl dt");
		$menulistalldd = $(".menulist dl dd");
		$menulistallddp = $(".menulist dl dd p");
		$menuvideolistlevel3 = $("#menuvideolist .level3");

	//清除所有样式
		function clearallclass(){
			$menuvideolistlevel3.removeClass("active");
			$menulistalldt.removeClass("active");
			$menulistallddp.removeClass("active");
		}
		
	//加载第一个
		var arrListlevel3index0;
		for(i=0;i<arrList.length;i++){
			if(arrList[i].level == "3"){
				arrListlevel3index0 = i;
				break;
			}
		}
		if(arrList[arrListlevel3index0].filetype == "v"){
			showvideo(arrList[arrListlevel3index0].filename,arrList[arrListlevel3index0].localpath);	
		}else{
			showswf(arrList[arrListlevel3index0].filename);	
		}
		$menuvideolistlevel3.eq(0).addClass("active");
		$menulistalldt.eq(0).addClass("active");

	//鼠标滑过下方栏目，显示隐藏二级
		$menulistalldl.hover(function(){
			$menulistalldd.hide();
			$(this).children().show();
		},function(){
			$menulistalldd.hide();
		});

	//点击其他栏目切换显示内容
		$menulistalldt.click(function(){
			var valuecz = $(this).siblings("dd").html();
			if(!valuecz){
				var down1 = $(this).parent().index();
				showswf(kcjsarrb[down1]);
				clearallclass();
				$(this).addClass("active");
			}else{
			
			}
		});
			
		$menulistalldd.children("p").click(function(){	
			clearallclass();
			$(this).parent().siblings().addClass("active");
			$(this).addClass("active");
			var down1 = $(this).parents("dl").index();
			var down2 = $(this).index()+1;
			var ifxz = $(this).html()
			if( ifxz.indexOf("下载")>=0){
				showdownload(kcjsarrb[down1] + down2)
			}else{
				showswf(kcjsarrb[down1] + down2);
			}
		});

	//点击第一个栏目切换显示内容
		$menuvideolistlevel3.click(function(){
			clearallclass();
			$(this).addClass("active");
			$(this).parents("dd").siblings("dt").addClass("active");
			var liindex = $(this).attr("liindex");
			var arrListindex = arrList[liindex]
			showvideo(arrListindex.filename,arrListindex.localpath)
			//如果是文本
			if(arrListindex.level == "3" && arrListindex.filetype == "t"){
				showswf(arrListindex.filename);
			}
		});

	//视频播放函数
		function showvideo(httpvid,localpath){
			if (bool>=0){
				vid = httpvid;
				var sPlayer = '<script src="https://p.bokecc.com/player?vid='+vid+'&siteid=039C1380CF417F50&autoStart=true&width=100%&height=100%&playerid=9223C66477962A2F&playertype=1" type="text/javascript"></script>'
				$("#cnt").html(sPlayer);
			}else{
				vid = localpath;
				var mp4path = "video/" + CourseCode + vid;
				var imgpath = "img/beforevideo";
				var mstr = "<div style='padding-left:19px;'><table width='729' height='432' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
				mstr = mstr + "<tr>";
				mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=729 height=432 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;type=http&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
				mstr = mstr + "  </tr>";
				mstr = mstr + "</table></div>";
				$("#cnt").html(mstr);
			}
			jsqplay(true);
		}
	
	//文档显示函数
		function showswf(tid){
			tpath = "swf/"+tid+".swf";
			var ptr = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width=100% height=100% id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width=100% height=100% wmode='transparent'></embed></object>";
			$("#cnt").html(ptr);
			jsqplay(true);
		}
	
	//下载函数
		function showdownload(tid){
			tpath = "download/"+tid+".zip";
			var dtr = "<table width='100%' height='100%' bgcolor='#ffffff'><tr><td valign='middle' align='center'><a href="+tpath+" target=_blank style='color:#000000; font-size:12px;'><img src=img/down.png width=180px height=180px style='margin-bottom:10px;'><br/>点击下载</a></td></tr></table>";
			$("#cnt").html(dtr);
			jsqplay(true);
		}

//---------------页面加载完成后计时器相关begin---------------
//获取url中参数
function getUrlParam(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return unescape(r[2]); return null; 
} 

var platformiframeurl;
platformiframeurl = getUrlParam('callParentIframeUrl');

//平台已传参,添加iframe嵌套父级页面,用于跨主域访问
if(platformiframeurl){	
	//向body创建div
	var yy_div=document.createElement("div");
	document.body.appendChild(yy_div);
	yy_div.id="yy_iframe";
	//添加iframe
	document.getElementById("yy_iframe").innerHTML='<iframe name="iframeRight" id="iframeRight" style="display:none;" src="'+ platformiframeurl +'"></iframe>'
}
//---------------页面加载完成后计时器相关end---------------	

//总结束	
});


//---------------计时器相关begin---------------
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
	jsqplay(true);
}

//暂停播放
function on_spark_player_pause(){
	jsqplay(false);
}

//恢复播放
function on_spark_player_resume(){
	jsqplay(true);
}

//结束播放
function on_spark_player_stop(){
	jsqplay(false);
}

//设置页面加载完成后是否开始计时
var videoifplay=true;

//计时器回调函数
function jsqplay(videoifplay){
	changeVideoFlag(videoifplay)
}

//与平台交互的函数
function changeVideoFlag(videoifplay) {
	var ifr = document.getElementById('iframeRight');
	if(ifr){
		//iframe嵌套添加成功
		var targetOrigin = '*';
		if(typeof(videoifplay)=="undefined"){
			//未设置videoifplay跳过不处理
		}else{
			//设置videoifplay执行
			var func = {name:"callParentFun",value:videoifplay};
			var str
			if(typeof(JSON)=="undefined"){
				//当浏览器不支持JSON时,如IE7,则使用此方法将JSON对象转化为字符串
				str = "'name':"+"'"+func.name+"','value':"+func.value
				str = "{" + str +"}";
			}else{
				//当浏览器支持JSON时,则使用此方法将JSON对象转化为字符串
				str = JSON.stringify(func);
			}
			ifr.contentWindow.postMessage(str, targetOrigin);
		}
	}
}
//---------------计时器相关end---------------




