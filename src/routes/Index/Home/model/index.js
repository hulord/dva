import modelEnhance from '@/utils/modelEnhance';
import { getList,getWeather } from '../service';
export default modelEnhance({
  namespace: 'home',
  state: {
    bar1: [],
    bar2: [],
    vhistory: [],
    listData:[],
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if(pathname!="/"){
           dispatch({
             type: 'addHistory',
             payload: pathname
           })
        };

      });
    }
  },
  effects: {
    *getList({ payload }, { call, put }){
      const response = yield call(getList, payload);
      yield put({
        type: 'getList2',
        payload: response,
      });
    },
    *getWeather({payload},{call,put}){
      const response = yield call(getWeather,payload);
      console.log(response);
      yield put({
        type:'getWeather',
        payload:response
      })
    }
  },
  reducers:{
    addHistory(state,{ payload }){
      return {...state,vhistory:[payload]}
    },
    getList2(state,{ payload }){
      return {...state,listData:payload.data}
    } 
  },
});