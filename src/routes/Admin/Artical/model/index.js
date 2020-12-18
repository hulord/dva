import modelEnhance from '@/utils/modelEnhance';
import PageHelper from '@/utils/pageHelper';
import { create,delArtical } from  '../service';

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
    *delArtical({ payload }, { call, put }) {
      const response = yield call(delArtical, payload);
      //删除成功
      if( response.status == 0 ){
      }
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