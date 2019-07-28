import React,{Component} from "react";
import {Avatar} from "antd";
import './style/index.less';

class User extends Component {
  static defaultprop   = {
    user:"admin"
  }

  render(){
    return (<div className="User-box">
        <div className="User-photo">
          <Avatar shape="square"  icon="user"></Avatar>
        </div>
    </div>)
  }
}
export default User;