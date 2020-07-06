import modelEnhance from '@/utils/modelEnhance';
import { articalDetail } from '../service';

export default modelEnhance({
  namespace: 'artical',
  state: {
    bar1: [],
    bar2: [],
    vhistory: [],
    OpenCatalogue:false,
    detail:{}
  },

  subscriptions: {
    setup({ history, dispatch }) {
       history.listen(( location ) => {
        if(location.pathname!="/"){
           dispatch({
              type: 'addHistory',
              payload: location.pathname
           })
        };
        dispatch({
          type: 'articalDetail',
          payload: location.pathname
       })
      });
    }
  },
  effects: {
    *articalDetail({ payload }, { call, put }){
      const response = yield call(articalDetail, payload);
      const artical = "";
      if(response.status==0){
        var content = response.data.content;
        var html = "";
        const h = content.match(/<h([1-6]).*?>(.*?)<\/h[1-6]>/g);   
        if(h && h.length>0){
           h.forEach((item,i)=>{
              let h_content = item.replace(/<[^>]+>/g,"");
              console.log(h_content);
              const k = i*1+1*1;
              var reg = new RegExp(item,"g"); //创建正则RegExp对象  
              if(item.indexOf("h3") != -1){
                content = content.replace(reg,"<h3 id='"+k+"' >"+h_content+"</h3>")
                html += "<li name=\""+k+"\" ><a href=\"#"+k+"\">"+h_content+"</a></li>";
              }else if(item.indexOf("h4") != -1){
                 content = content.replace(reg,"<h4 id='"+k+"'>"+h_content+"</h4>")
                 html += "<li class=\"sub\" name=\""+k+"\"><a href=\"#"+k+"\">"+h_content+"</a></li>"
              }
          })
        }
        response.data.h = h;
        response.data.content = content;
        response.data.catalogue = html;
      }
      yield put({
        type: 'setDetail',
        payload: response,
      });
    },
  },
  reducers:{
    addHistory(state,{ payload }){
      return {...state,vhistory:[payload]}
    },
    OpenCatalogue(state,{ payload }){
      return {...state,OpenCatalogue:ture}
    },
    setDetail(state,{ payload }){
      return {...state,detail:payload.data}
    }
  },
});