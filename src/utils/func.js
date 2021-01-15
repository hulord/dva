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


