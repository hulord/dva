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
    *create({ payload }, { call }) {
      return yield call(create, payload);
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
    }
  },
});