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

