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
      page:1,
      listData:[],
    }
    this.onChange(this.state.page);
  }
  onChange = page =>{
    this.props.dispatch({
      type: 'home/getArtical',
      payload: {
        page:page,
        pageSize:10,
      }
    })
  }
  onSearch = keyword=>{
    this.props.dispatch({
      type: 'home/getArtical',
      payload: {
        page:1,
        pageSize:10,
        keyword:keyword
      }
    })
  }
  render() {
    const { home,user } = this.props;
    const { vhistory,listData,page,total,keyword } = home;

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
               <List search="ture" listType="ture" onSearch={this.onSearch} onChange={this.onChange} pageSize={10} page={page} keyword={keyword} total={total} listData={listData}></List>
            </Layout>
          </Col>
        </Content>
      </Layout>
    );
  }
}

