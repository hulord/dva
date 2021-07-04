import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/admin/attendance/review',
  title: '请假审核',
  component: dynamicWrapper(app, [import('../../model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
