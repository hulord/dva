import modelEnhance from '@/utils/modelEnhance';
import { getWeather, getArtical ,getTopAndNewList } from '../service';
export default modelEnhance({
  namespace: 'home',
  state: {
    bar1: [],
    bar2: [],
    vhistory: [],
    TopList:[],
    NewList:[],
    listData:[],
    weather:[],
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if(pathname.indexOf("artical")!=-1){
          if(pathname!="/"){
            dispatch({
              type: 'addHistory',
              payload: pathname
            })
          };
        }
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
    *getTopAndNewList({ payload },{ call,put }){
      const  { status, data, message} = yield  call(getTopAndNewList, payload);
      if( status == 0 ) {
        yield  put({
          type: 'setTopAndNew',
          payload: data
        })
      }
    }
  },
  reducers:{
    addHistory(state,{ payload }){
      let historyKey =  state.vhistory.indexOf(payload)
      if( historyKey==-1){
        state.vhistory.push(payload)
        if(state.vhistory.length > 5){
          state.vhistory.splice(5,1)
        }
      }else{
        console.log(historyKey)
        state.vhistory.splice(0,0,payload)
        state.vhistory.splice(historyKey,1)
      }
      return state
    },
    setTopAndNew( state, { payload }){
      return {
        ...state,
        NewList:payload.NewList,
        TopList:payload.TopList,
      }
    },
    setArtical(state,{ payload }){
      return {
        ...state,
        listData:payload.data.dataList,
        page:payload.data.currentPage+1,
        total:payload.data.totalResult
      }
    },
  },
});