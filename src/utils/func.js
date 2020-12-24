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
export const rTime = ( date ) =>{
    var json_date = new Date(date).toJSON();
    return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}

