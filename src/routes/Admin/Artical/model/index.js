import modelEnhance from '@/utils/modelEnhance';
import PageHelper from '@/utils/pageHelper';
import { create } from  '../service';

export default modelEnhance({
  namespace: 'artical',

  state: {
    pageData: PageHelper.create(),
    pageDataSort: PageHelper.create(),
    dataList: {
      list: []
    },
  },

  subscriptions: {

  },
  effects: {
    *create({ payload }, { call, put }) {
      const response = yield call(create, payload);
      yield put({
        type: 'create',
        payload: response,
      });
    },
  },
  reducers: {
    create(state, { payload }) {
      return {
        ...state,
        status: payload.status,
      };
    },
  },
});