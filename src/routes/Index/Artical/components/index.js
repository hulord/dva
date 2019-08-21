import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row } from 'antd';
import BaseComponent from 'components/BaseComponent';
import cx from 'classnames';
import './index.less';
const { Content } = Layout;

@connect(({ global }) => ({
  global
}))

export default class Artical extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    const contentLeft = cx("carousel-content-left");
    const contentRight = cx("carousel-content-right");
    
    return (
      <Layout className="full-layout page dashboard-page">
        <Content className="space0">
          <Col span={4}>
            <Layout className={contentLeft}>

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

