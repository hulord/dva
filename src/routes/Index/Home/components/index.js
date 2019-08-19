import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row } from 'antd';
import BaseComponent from 'components/BaseComponent';
import User from 'components/User';
import Vhistory from 'components/Vhistory';
import List from 'components/List';
import cx from 'classnames';
import './index.less';
const { Content } = Layout;

@connect(({ home,global }) => ({
  home,global
}))

export default class Home extends BaseComponent {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    user: {name:"name"},
    listData:[{
      name:"title",
      image:"",
      description:""
    }]
  };
  render() {
    const { home,user,listData} = this.props;
    const { vhistory } = home;

    const contentLeft = cx("carousel-content-left");
    const contentRight = cx("carousel-content-right");
    
    return (
      <Layout className="full-layout page dashboard-page">
        <Content className="space0">
          <Col span={4}>
            <Layout className={contentLeft}>
              <User Userinfo={user}></User>
              <Vhistory visithis={vhistory}></Vhistory>
            </Layout>
          </Col>
          <Col span={20}>
            <Layout className={contentRight}>
               <List search="ture" listType="ture" listData={listData}></List>
            </Layout>
          </Col>
        </Content>
      </Layout>
    );
  }
}

