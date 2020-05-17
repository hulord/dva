import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row, Breadcrumb, Divider, Tag } from 'antd';
import BaseComponent from 'components/BaseComponent';
import User from 'components/User';
import cx from 'classnames';
import './index.less';

const { Content } = Layout;

@connect(({ artical,global }) => ({
  artical,global
}))

export default class Artical extends BaseComponent {
  constructor(props) {
    super(props);
  }

  //获取
  render() {
    const { user,artical } = this.props;
    const contentLeft = cx("artical-left");
    const artical_catalogue = cx("artical-catalogue");
    const contentRight = cx("artical-right");
    
    return (
      <div>
        <Row className="space0">
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
              <h2 class="xltitle">
                {artical.detail.title}
              </h2>
              <Divider />
              <div class="infomation">
              <div class="wt-container"><div class="wt-single-meta"> <span class="wt-info-model">发布于 2020-03-08</span> <span class="wt-info-model">字数 14543</span>  <span class="wt-info-model">浏览 4543</span> </div><Tag color="#2db7f5">#2db7f5</Tag><Tag color="#2db7f5">#2db7f5</Tag><Tag color="#2db7f5">#2db7f5</Tag></div>
              </div>
              <Divider />
              <div dangerouslySetInnerHTML={{__html:artical.detail.content}}  ></div>
            </Col>
          </Col>
          <Col span={4}>
            <Col className={contentRight} style={{backgroundColor:'#a1afc9',color:'white',padding:"15px"}}>
                111111111111111111111111
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

