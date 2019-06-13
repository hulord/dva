import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row } from 'antd';
import BaseComponent from 'components/BaseComponent';
import './index.less';
const { Content } = Layout;

@connect(({ dashboard }) => ({
  dashboard
}))
export default class Index extends BaseComponent {
  render() {
    const { dashboard } = this.props;
    return (
      <Layout className="full-layout page dashboard-page">
        <Content>
          <Row gutter={20}>
            这是首页
          </Row>
        </Content>
      </Layout>
    );
  }
}

