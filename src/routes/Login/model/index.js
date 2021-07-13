import { routerRedux } from 'dva/router';
import { login } from '../service';
import $$ from 'cmn-utils';
import cookie from 'react-cookies'
import localStorage from "localStorage";

var jwt = require("jsonwebtoken");
export default {
  namespace: 'login',

  state: {
    loggedIn: false,
    message: '',
    user: {},
  },

  subscriptions: {
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { status, message, data } = yield call(login, payload);
        if (status==0) {
          yield put({
            type: 'loginSuccess',
            payload: { data }
          });
          yield put(routerRedux.replace('/admin/dashboard'));
      } else {
          yield put({
              type: 'loginError',
              payload: { message }
          });
      }
    },
    *logout(_, { put }) {
      //$$.removeStore("Authorization");
      localStorage.removeItem("Authorization")
    },
    *islogin(){
      const token = localStorage.getItem("Authorization")
      //const token = $$.getStore("Authorization");
      if(token){
        //$$.removeStore("Authorization");
        localStorage.removeItem("Authorization")
      }
    }
  },
  reducers: {
    loginSuccess(state, { payload }) {
          const decodejwt =  jwt.decode(payload.data);
          localStorage.setItem('user',  decodejwt['username'])
          localStorage.setItem('role',  decodejwt['Role'])
          localStorage.setItem('Authorization', payload.data)
          // $$.setStore('user', {"username":decodejwt['username'],"role":decodejwt["Role"]});
          // $$.setStore('Authorization', payload.data);
          return {
            ...state,
            loggedIn: true
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
