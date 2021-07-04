export const getColumn = (array,name) => {
  return array.map(function(el) {
     if (el.hasOwnProperty(name)) return el[name];
  }).filter(function(el) { return typeof el != 'undefined'; }); 
};

/**
 * getPath
 * @param {string} path browser url path
 * @param {int} ask  1: use path replace full url 2: add path for url
 */
export const getPath = (path = "",ask = 0) => {
  if( ask ==1 ){
      path = window.location.pathname+path;
  }
  return path;
};

/**
 * toJSON() 方法可以将 Date 对象转换为字符串，并格式化为 JSON 数据格式。
 * 格式化unix时间
 */
export const rTime = ( date ,format) =>{
    var json_date = new Date(date).toJSON();
    var rtime = new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    if(format == "Y-m-d"){
        rtime = rtime.substr(0,10)
    }
    return rtime;
}

/**
 * 获取url最后一个/的参数 /a/b/3213
 *
 */
export const getLastParams = ( url ) =>{
    if( url=="" ){
        return "";
    }
    var index  = url.lastIndexOf("\/");
    var id = url.substring(index + 1, url.length)
    if (isNaN(parseInt(id)) == false){
        return id
    }
    return ""
}

/**
 * 获取2个日期之间的所有日期
 * @param {*} starDay 
 * @param {*} endDay 
 * @returns 
 */
export const getDayAll = (starDay, endDay) =>{
        
    　　 var arr = [];
        var dates = [];
    
        // 设置两个日期UTC时间
    　　　var db = new Date(starDay);
    　　　var de = new Date(endDay);
    
        // 获取两个日期GTM时间
    　　　var s = db.getTime() - 24 * 60 * 60 * 1000;
    　　　var d = de.getTime() - 24 * 60 * 60 * 1000;
    
        // 获取到两个日期之间的每一天的毫秒数
    　　　for (var i = s; i <= d;) {
    　　　　　　i = i + 24 * 60 * 60 * 1000;
            arr.push(parseInt(i))
    　　　}
        
        // 获取每一天的时间  YY-MM-DD
        for( var j in arr ){
            var time = new Date(arr[j]);
            var year = time.getFullYear(time);
            var mouth = (time.getMonth() + 1)>=10?(time.getMonth() + 1):('0'+(time.getMonth() + 1));
            var day = time.getDate()>=10?time.getDate():('0'+time.getDate());
            var YYMMDD = day;
            dates.push(YYMMDD)
        }
        
        return dates
    }




