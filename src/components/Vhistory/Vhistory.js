import React,{Component} from "react";
import {Avatar,Icon} from "antd";
import './style/index.less';

class Vhistory extends Component {
  static defaultProps   = {
    user:"admin"
  }

  render(){
    const { user } = this.props;
    return (<div className="User-box">

    </div>)
  }
}
export default Vhistory;