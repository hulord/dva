import React from 'react';
import { connect } from 'dva';
import $ from 'jquery'
import { Layout, Col, Row, Breadcrumb, Divider, Tag } from 'antd';
import BaseComponent from 'components/BaseComponent';
import User from 'components/User';
import AutoMenu from 'components/AutoMenu';
import cx from 'classnames';
import './index.less';
import Up from '../../../../utils/blogMenu-master/js/jquery.autoMenu.js';
import '../../../../utils/blogMenu-master/css/jquery.autoMenu.css';

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
    //this.getTopArtical();
  }

  //获取
  render() {
    const { user,artical } = this.props;
    const { detail } = artical;
    const { content } = detail;
    const contentLeft = cx("artical-left");
    const artical_catalogue = cx("artical-catalogue");
    const contentRight = cx("artical-right"); 
    $("#autoMenu").autoMenu({
      levelOne : 'h3', //一级标题
      levelTwo : 'h4',  //二级标题（暂不支持更多级）
      width : 200, //容器宽度
      height : 400, //容器高度
      padding: 20, //内部间距
      offTop : 100 //滚动切换导航时离顶部的距离
  })
    return (
      <div >
        <Row className="space0 vh100 ">
          <Col span={4}>
            <Col className={contentLeft} className={"content-menu"} style={{backgroundColor:'#262626',color:'white',padding:"15px"}}>
              <User Userinfo={user}></User>            
            </Col>
          </Col>
          <Col span={16}>
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
            <AutoMenu artical = {content}> </AutoMenu>
          { /* <Col className="autoMenu" id="autoMenu" data-automenu></Col>*/}
          </Col>
        </Row>
      </div>
    );
  }
 
}

