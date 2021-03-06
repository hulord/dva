import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Layout,ConfigProvider  } from 'antd';
import { Switch, routerRedux } from 'dva/router';
import NavBar2 from 'components/NavBar2';
import NavBar from 'components/NavBar';
import { LeftSideBar, RightSideBar } from 'components/SideBar';
import TopBar from 'components/TopBar';
import SkinToolbox from 'components/SkinToolbox';
import pathToRegexp from 'path-to-regexp';
import { enquireIsMobile } from '@/utils/enquireScreen';
import TabsLayout from './TabsLayout';
import './styles/basic.less';
import './styles/global.less';
import $$ from 'cmn-utils';
import cx from 'classnames';
const { Content, Header } = Layout;

/**
 * 基本部局
 * 可设置多种皮肤 theme: [light, grey, primary, info, warning, danger, alert, system, success, dark]
 * 可设置多种布局 [header(固定头), sidebar(固定边栏), breadcrumb(固定面包蟹), tabLayout(标签布局)]
 * 头部需要可以切换（主页头部|其他页面头部）
 */
@connect(({ global }) => ({ global }))
export default class IndexLayout extends PureComponent {
  constructor(props) {
    super(props);
    const user = $$.getStore('user', []);
    const theme = $$.getStore('theme', {
      leftSide: 'darkgrey', // 左边
      navbar: 'light', // 顶部
    });

    if (!theme.layout) {
      theme.layout = [
        'fixedHeader',
        'fixedSidebar',
        'fixedBreadcrumbs'
      ];
    }

    this.state = {
      collapsedLeftSide: false, // 左边栏开关控制
      leftCollapsedWidth: 60, // 左边栏宽度
      expandTopBar: false, // 头部多功能区开合
      showSidebarHeader: false, // 左边栏头部开关
      collapsedRightSide: true, // 右边栏开关
      theme, // 皮肤设置
      user,
      currentMenu: {},
      isMobile: false,
      city:["福建省","福州市"],
    };
    props.dispatch({
      type: 'global/getMenu'
    });
    this.onChangeCity()
  }

  componentDidMount() {
    this.unregisterEnquire = enquireIsMobile(ismobile => {
      const { isMobile } = this.state;
      if (isMobile !== ismobile) {
        this.setState({
          isMobile: ismobile
        });
      }
    });
  }
  // componentWillMount() {
  //   // 检查有户是否登录
  //   const user = $$.getStore('user');
  //   if (!user) {
  //     this.props.dispatch(routerRedux.replace('/sign/login'));
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.pathname !== this.props.location.pathname ||
      nextProps.global.flatMenu !== this.props.global.flatMenu
    ) {
      this.setState({
        currentMenu: this.getCurrentMenu(nextProps) || {}
      });
    }
  }

  componentWillUnmount() {
    // 清理监听
    this.unregisterEnquire();

  }
  //获取默认城市
  getDefaultCity(){

  }
  getCurrentMenu(props) {
    const {
      location: { pathname },
      global
    } = props || this.props;
    const menu = this.getMeunMatchKeys(global.flatMenu, pathname)[0];
    return menu;
  }

  getMeunMatchKeys = (flatMenu, path) => {
    return flatMenu.filter(item => {
      return pathToRegexp(item.path).test(path);
    });
  };

  /**
   * 顶部左侧菜单图标收缩控制
   */
  onCollapseLeftSide = _ => {
    const collapsedLeftSide =
      this.state.leftCollapsedWidth === 0
        ? true
        : !this.state.collapsedLeftSide;
    const collapsedRightSide =
      this.state.collapsedRightSide || !collapsedLeftSide;

    this.setState({
      collapsedLeftSide,
      collapsedRightSide,
      leftCollapsedWidth: 120,
    });
  };

  /**
   * 完全关闭左边栏，即宽为0
   */
  onCollapseLeftSideAll = _ => {
    this.setState({
      collapsedLeftSide: true,
      leftCollapsedWidth: 120
    });
  };

  /**
   * 展开面包屑所在条中的多功能区
   */
  onExpandTopBar = _ => {
    this.setState({
      expandTopBar: true
    });
  };

  /**
   * 与上面相反
   */
  onCollapseTopBar = _ => {
    this.setState({
      expandTopBar: false
    });
  };

  /**
   * 切换左边栏中头部的开合
   */
  toggleSidebarHeader = _ => {
    this.setState({
      showSidebarHeader: !this.state.showSidebarHeader
    });
  };

  /**
   * 切换右边栏
   */
  toggleRightSide = _ => {
    const {collapsedLeftSide, collapsedRightSide} = this.state;
    this.setState({
      collapsedLeftSide: collapsedRightSide ? true :collapsedLeftSide,
      collapsedRightSide: !collapsedRightSide
    });
  };

  onChangeTheme = theme => {
    $$.setStore('theme', theme);
    this.setState({
      theme
    });
  };

  //选取城市名称
  onChangeCity = (value, selectedOptions) => {
    var cityCode
    if(value){
       let cityIndex = value.length;
       cityCode = value[cityIndex-1];
      this.setState({
        city: selectedOptions.map(o => o.label).join(', '),
      });
    }else{
        cityCode = 101230101;
    }
    this.props.dispatch({
      type: 'global/getWeather',
      payload:cityCode
    })


  };
  render() {
    const {
      collapsedLeftSide,
      leftCollapsedWidth,
      expandTopBar,
      showSidebarHeader,
      collapsedRightSide,
      theme,
      user,
      currentMenu,
      isMobile,
      city
    } = this.state;
    const { routerData, location, global  } = this.props;
    const { menu, flatMenu,weather,is_index } = global;
    const { childRoutes } = routerData;
    const classnames = cx('full-layout', {
      "background-pink":true,
      fixed: theme.layout && theme.layout.indexOf('fixedSidebar') !== -1,
      'fixed-header':
        theme.layout && theme.layout.indexOf('fixedHeader') !== -1,
      'fixed-breadcrumbs':
        theme.layout && theme.layout.indexOf('fixedBreadcrumbs') !== -1,
      'hided-breadcrumbs':
        theme.layout && theme.layout.indexOf('hidedBreadcrumbs') !== -1
    });
    const is_DIV = true;
    const content_layout = cx("router-page",{
      "carousel-index-content" :is_DIV,
    })
    return (
      <Layout className={classnames}  style={{position:"unset!important"}}>

        <Layout className="container">
            <NavBar2
              collapsed={collapsedLeftSide}
              onCollapseLeftSide={this.onCollapseLeftSide}
              onExpandTopBar={this.onExpandTopBar}
              toggleSidebarHeader={this.toggleSidebarHeader}
              onChangeCity = {this.onChangeCity}
              city = {city}
              theme={theme.navbar}
              user={user}
              isMobile={isMobile}
              weather = {weather}
              is_index = {is_index}
            />
        <Layout >
          <Content  style={{overflowX:"unset"}}>
            {theme.layout.indexOf('tabLayout') >= 0 ? (
              <TabsLayout childRoutes={childRoutes} location={location} />
            ) : (
                  <Switch>{childRoutes}</Switch>
            )}
          </Content>
          <RightSideBar
            collapsed={collapsedRightSide}
            isMobile={isMobile}
            onCollapse={this.toggleRightSide}
          />
        </Layout>

        </Layout>
      </Layout>
    );
  }
}
