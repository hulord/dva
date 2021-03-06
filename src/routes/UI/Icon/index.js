import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/admin/icons',
  title: '图标',
  component: dynamicWrapper(app, [], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
