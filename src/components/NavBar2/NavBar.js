import React, { PureComponent } from 'react';

import { Popover, Badge, Avatar,Carousel,Layout,Cascader,Icon, Col } from 'antd';
import { Link } from 'dva/router';
import IndexIcon from '../Icon';
import cx from 'classnames';
import './style/index.less';
import logoImg from 'assets/images/logo.png';
import photoImg from 'assets/images/photo.png';
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
var data2 = [
  {
    year: "1986",
    ACME: 162,
    Compitor: 42
  },
  {
    year: "1987",
    ACME: 134,
    Compitor: 54
  },
  {
    year: "1988",
    ACME: 116,
    Compitor: 26
  },
  {
    year: "1989",
    ACME: 122,
    Compitor: 32
  },
  {
    year: "1990",
    ACME: 178,
    Compitor: 68
  },
  {
    year: "1991",
    ACME: 144,
    Compitor: 54
  }
];

//图表1
const areaCols = {
  year: {
    type: "linear",
    tickInterval: 25
  },
  percent: {
    formatter(value) {
      value = value || 0;
      value *= 100;
      return parseInt(value);
    },

    alias: "percent(%)"
  }
};
//图表2
const scale = {
  value: {
    alias: "The Share Price in Dollars",
    formatter: function(val) {
      return "$" + val;
    }
  },
  year: {
    range: [0, 1]
  }
};

var dv = new DataSet.View().source(data2);
dv.transform({
  type: "fold",
  fields: ["ACME", "Compitor"],
  key: "type",
  value: "value"
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
      weather,
      is_index
    } = this.props;
    //const ds = new DataSet();
    // const dv = ds.createView("tt");
    // dv.source(data);
    // dv.transform({
    //   type: "percent",
    //   field: "value",
    //   dimension: "year",
    //   groupBy: ["country"],
    //   as: "percent"
    // });

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
                <Cascader options={citys} onChange={onChangeCity}>
                    <a  href="#">{city ? null : "请选择城市..."}<Icon type="environment" theme="twoTone" /></a>
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
                            <Col span={16}>
                              <Chart height={70} width={150} data={data} scale={cols} forceFit>
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
                                <div className="bizChat-label">PM10</div>
                                <div className="bizChat-label">PM25</div>
                                <div className="bizChat-label">湿度</div>
                            </Col>
                            </div>
                          )
                          :null}
                      </Col>
                  </Col>
                  <Col span={24} className="weather-line-chart">
                    {<Chart
                          height={100} 
                          data={dv}
                          padding={"auto"}
                          scale={scale}
                          forceFit
                        >
                        <Tooltip crosshairs />
                        <Axis />

                        <Geom type="area" position="year*value" color="type" shape="smooth" />
                        <Geom
                          type="line"
                          position="year*value"
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
