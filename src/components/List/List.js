import React,{Component} from "react";
import {Avatar,Icon,type,Button } from "antd";
import './style/index.less';

class List extends Component {
  render(){
    console.log(this.props);
    const {search,listType} = this.props;
    return (<div className="list-content">
      <div className=""></div>
        { search||listType ? ( 
          <div className="list-search">
              
          </div>
          ) : null }
    </div>)
  }
}
export default List;