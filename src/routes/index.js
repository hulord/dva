import { createRoutes } from '@/utils/core';
import BasicLayout from '@/layouts/BasicLayout';
import IndexLayout from '@/layouts/IndexLayout';
import UserLayout from '@/layouts/UserLayout';
import Page403 from './Pages/403';
import NotFound from './Pages/404';
import Page500 from './Pages/500';
import ScreenLock from './Widgets/ScreenLock';
import Coming from './Widgets/Coming';
import Gallery from './Widgets/Gallery';
import Result from './Widgets/Result';
import LevelRoute from './Widgets/LevelRoute';
import Login from './Login';
import Register from './Register';
import Dashboard from './Admin/Dashboard';
import Blank from './Blank';
import Toolbar from './Widgets/Toolbar';
import BaseComponent from './Widgets/BaseComponent';

import Column from './Widgets/Column';
import TransferTree from './Widgets/TransferTree';
import SearchBar from './Widgets/SearchBar';
import DataTable from './Widgets/DataTable';
import Form from './Widgets/Form';
import EC from './Widgets/Charts/EC';
import G2 from './Widgets/Charts/G2';
import Print from './Widgets/Print';
import Banner from './Widgets/Banner';
import Icon from './UI/Icon';
import Mask from './UI/Mask';
import Editor from './UI/Editor';
import CSSAnimate from './UI/CSSAnimate';
import Alerts from './UI/Alerts';
import Button from './UI/Button';
import CRUD from './Business/CRUD';


/**前台 */
import Home from './Index/Home';
import Artical from './Index/Artical';

/**后台组件 */
import Adminartical from './Admin/Artical/view/list';
import Createartical from './Admin/Artical/view/create';
import DepartmentList from './Admin/Department/view/list';
import UserList from './Admin/User/view/list';
import AttendanceList from './Admin/Attendance/view/list';
import ApplyReview from './Admin/Attendance/view/review';
import ApplyCreate from './Admin/Attendance/view/create';


/**
 *     主路由配置
 * 
 * path 路由地址
 * component 组件
 * indexRoute 默认显示路由
 * childRoutes 所有子路由
 * NotFound 路由要放到最下面，当所有路由当没匹配到时会进入这个页面
 */
const routesConfig = app => [
  {
    path: '/sign',
    title: '登录',
    indexRoute: '/login',
    component: UserLayout,
    childRoutes: [
      Login(app),
      Register(app),
      NotFound()
    ]
  },
  {
    path: '/admin',
    title: '系统中心',
    component: BasicLayout,
    indexRoute: '/department/list',
    childRoutes: [
      Adminartical(app),
      Dashboard(app),
      //文章管理
      Createartical(app),
      //部门管理
      DepartmentList(app),
      //用户管理
      UserList(app),
      //考勤管理
      AttendanceList(app),
      //请假审核
      ApplyReview(app),
      //请假工单创建
      ApplyCreate(app),
      Blank(app),
      Toolbar(app),
      Column(),
      SearchBar(),
      EC(app),
      G2(app),
      Icon(),
      Mask(),
      Editor(),
      CSSAnimate(),
      Alerts(),
      Button(),
      DataTable(app),
      Form(app),
      TransferTree(app),
      BaseComponent(),
      CRUD(app),
      Coming(),
      ScreenLock(),
      Gallery(),
      Result(),
      Page403(),
      Page500(),
      Print(),
      Banner(app),
      LevelRoute(app),
      NotFound()
    ]
  }
];

export default app => createRoutes(app, routesConfig);
