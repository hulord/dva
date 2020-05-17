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