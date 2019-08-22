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

      // const body = JSON.parse(options.body);
      // console.log(body);
      // const currentPage = body.currentPage;
      // const idbase = (currentPage - 1) * 10 + 1;
      // return toSuccess(
      //   mock({
      //     'currentPage': currentPage,
      //     'totalResult': 100,
      //     'totalPage': 10,
      //     "data":[
      //       {title:"title1"+idbase,image:"",description:""},
      //       {title:"title2"+idbase,image:"",description:""},
      //       {title:"title3"+idbase,image:"",description:""},
      //       {title:"title4"+idbase,image:"",description:""},
      //       {title:"title5"+idbase,image:"",description:""}
      //     ]
      //   }),
      //   400
      // );
    },
  };
};
