import React from 'react';
import { connect } from 'dva';
import $ from 'jquery'
import { Layout, Col, Row, Breadcrumb, Divider, Tag } from 'antd';
import BaseComponent from 'components/BaseComponent';
import User from 'components/User';
import AutoMenu from 'components/AutoMenu';
import cx from 'classnames';
import ArticalList from 'components/ArticalList';
import Up from '../../../../utils/blogMenu-master/js/jquery.autoMenu.js';
import './index.less';
import '../../../../utils/blogMenu-master/css/jquery.autoMenu.css';
import { callbackify } from 'util';
const { Content } = Layout;
@connect(({ artical,global }) => ({
  artical,global
}))

export default class Artical extends BaseComponent {
  constructor(props) {
    super(props);

    //获取文章标签
    //this.getArticalTags();
    //获取相似文章
    //this.getSimilarArtical();
    //获取推荐文章
    this.getTopAndNewList(5);
    this.state = {
      topOne:"h3",
      topTow:"h4",
      menu:"",
      currentId:1
    }
  }
  //组件第一次渲染之后执行
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  getTopAndNewList = size =>{
    this.props.dispatch({
      type:'global/getTopAndNewList',
      payload:size
    })
  }
  handleScroll=(event)=>{
    let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
    if(this.props.artical.detail.h){
      this.props.artical.detail.h.forEach((item,i)=>{
        var k = i*1+1*1;
        if(document.getElementById(k) && document.getElementById(k).offsetTop<scrollTop){
          this.setState({currentId: k});
        }
      })
    }
  }


  //获取
  render() {
    const { user,artical,global } = this.props;
    const { TopList,NewList } = global
    const { detail } = artical;
    const { content ,catalogue} = detail;
    const contentLeft = cx("artical-left");
    const { currentId } = this.state;
    const artical_catalogue = cx("artical-catalogue");
    const contentRight = cx("artical-right"); 
    return (
      <div >
        <Row className="space0">
          <Col span={5}>
            <Col className={contentLeft} className={"content-menu "} style={{backgroundColor:'#262626',color:'white'}}>
              <User Userinfo={user}></User>     
              <ArticalList  list = {TopList} character = {"date"} title = {"最新文章"}></ArticalList>
              <ArticalList  list = {NewList} character = {"view"}  title = {"热门文章"}></ArticalList>
            </Col>
          </Col>
          <Col span={15}>
            <Col className={contentLeft} style={{backgroundColor:'',color:'#4D4F53',padding:"15px"}}>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item href="">文章</Breadcrumb.Item>
              <Breadcrumb.Item href="">语言</Breadcrumb.Item>
              <Breadcrumb.Item>php</Breadcrumb.Item>
            </Breadcrumb>
              <h2 className="xltitle">
                {artical.detail.title}
              </h2>
              <Divider />
              <div className="infomation">
              <div className="wt-container">
        <div className="wt-single-meta"> <span className="wt-info-model">发布于 2020-03-08</span> <span className="wt-info-model">字数 14543</span>  <span className="wt-info-model">浏览 4543</span> </div>
                <div className="tags mt10">
                { artical.detail.Tags ?( artical.detail.Tags.map((item, i) =>(
                  <Tag key={item.id+1} color="#2db7f5">{item.tag_name}</Tag>
                ))):null}
                </div>
                </div>
              </div>
              <Divider />
              <div className="content"  dangerouslySetInnerHTML={{__html:content}}   ></div>
            </Col>
          </Col>
          <Col span={4}>
            <AutoMenu menu = {catalogue} anchor={this.state.currentId}> </AutoMenu>
          </Col>
        </Row>
      </div>
    );
  }
 
}

