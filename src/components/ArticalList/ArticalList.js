import React,{Component} from "react";
import {Avatar,Icon,type,Button } from "antd";
import './style/index.less';
import  titleImg from 'assets/images/logo/heading_logo.png'

class ArticalList extends Component {
  render(){
    const { articalList,title } = this.props;
    return (<div className="site-list-box">
        <img src={titleImg} alt="logo" />
        <b>{title}</b>
        <ul>
        {articalList && articalList.map((item, i) => {
          return <li key={i}>
                    <div className="side-list-left">
                        <span>{item.title}</span>
                        <span>{item.view}!</span>
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
export default ArticalList;