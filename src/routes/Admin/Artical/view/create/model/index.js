import modelEnhance from '@/utils/modelEnhance';
import { create,getTags, updateArtical, getArtical } from  '../../../service';

export default modelEnhance({
  namespace: 'create',

  state: {
      defaultTags:[]
  },
  //页面监听
  subscriptions: {},
  effects: {
    *create({ payload }, { call }) {
      return yield call(create, payload);
    },
      *update({ payload }, { call }) {
          return yield call(updateArtical, payload);
      },
    *getone({ payload }, { call, put }) {
       const response = yield call(getArtical, payload);
       if(response.status == 0){
          yield  put({type:'setArticalInfo',payload:response.data})
       }
       return response;
    },
    *getTags({ payload },{ call,put }){
      const response = yield call(getTags, payload);
      yield put({type: 'setTags',payload: response});
    }
  },
  reducers: {
    setTags(state,{ payload }){
        return {
          ...state,
          defaultTags:payload.data
        }
    },
    setArticalInfo(state,{ payload }){
      return {
        ...state,
        articalInfo:payload
      }
    }
  },
});