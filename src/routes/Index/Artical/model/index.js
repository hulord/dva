import modelEnhance from '@/utils/modelEnhance';

export default modelEnhance({
  namespace: 'artical',
  state: {
    bar1: [],
    bar2: [],
    vhistory: []
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if(pathname!="/"){
           dispatch({
             type: 'addHistory',
             payload: pathname
           })
        };
        if (pathname.indexOf('/dashboard') !== -1) {
          dispatch({
            type: '@request',
            afterResponse: resp => resp.data,
            payload: {
              valueField: 'bar1',
              url: '/charts/bar1',
            }
          });
          dispatch({
            type: '@request',
            afterResponse: resp => resp.data,
            payload: {
              valueField: 'bar2',
              url: '/charts/bar2',
            }
          });
        }
      });
    }
  },
  effects: {

  },
  reducers:{
    addHistory(state,{ payload }){
      return {...state,vhistory:[payload]}
    }
  },
});