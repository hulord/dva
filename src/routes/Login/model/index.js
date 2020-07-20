import { routerRedux } from 'dva/router';
import { login } from '../service';
import $$ from 'cmn-utils';
var jwt = require("jsonwebtoken");
export default {
  namespace: 'login',

  state: {
    loggedIn: false,
    message: '',
    user: {},
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname.indexOf('/sign/login') !== -1) {
          $$.removeStore('user');
        }
      });
    }
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { status, message, data } = yield call(login, payload);
      if (status==0) {
          const decodjwt =  jwt.decode(data);
          yield put(routerRedux.replace('/admin/dashboard'));
          $$.setStore('user', {"username":decodjwt['username'],"role":decodjwt["Role"]});
          $$.setStore('Authorization', data);
      } else {
        yield put({
          type: 'loginError',
          payload: { message }
        });
      }
    },
    *logout(_, { put }) {
      $$.removeStore("Authorization");
    }
  },

  reducers: {
    loginSuccess(state, { payload }) {
      return {
        ...state,
        loggedIn: true,
        message: '',
        user: payload
      };
    },
    loginError(state, { payload }) {
      return {
        ...state,
        loggedIn: false,
        message: payload.message
      };
    },
  }
};
