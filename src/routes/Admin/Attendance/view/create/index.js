import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
    path: '/admin/Attendance/create',
    title: '请假申请',
    component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
