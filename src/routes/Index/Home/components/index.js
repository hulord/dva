import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row } from 'antd';
import BaseComponent from 'components/BaseComponent';
import User from 'components/User';
import Vhistory from 'components/Vhistory';
import ArticalList from 'components/ArticalList';
import List from 'components/List';
import cx from 'classnames';


import './index.less';
import { go } from 'react-router-redux';
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
    this.getTopAndNewList(5);
    this.onChange(this.state.page);
  }
  onChange = page =>{
    this.getArticalList(null,page)
  }
  onSearch = keyword=>{
    this.getArticalList(keyword,1)
  }
  getTopAndNewList = size =>{
    this.props.dispatch({
      type:'global/getTopAndNewList',
      payload:size
    })
  }
  getArticalList = (keyword,page)=>{
    const payload =  {
        page:page,
        pageSize:10
    }
    if(keyword){
      payload.keyword = keyword
    }
    this.props.dispatch({
      type: 'home/getArtical',
      payload:payload
    })
  }
  render() {
    const { home,user,global } = this.props;
    const { vhistory,listData,page,total,keyword } = home;
    const { TopList, NewList } = global;

    const contentLeft = cx("carousel-content-left");
    const contentRight = cx("carousel-content-right");

    return (
      <Layout className = "">

        <Content className = "space0">
          <Col span= {5}>
            <Layout className={contentLeft}>
              <User Userinfo={user}></User>
              <Vhistory visithis={vhistory}></Vhistory>
              <ArticalList list = {TopList} character = {"date"} title = {"最新文章"}></ArticalList>
              <ArticalList list = {NewList} character = {"view"}  title = {"热门文章"}></ArticalList>    
            </Layout>
          </Col>
          <Col span={19}>
            <Layout className={contentRight}>
               <List search="ture" listType="ture" onSearch={this.onSearch} onChange={this.onChange} pageSize={10} page={page} keyword={keyword} total={total} listData={listData}></List>
            </Layout>
          </Col>
        </Content>
      </Layout>
    );
  }
}

