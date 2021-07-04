import modelEnhance from '@/utils/modelEnhance';
import { create,getTags,  deleteImg, getAttendance, updateAttendance} from  '../service';

export default modelEnhance({
  namespace: 'applyCreate',

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
        return yield call(updateAttendance, payload);
    },
    *getone({ payload }, { call, put }) {
       const response = yield call(getAttendance, payload);
       if(response.status == 0){
          yield  put({type:'setInfo',payload:response.data})
       }
       return response;
    },
    *getTags({ payload },{ call,put }){
      const response = yield call(getTags, payload);
      yield put({type: 'setTags',payload: response});
    },
    *deleteImg({ payload },{ call }){
      const response = yield call(deleteImg, payload);
      return response;
    }
  },
  reducers: {
    setTags(state,{ payload }){
        return {
          ...state,
          defaultTags:payload.data
        }
    },
    setInfo(state,{ payload }){
      return {
        ...state,
        detail:payload
      }
    }
  },
});