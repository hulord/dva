import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/admin/user/list',
  title: '员工管理',
  component: dynamicWrapper(app, [import('../../model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
