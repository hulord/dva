import React,{Component} from "react";
import {Avatar,Icon,type,Button } from "antd";
import './style/index.less';

class Vhistory extends Component {

  delhis(i){
    let new_his = this.props.visithis.splice(i,1);
    this.setState({
      new_his
    });
  }
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
                        <span> <Button type="link" icon="fullscreen"  href={his}></Button  ></span>
                        <span> <Button type="link" icon="close"  onClick={()=>this.delhis(i)}></Button  ></span>
                    </div>
                  </li>
        })}
        </ul>
    </div>)
  }
}
export default Vhistory;