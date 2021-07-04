import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/admin/image',
  title: '图片管理',
  component: dynamicWrapper(app, [import('../../model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
