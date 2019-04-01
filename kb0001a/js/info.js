// JavaScript Document
//课程代码：
var arrVidztjz=["43218E3C6855AB059C33DC5901307461","BDB621D5329973019C33DC5901307461"]
var CourseCode="kb0001a"
var VideoFolder="kbcourse"
//一级栏目名称：
var arrLeftMenu=["专题学习-ztjz","课程简介-kcjj","专家团队-zjtd","思考练习-sklx","拓展资源-tzzy"];
//一级栏目类型，视频栏目填video,文本栏目填swf
var arrLeftStype=["zlm","word","word","word","word"]

//依次为各个栏目的二级栏目名称数组
var arrLeftChildName1
var arrLeftChildName2
var arrLeftChildName3
var arrLeftChildName4
var arrLeftChildName5
var arrLeftChildName6
var arrLeftChildName7
var arrLeftChildName8

//三级栏目 
var arrztjzTrd=["video","word","swf"]
var arrhddhTrd=["video","word"]
var arralpxTrd=["video","word"]


//三级栏目中的视频、文本、ppt数量定义。如：hddh栏目中的视频数为2，则定义arrHddhVideoNum="2"
//专题讲座
var arrztjzvideoNum=2
var arrztjzwordNum=1
var arrztjzswfNum=1
//互动对话
var arrhddhvideoNum=1
var arrhddhwordNum=1
var arrhddhswfNum=1
//案例评析
var arralpxvideoNum=1
var arralpxwordNum=1
var arralpxswfNum=1

//如果有同个一级栏目下包含多种文件格式的二级栏目的情况，则填写下面内容。否则不用填写。格式：var arrLeftChildStype1=["swf","video"]
var arrLeftChildStype1
var arrLeftChildStype2
var arrLeftChildStype3
var arrLeftChildStype4
var arrLeftChildStype5
var arrLeftChildStype6
var arrLeftChildStype7
var arrLeftChildStype8