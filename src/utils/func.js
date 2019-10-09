const getColumn = (array,name) => {
  return array.map(function(el) {
     if (el.hasOwnProperty(name)) return el[name];
  }).filter(function(el) { return typeof el != 'undefined'; }); 
};

export default {
    "getColumn": getColumn,
  }