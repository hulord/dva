import modelEnhance from '@/utils/modelEnhance';
import PageHelper from '@/utils/pageHelper';

export default modelEnhance({
  namespace: 'artical',

  state: {
    pageData: PageHelper.create(),
    pageDataSort: PageHelper.create(),
  },

  subscriptions: {
    // setup({ history, dispatch }) {
    //   return history.listen(({ pathname }) => {
    //     if (pathname.indexOf('/dashboard') !== -1) {
    //       dispatch({
    //         type: '@request',
    //         afterResponse: resp => resp.data,
    //         payload: {
    //           valueField: 'bar1',
    //           url: '/charts/bar1',
    //         }
    //       });
    //       dispatch({
    //         type: '@request',
    //         afterResponse: resp => resp.data,
    //         payload: {
    //           valueField: 'bar2',
    //           url: '/charts/bar2',
    //         }
    //       });
    //     }
    //   });
    // }
  },
});