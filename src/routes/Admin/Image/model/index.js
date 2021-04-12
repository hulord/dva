import modelEnhance from '@/utils/modelEnhance';
import PageHelper from '@/utils/pageHelper';
import { create,delArtical } from  '../service';
import { routerRedux } from 'dva/router';

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
    *delete({ payload }, { call }) {
      return yield call(delArtical, payload);
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