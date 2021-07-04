import modelEnhance from '@/utils/modelEnhance';
import PageHelper from '@/utils/pageHelper';
import { getAll,delUser } from  '../service';
import { routerRedux } from 'dva/router';

export default modelEnhance({
  namespace: 'user',

  state: {
    pageData: PageHelper.create(),

  },
  subscriptions: {
  },
  effects: {
    *delete({ payload }, { call }) {
      console.log(11111)
      return yield call(delUser, payload);
    },
    *getall({ payload }, { call,put }) {
        const response = yield call(getAll, payload);
        yield put({type: 'setList',payload: PageHelper.responseFormat(response)});
    },
  },
  reducers: {
    setList(state, { payload }) {
      return {  
        ...state,
        pageData:payload
      };
    },
  },
});