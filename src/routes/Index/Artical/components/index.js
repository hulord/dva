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
    const contentLeft = cx("artical-left");
    const artical_catalogue = cx("artical-catalogue");
    const contentRight = cx("artical-right");
    
    return (
      <Layout className="full-layout page dashboard-page">
        <Content className="space0">
          <Col span={4}>
            <Layout className={contentLeft}>
              1111111111111111111111111
            </Layout>
          </Col>
          <Col span={4}>
            <Layout className={contentLeft}>
              1111111111111111111111111
            </Layout>
          </Col>
          <Col span={20}>
            <Layout className={contentRight}>
                111111111111111111111111
            </Layout>
          </Col>
        </Content>
      </Layout>
    );
  }
}

