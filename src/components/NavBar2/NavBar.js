import React, { PureComponent } from 'react';

import { Popover, Badge, Avatar,Carousel,Layout,Cascader,Icon, Col, Slider } from 'antd';
import { Link } from 'dva/router';
import IndexIcon from '../Icon';
import cx from 'classnames';
import './style/index.less';
import logoImg from 'assets/images/logo.png';
import photoImg from 'assets/images/photo.png';
import weatherImg from 'assets/images/weather_sun.png';
import citys from '@/utils/citys.js';
import G2 from 'components/Charts/G2';
import DataSet from '@antv/data-set';
const { Chart, Axis, Geom, Tooltip } = G2;

var data2 = [
  {
    day: "1986",
    Height: 18,
    Low: 10
  }
];




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
      weather,
      is_index
    } = this.props;
    //图表2
    const scale = {
      value: {
        alias: "气温",
        formatter: function(val) {
          return  val+"℃";
        }
      },
      day: {
        range: [0, 1]
      }
    };
    var dv = new DataSet.View().source(weather.areaChat||data2);
    dv.transform({
      type: "fold",
      fields: ["最高气温", "最低气温"],
      key: "type",
      value: "value"
    });
    const classnames = cx('navbar','background-ghost','border0',{
      'is-index':is_index==1?true:false,
      'navbar-fixed-top': !!fixed,
      'navbar-sm': isMobile ? true : collapsed,
   
    });
    return (
      <header className={classnames}>
        <div>
          <Layout className="absHeader position-abs3 display-block margin-left-80">
              <div className="navbar-branding">
                <Link className="space0 navbar-brand" to="/">
                  <img src={logoImg} alt="logo" />
                  <b>LANIF</b>
                  Admin
                </Link>
                <span className="toggle_sidemenu_l" onClick={onCollapseLeftSide}>
                  <IndexIcon type="lines" />
                </span>
              </div>
              <ul className="nav navbar-nav navbar-right clearfix">
                {collapsed || isMobile ? null : (
                  <li>
                    <a className="sidebar-menu-toggle" onClick={toggleSidebarHeader}>
                      <IndexIcon type="ruby" />
                    </a>
                  </li>
                )}
                <li>
                  <a onClick={onExpandTopBar}>
                    <IndexIcon type="wand" />
                  </a>
                </li>
                {isMobile ? (
                  <li className="mini-search" onClick={this.onOpenSearchBox}>
                    <a>
                      <IndexIcon type="search" antd />
                    </a>
                  </li>
                ) : (
                  <li onClick={this.toggleFullScreen}>
                    <a className="request-fullscreen">
                      <IndexIcon type="screen-full" />
                    </a>
                  </li>
                )}
              </ul>
          </Layout>
          {is_index==1?(
            <div className="index-header">
            <Carousel autoplay  dotPosition="bottom" class="pos-relative"> 
                <div>
                <img alt="图片"
                    src={require('assets/images/settings/bg_1.jpg')}
                />
                </div>
                <div>
                <img alt="图片"
                    src={require('assets/images/settings/bg_2.jpg')}
                />
                </div>
                <div>
                <img alt="图片"
                    src={require('assets/images/settings/bg_3.jpg')}
                />
                </div>
                <div>
                <img alt="图片"
                    src={require('assets/images/settings/bg_2.jpg')}
                />
                </div>
              </Carousel>

            <Layout className="weather-box" style={{"background":"rgb(250, 203, 185,0.1)"}}>
              <div className="weather-header">
              <Icon type="appstore" theme="twoTone"  style={{ fontSize: '16px', color: '#08c' }}/>
              <span className="h1">{city}</span>
                <Cascader
                    options={citys}
                    onChange={onChangeCity}
                    >
                  <a  href="#"><Icon type="environment" theme="twoTone" /></a>
                </Cascader>
              </div>
              <div className="weather-content">
                  <Col span={24} className="weather-data">
                      <Col span={9} className="weather-today">
                            { weather ? (
                              <div className="dayWeather">
                                  <img src={weatherImg} alt="logo" />
                                  <span className="interval">/</span>
                                  <span className="daytext">{weather.today?weather.today.wea:""}</span>
                                  <span className="temperature">{weather.today?weather.today.temperature:""}°</span>
                              </div>
                            ) : null }
                      </Col>
                      <Col span={15} className="weather-week">
                          { weather ? (
                            <div>
                              <Col span={24} className="weather-intval">
                                <Col span={10} className="weather-intval-title">
                                    PM10
                                </Col>
                                <Col span={12} className="weather-intval-val">
                                  <Slider defaultValue={30} disabled={true} />
                                </Col>
                              </Col>
                              <Col span={24} className="weather-intval">
                                <Col span={10} className="weather-intval-title">
                                  PM20
                                </Col>
                                <Col span={12} className="weather-intval-val">
                                  <Slider defaultValue={40} disabled={true} />
                                </Col>
                              </Col>
                            </div>
                          )
                          :null}
                      </Col>
                  </Col>
                  <Col span={24} className="weather-line-chart">
                    {<Chart
                          height={125}
                          data={dv}
                          padding={"auto"}
                          scale={scale}
                          forceFit
                        >
                        <Tooltip crosshairs />
                        <Axis />

                        <Geom type="area" position="day*value" color="type" shape="smooth" />
                        <Geom
                          type="line"
                          position="day*value"
                          color="type"
                          shape="smooth"
                          size={2}
                        />
                      </Chart>}
                    </Col>
                    <Col span={24} className="weather-notice">
                      <Col span={9} className="weather-notice-photo">
                          <img src={photoImg} alt="notice" />
                          <span className="weather-notice-title">每日建议</span>
                      </Col>
                      <Col span={15} className="weather-notice-text">
                          {weather.today?weather.today.air_tips:""}
                      </Col>
                    </Col>
              </div> 
          </Layout>
          <Layout className="weather-backgroud"></Layout>
          </div>
          ):null}
        </div>
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
