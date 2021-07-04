import modelEnhance from '@/utils/modelEnhance';
import PageHelper from '@/utils/pageHelper';
import { getAll, delAttendance, getApplyList } from  '../service';
import { routerRedux } from 'dva/router';

export default modelEnhance({
  namespace: 'attendance',

  state: {
    pageData: PageHelper.create(),

  },
  subscriptions: {
  },
  effects: {
    *delete({ payload }, { call }) {
      return yield call(delAttendance, payload);
    },
    *getall({ payload }, { call,put }) {
        const response = yield call(getAll, payload);
        yield put({type: 'setList',payload: PageHelper.responseFormat(response)});
    },
    *getApplyList({ payload }, { call,put }) {
      const response = yield call(getApplyList, payload);
      yield put({type: 'setList',payload: PageHelper.responseFormat(response)});
    }
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