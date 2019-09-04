import React,{Component} from "react";
import {Card,Icon,type,Avatar,Button,Input, Row,Col ,Pagination } from "antd";
import './style/index.less';
import { dispatch } from "rxjs/internal/observable/range";
const { Search } = Input;
const ButtonGroup = Button.Group;
const Meta  = Card;
class List extends Component {
  //初始化
  constructor(props) {
    super(props);

    this.state = {
      current: 1,
      listData:[]
    };
  }


  render(){
    const {search,listType,listData,onChange} = this.props;
    return (<div className="list-content">
      <div className=""></div>
        { search||listType ? ( 
              <Row className="list-assist">
                <Col span={6}  className="list-search">
                  <Search placeholder="请输入关键字" onSearch={value => console.log(value)} enterButton />
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
                { listData.map((item, i) =>(
                  <Col key={i}  span={8} className="mgt15">
                      <Card 
                        size="small"
                        bordered={false}
                        cover={
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        }
                        actions={[
                          <Icon type="setting" key="setting" />,
                          <Icon type="edit" key="edit" />,
                          <Icon type="ellipsis" key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={item.title}
                          description={item.description}
                          bordered={false}
                        />
                      </Card>
                    </Col>
                ))}
             </Row>
        </div>
        <Pagination current={this.state.current} defaultCurrent={6} onChange={onChange} total={500} />
    </div>)
  }
}
export default List;