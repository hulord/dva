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
      <div>
        <Row className="space0">
          <Col span={4}>
            <Col className={contentLeft} className={"content-menu"} style={{backgroundColor:'#a1afc9',color:'white',fontSize:40,padding:"15px"}}>
              1111111111111111111111111
            </Col>
          </Col>
          <Col span={16}>
            <Col className={contentLeft} style={{backgroundColor:'',color:'white',fontSize:40,padding:"15px"}}>
              1111111111111111111111111
            </Col>
          </Col>
          <Col span={4}>
            <Col className={contentRight} style={{backgroundColor:'#3d3b4f',color:'white',fontSize:40,padding:"15px"}}>
                111111111111111111111111
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

