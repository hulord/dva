import React,{Component} from "react";
import {Card,Icon,type,Avatar,Button,Input, Row,Col ,Pagination } from "antd";
import './style/index.less';
import { Link } from "dva/router";
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
                <Col span={6} offset={12}  className="list-show">
                  <ButtonGroup>
                    <Button type="primary" icon="cloud" />
                    <Button type="primary" icon="cloud-download" />
                  </ButtonGroup>
                </Col>
              </Row>
            ) : null }
          <div className="content-container">
              <Row className="space0" gutter={16}>
                { listData ?( listData.map((item, i) =>(
                  <Col key={i}  span={6} className="mgt15">
                      <Card 
                        size="small"
                        bordered={false}
                        cover={
                          <img
                            alt={item.title}
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        }
                        actions={[
                          <Link to={'artical/'+item.id}><Icon type="setting" key="setting" /></Link>,
                          <Link to={'artical/'+item.id}><Icon type="edit" key="edit" /></Link>,
                          <Icon type="ellipsis" key="ellipsis" url=""/>,
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={item.title}
                          description="这些是备用防守打法"
                          bordered={false}
                        />
                      </Card>
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