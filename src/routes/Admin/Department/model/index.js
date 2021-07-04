import modelEnhance from '@/utils/modelEnhance';
import PageHelper from '@/utils/pageHelper';
import { getAll, delDepartment } from  '../service';
import { routerRedux } from 'dva/router';

export default modelEnhance({
  namespace: 'department',

  state: {
    pageData: PageHelper.create(),

  },
  subscriptions: {
  },
  effects: {
    *delete({ payload }, { call }) {
      return yield call(delDepartment, payload);
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