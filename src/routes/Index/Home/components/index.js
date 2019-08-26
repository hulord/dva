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
    this.state = {
      current:"1",
      listData:[],
    }
    this.onChange(1);
  }
  onChange = page =>{
    this.props.dispatch({
      type: 'home/getList',
      payload: {
        currentPage:page,
        pageSize:10,
      }
    })
  }
  render() {
    const { home,user } = this.props;
    const { vhistory,listData } = home;

    const contentLeft = cx("carousel-content-left");
    const contentRight = cx("carousel-content-right");
    
    return (
      <Layout className = "">
        <Content className = "space0">
          <Col span= {4}>
            <Layout className={contentLeft}>
              <User Userinfo={user}></User>
              <Vhistory visithis={vhistory}></Vhistory>
            </Layout>
          </Col>
          <Col span={20}>
            <Layout className={contentRight}>
               <List search="ture" listType="ture" onChange={this.onChange} listData={listData}></List>
            </Layout>
          </Col>
        </Content>
      </Layout>
    );
  }
}

