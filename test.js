alert("連結外部跳出來就成功了");

// 抓年月日
var date=new Date();
var month=date.getMonth();
var year=date.getFullYear();
var day=date.getDate();
var dayName=date.toLocaleDateString(navigator.language,{weekday:'long'})
// navigator.language文字轉換 weekday每天
var monthName=date.toLocaleDateString(navigator.language,{month:'long'})

// 英文轉中文


if (dayName =="monday"){
    C_dayNane="星期一";
}else if (dayName=="Tuesday"){
    C_dayNane="星期二";
}else if (dayName =="Wednseday"){
    C_dayNane="星期三";
}else if (dayName=="Tursday"){
    C_dayNane="星期四";
}else if (dayName =="Friday"){
    C_dayNane="星期五";
}else if (dayName=="Saturday"){
    C_dayNane="星期六";
}else {
    C_dayNane="星期二";
}
