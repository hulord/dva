import modelEnhance from '@/utils/modelEnhance';
import { getList,getWeather, getArtical } from '../service';
export default modelEnhance({
  namespace: 'home',
  state: {
    bar1: [],
    bar2: [],
    vhistory: [],
    listData:[],
    weather:[],
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
    *getArtical({ payload }, { call, put }){
      const response = yield call(getArtical, payload);
      yield put({
        type: 'setArtical',
        payload: response,
      });
    },
  },
  reducers:{
    addHistory(state,{ payload }){
      return {...state,vhistory:[payload]}
    },
    setArtical(state,{ payload }){
      return {
        ...state,
        listData:payload.data.list,
        page:payload.data.page,
        total:payload.data.total
      }
    },
  },
});