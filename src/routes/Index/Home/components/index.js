import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row } from 'antd';
import BaseComponent from 'components/BaseComponent';
import './index.less';
const { Content } = Layout;

@connect(({global}) => ({
global
}))

export default class Index extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
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

