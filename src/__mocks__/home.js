/**
 * 模拟图表数据
 */
export default ({ fetchMock, delay, mock, toSuccess, toError }) => {
  return {
    '/api/home/getList': options => {
      const body = JSON.parse(options.body);
      const currentPage = body.currentPage;
      const idbase = (currentPage - 1) * 10 + 1;
      return toSuccess(
        mock([
          {title:"title1"+idbase,image:"",description:""},
          {title:"title2"+idbase,image:"",description:""},
          {title:"title3"+idbase,image:"",description:""},
          {title:"title4"+idbase,image:"",description:""},
          {title:"title5"+idbase,image:"",description:""}
        ]),
        400
      );
    },
    '/api/home/getWeather':options => {
      return toSuccess(
        mock([{
          message:"success感谢又拍云(upyun.com)提供CDN赞助",
          status:200,
          "date":"20190829",
          "time":"2019-08-29 10:59:36",
          "cityInfo":{"city":"北京市","citykey":"101010100","parent":"北京","updateTime":"10:10"},
          "data":
          {
          "shidu":"30%","pm25":458.0,"pm10":17.0,"quality":"严重污染","wendu":"25","ganmao":"老年人病人应留在室内，停止体力消耗，一般人群避免户外活动",
          "forecast":[
              {"date":"29","high":"高温 30℃","low":"低温 20℃","ymd":"2019-08-29","week":"星期四","sunrise":"05:37","sunset":"18:53","aqi":21,"fx":"北风","fl":"3-4级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},
              {"date":"30","high":"高温 30℃","low":"低温 18℃","ymd":"2019-08-30","week":"星期五","sunrise":"05:38","sunset":"18:51","aqi":66,"fx":"北风","fl":"3-4级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},
              {"date":"31","high":"高温 31℃","low":"低温 19℃","ymd":"2019-08-31","week":"星期六","sunrise":"05:39","sunset":"18:50","aqi":72,"fx":"北风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},
              {"date":"01","high":"高温 33℃","low":"低温 20℃","ymd":"2019-09-01","week":"星期日","sunrise":"05:40","sunset":"18:48","aqi":69,"fx":"南风","fl":"3-4级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},
              {"date":"02","high":"高温 33℃","low":"低温 20℃","ymd":"2019-09-02","week":"星期一","sunrise":"05:41","sunset":"18:46","aqi":70,"fx":"西南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},
              {"date":"03","high":"高温 34℃","low":"低温 21℃","ymd":"2019-09-03","week":"星期二","sunrise":"05:42","sunset":"18:45","aqi":67,"fx":"西南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},
              {"date":"04","high":"高温 34℃","low":"低温 21℃","ymd":"2019-09-04","week":"星期三","sunrise":"05:43","sunset":"18:43","fx":"南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},
              {"date":"05","high":"高温 33℃","low":"低温 18℃","ymd":"2019-09-05","week":"星期四","sunrise":"05:44","sunset":"18:42","fx":"西南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},
              {"date":"06","high":"高温 33℃","low":"低温 18℃","ymd":"2019-09-06","week":"星期五","sunrise":"05:45","sunset":"18:40","fx":"西南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},
              {"date":"07","high":"高温 33℃","low":"低温 17℃","ymd":"2019-09-07","week":"星期六","sunrise":"05:46","sunset":"18:39","fx":"南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},
              {"date":"08","high":"高温 33℃","low":"低温 19℃","ymd":"2019-09-08","week":"星期日","sunrise":"05:47","sunset":"18:37","fx":"南风","fl":"<3级","type":"阴","notice":"不要被阴云遮挡住好心情"},
              {"date":"09","high":"高温 30℃","low":"低温 17℃","ymd":"2019-09-09","week":"星期一","sunrise":"05:48","sunset":"18:35","fx":"北风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},
              {"date":"10","high":"高温 25℃","low":"低温 14℃","ymd":"2019-09-10","week":"星期二","sunrise":"05:49","sunset":"18:34","fx":"北风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},
              {"date":"11","high":"高温 26℃","low":"低温 11℃","ymd":"2019-09-11","week":"星期三","sunrise":"05:49","sunset":"18:32","fx":"南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},
              {"date":"12","high":"高温 24℃","low":"低温 10℃","ymd":"2019-09-12","week":"星期四","sunrise":"05:50","sunset":"18:30","fx":"西南风","fl":"<3级","type":"阴","notice":"不要被阴云遮挡住好心情"}
            ],
            "yesterday":{"date":"28","high":"高温 31℃","low":"低温 20℃","ymd":"2019-08-28","week":"星期三","sunrise":"05:36","sunset":"18:54","aqi":24,"fx":"西北风","fl":"4-5级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"}
          }
        }
       ]),
        400
      );
    }
  };
};
