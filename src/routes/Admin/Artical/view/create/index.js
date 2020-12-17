import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/admin/createartical',
  title: '文章管理',
  component: dynamicWrapper(app, [import('../../view/create/model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
