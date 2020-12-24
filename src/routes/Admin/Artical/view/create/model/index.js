import modelEnhance from '@/utils/modelEnhance';
import { create,getTags, editArtical } from  '../../../service';

export default modelEnhance({
  namespace: 'create',

  state: {
      defaultTags:[]
  },
  //页面监听
  subscriptions: {
    setup({ history, dispatch }) {
        return history.listen(({ pathname }) => {
            if(history.location.pathname == "/admin/artical_operate" && history.location.id ){
                dispatch({
                    type: 'edit',
                    payload: {id:history.location.id}
                })
            };
        });
    }
  },
  effects: {
    *create({ payload }, { call }) {
      return yield call(create, payload);
    },
      *edit({ payload }, { call }) {
        console.log(1231);
          return yield call(editArtical, payload);
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