import React, { PureComponent } from 'react';

import { Popover, Badge, Avatar,Carousel,Layout,Cascader,Icon, Col } from 'antd';
import { Link } from 'dva/router';
import cx from 'classnames';
import './style/index.less';
import logoImg from 'assets/images/logo.png';
import weatherImg from 'assets/images/weather_sun.png';
import SearchBox from './SearchBox';
import Header from 'antd/lib/calendar/Header';
import citys from '@/utils/citys.js';
import G2 from 'components/Charts/G2';
import DataSet from '@antv/data-set';
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label, View, Guide, Shape, Facet, Util } = G2;
const { Text } = Guide;
const { DataView } = DataSet;
const data = [
  {
    question: "问题 1",
    percent: 0.7
  },
  {
    question: "问题 2",
    percent: 0.6
  },
  {
    question: "问题 3",
    percent: 0.8
  }
];

const cols = {
  percent: {
    min: 0,
    max: 1
  }
};

const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'fold',
  fields: ['a', 'b'], // 展开字段集
  key: 'Radialbar', // key字段
  value: 'Radialbar' // value字段
});

/**
 * 其本本局头部区域
 */
class NavBar extends PureComponent {
   state = {
    openSearchBox: false,
    citys:citys,
  };

  static defaultProps = {
    fixed: true,
    theme: '', //'bg-dark',
  };
  
  toggleFullScreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  onCloseSearchBox = () => {
    this.setState({
      openSearchBox: false
    });
  };

  onOpenSearchBox = () => {
    this.setState({
      openSearchBox: true
    });
  };



  render() {
    const { openSearchBox,citys } = this.state;
    
    const {
      fixed,
      theme,
      onCollapseLeftSide,
      collapsed,
      onExpandTopBar,
      toggleSidebarHeader,
      user,
      onChangeCity,
      isMobile,
      city,
      weather
    } = this.props;
    const classnames = cx('navbar','border0',{
      'is-index':true,
      'navbar-fixed-top': !!fixed,
      'navbar-sm': isMobile ? true : collapsed,
      ['bg-' + theme]: !!theme
    });

    return (
      <header className={classnames}>
        {true? (
        <div>
          <Layout className="absHeader position-abs3 display-block margin-left-80">
              <div className="navbar-branding">
                <Link className="space0 navbar-brand" to="/">
                  <img src={logoImg} alt="logo" />
                  <b>LANIF</b>
                  Admin
                </Link>
                <span className="toggle_sidemenu_l" onClick={onCollapseLeftSide}>
                  <Icon type="lines" />
                </span>
              </div>
              <ul className="nav navbar-nav navbar-right clearfix">
                {collapsed || isMobile ? null : (
                  <li>
                    <a className="sidebar-menu-toggle" onClick={toggleSidebarHeader}>
                      <Icon type="ruby" />
                    </a>
                  </li>
                )}
                <li>
                  <a onClick={onExpandTopBar}>
                    <Icon type="wand" />
                  </a>
                </li>
                {isMobile ? (
                  <li className="mini-search" onClick={this.onOpenSearchBox}>
                    <a>
                      <Icon type="search" antd />
                    </a>
                  </li>
                ) : (
                  <li onClick={this.toggleFullScreen}>
                    <a className="request-fullscreen">
                      <Icon type="screen-full" />
                    </a>
                  </li>
                )}
              </ul>
          </Layout>
          <div style={{width:"70%",float:"left"}}>
            <Carousel autoplay  dotPosition="bottom"> 
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
          </div>
          <Layout className="weather-box" style={{"background":"rgb(250, 203, 185,0.5)"}}>
              <div className="weather-header">
              <Icon type="appstore" theme="twoTone"  style={{ fontSize: '16px', color: '#08c' }}/>
              <span className="h1">{city}</span>
                <Cascader options={citys} onChange={onChangeCity}>
                    <a  href="#">{city ? null : "请选择城市..."}<Icon type="environment" theme="twoTone" /></a>
                </Cascader>
              </div> 
              <div className="weather-content">
                  <Col span={24} className="weather-data">
                      <Col span={8} className="weather-today">
                            { weather ? (
                              <div className="dayWeather">
                                  <img src={weatherImg} alt="logo" />
                                  <span className="temperature">24°</span>
                                  <span className="daytext">晴天</span>
                              </div>
                            ) : null }
                      </Col>
                      <Col span={16} className="weather-week">
                          { weather ? (
                            <div>
                            <Col span={16}>
                              <Chart height={125} width={200} data={data} scale={cols} forceFit>
                              <Coord type="polar" innerRadius={0.5} transpose />
                              <Tooltip title="question" />
                              <Geom
                                type="interval"
                                position="question*percent"
                                color={["percent", "#c5211f-#dc9076-#de6627"]}
                                tooltip={[
                                  "percent",
                                  val => {
                                    return {
                                      name: "占比",
                                      value: val * 100 + "%"
                                    };
                                  }
                                ]}
                                style={{
                                  lineWidth: 1,
                                  stroke: "#fff"
                                }}
                              >
                              </Geom>
                            </Chart>
                            </Col>
                            <Col span={6}>
                                <div className="">PM10</div>
                                <div className="">PM25</div>
                                <div className="">湿度</div>
                            </Col>
                            </div>
                          )
                          :null}
                      </Col>
                  </Col>
                  <div className="weather-notice"></div>
              </div> 
          </Layout>
        </div>
        ):(
          <Layout>
            <div className="navbar-branding">
            <Link className="navbar-brand" to="/">
              <img style={{width:"25px"}} src={logoImg} alt="logo" />
              <b>LANIF</b>
              Admin
            </Link>
            <span className="toggle_sidemenu_l" onClick={onCollapseLeftSide}>
              <Icon type="lines" />
            </span>
          </div>
          <ul className="nav navbar-nav navbar-left clearfix">
            {collapsed || isMobile ? null : (
              <li>
                <a className="sidebar-menu-toggle" onClick={toggleSidebarHeader}>
                  <Icon type="ruby" />
                </a>
              </li>
            )}
            <li>
              <a onClick={onExpandTopBar}>
                <Icon type="wand" />
              </a>
            </li>
            {isMobile ? (
              <li className="mini-search" onClick={this.onOpenSearchBox}>
                <a>
                  <Icon type="search" antd />
                </a>
              </li>
            ) : (
              <li onClick={this.toggleFullScreen}>
                <a className="request-fullscreen">
                  <Icon type="screen-full" />
                </a>
              </li>
            )}
          </ul>
          {isMobile ? null : (
            <form className="navbar-form navbar-search clearfix">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="全文检索"
                  onClick={this.onOpenSearchBox}
                />
              </div>
            </form>
          )}
          <ul className="nav navbar-nav navbar-right clearfix">
            <li>
              <a href="https://github.com/LANIF-UI/dva-boot-admin">
                <Icon type="github" antd />
              </a>
            </li>
            <li className="dropdown">
              <Popover
                placement="bottomRight"
                title={'通知'}
                overlayClassName={cx('navbar-popup', { [theme]: !!theme })}
                content={''}
                trigger="click"
              >
                <a className="dropdown-toggle">
                  <Icon type="radio-tower" />
                </a>
              </Popover>
            </li>
            <li className="dropdown">
              <Popover
                placement="bottomRight"
                title={`WELCOME ${user.userName}`}
                overlayClassName={cx('navbar-popup', { [theme]: !!theme })}
                content={<UserDropDown />}
                trigger="click"
              >
                <a className="dropdown-toggle">
                  <Badge dot>
                    <Avatar src={require('assets/images/avatar.jpg')}>
                      {user.userName}
                    </Avatar>
                  </Badge>
                </a>
              </Popover>
            </li>
          </ul>
          <SearchBox visible={openSearchBox} onClose={this.onCloseSearchBox} />
          </Layout>
        )}
      </header>
    );
  }
}

const UserDropDown = props => (
  <ul className="dropdown-menu list-group dropdown-persist">
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="mail" /> 信息
        <Badge count={5} className="label" />
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="users" /> 好友
        <Badge count={6} className="label" />
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="gear" /> 帐户设置
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="ring" /> 通知
      </a>
    </li>
    <li className="list-group-item dropdown-footer">
      <Link to="/sign/login">
        <Icon type="poweroff" /> 退出
      </Link>
    </li>
  </ul>
);

export default NavBar;
