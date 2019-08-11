import modelEnhance from '@/utils/modelEnhance';

export default modelEnhance({
  namespace: 'home',
  state: {
    bar1: [],
    bar2: [],
    test: []
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if(pathname!="/"){
            
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
  
});