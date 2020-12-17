import modelEnhance from '@/utils/modelEnhance';
import { create,getTags } from  '../../../service';

export default modelEnhance({
  namespace: 'create',

  state: {
    defaultTags:[]
  },
  //页面监听
  subscriptions: {},
  effects: {
    *create({ payload }, { call, put }) {
      const response = yield call(create, payload);
      yield put({
        type: 'create',
        payload: response,
      });
    },
    *getTags({ payload },{ call,put }){
      const response = yield call(getTags, payload);
      yield put({type: 'setTags',payload: response});
    }
  },
  reducers: {
    create(state, { payload }) {
      return {
        ...state,
        status: payload.status,
      };
    },
    setTags(state,{ payload }){
        return {
          ...state,
          defaultTags:payload.data
        }
    }
  },
});