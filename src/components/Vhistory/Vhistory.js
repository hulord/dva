import React,{Component} from "react";
import {Avatar,Icon} from "antd";
import './style/index.less';

class Vhistory extends Component {
  render(){
    const { visithis } = this.props;
    return (<div className="site-list-box">
        <ul>
        {visithis.map((his, i) => {
          return <li key={i}>
                    <div className="side-list-left">
                        <span>{his}</span>
                        <span>this is website title!</span>
                    </div>
                    <div className="side-list-righ">
                        <Icon></Icon>
                        <Icon></Icon>
                    </div>
                  </li>
        })}
        </ul>
    </div>)
  }
}
export default Vhistory;