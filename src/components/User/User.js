import React,{Component} from "react";
import {Avatar,Icon,type} from "antd";
import './style/index.less';

class User extends Component {
  static defaultProps   = {
    user:"admin"
  }

  render(){
    const { user } = this.props;
    return (<div className="User-box">
        <div className="User-photo">
          <Avatar shape="square"  icon="user"></Avatar>
        </div>
        <div className="User-info">
           <span className="User-name">{user}</span>|
           <span className="User-cv"><Icon type="file" /></span>|
           <span className="User-account"><Icon type="solution" /></span>
        </div>
        <div></div>
    </div>)
  }
}
export default User;