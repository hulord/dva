import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/admin/department/list',
  title: '部门管理',
  component: dynamicWrapper(app, [import('../../model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
