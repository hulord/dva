import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row } from 'antd';
import BaseComponent from 'components/BaseComponent';
import User from 'components/User';
import Vhistory from 'components/Vhistory';
import cx from 'classnames';
import './index.less';
const { Content } = Layout;

@connect(({ global, home }) => ({
  global,
  home
}))

export default class Index extends BaseComponent {
  constructor(props) {
    super(props);
    console.log(home)
  }
  
  render() {
    const contentLeft = cx("carousel-content-left");
    const contentRight = cx("carousel-content-right");
    return (
      <Layout className="full-layout page dashboard-page">
        <Content className="space0">
          <Col span={4}>
            <Layout className={contentLeft}>
              <User></User>
              <Vhistory></Vhistory>
            </Layout>
          </Col>
          <Col span={20}>
            <Layout className={contentRight}>
               
            </Layout>
          </Col>
        </Content>
      </Layout>
    );
  }
}

