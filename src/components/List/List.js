import React,{Component} from "react";
import {Card,Icon,type,Avatar,Button,Input, Row,Col ,Pagination } from "antd";
import './style/index.less';
import { Link } from "dva/router";
import { rTime } from '@/utils/func';
const { Search } = Input;
const ButtonGroup = Button.Group;
const Meta  = Card;


class List extends Component {
  render(){
    const {search,listType,listData,total,page,onChange ,onSearch} = this.props;
    return (<div className="list-content">
      <div className=""></div>
        { search||listType ? ( 
              <Row className="list-assist">
                <Col span={6}  className="list-search">
                  <Search placeholder="请输入关键字" onSearch={onSearch} enterButton />
                </Col>
                {/*<Col span={6} offset={12}  className="list-show">*/}
                {/*  <ButtonGroup>*/}
                {/*    <Button type="primary" icon="cloud" />*/}
                {/*    <Button type="primary" icon="cloud-download" />*/}
                {/*  </ButtonGroup>*/}
                {/*</Col>*/}
              </Row>
            ) : null }
          <div className="content-container">
              <Row className="space0" gutter={16}>
                { listData ?( listData.map((item, i) =>(
                  <Col key={i}  span={6} className="mgt15">
                   <a  href={"/artical/"+item.id}>
                      <Card
                          hoverable
                          cover={<img alt="example" style={{height:"166.74px"}} src={item.images.url} />}
                      >
                          <Meta 
                          bordered={false} 
                          title={item.title} 
                          description={item.title}
                           >
                            {item.title.substr(0,20)}
                           </Meta>
                      </Card>
                      </a>
                    </Col>
                ))
              ):null
              }
             </Row>
        </div>
        <Pagination current={page} defaultCurrent={1} onChange={onChange} total={total} />
    </div>)
  }
}
export default List;