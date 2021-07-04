import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/admin/attendance/list',
  title: '工时管理',
  component: dynamicWrapper(app, [import('../../model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
