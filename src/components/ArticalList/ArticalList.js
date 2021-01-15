import React,{Component} from "react";
import {Avatar,Icon,type,Button } from "antd";
import './style/index.less';
import  titleImg from 'assets/images/logo/heading_logo.png'
import { rTime } from '@/utils/func'

class ArticalList extends Component {
  render(){
    const { list,title } = this.props;
    return (<div className="site-list-box-home">
        <img src={titleImg} alt="logo" />
        <b>{title}</b>
        <ul>
        {list && list.map((item, i) => {
          return <li key={i}>
                    <div className="side-list-left">
                        <span>{item.Title}</span>
                        <span>
                            <Icon type="calendar" ></Icon>
                            <Button type="link" icon="calendar"></Button>{rTime(item.CreateTime,"Y-m-d")}
                            <Button  type="link" icon="eye" ></Button>{item.View}</span>
                    </div>
                    <div className="side-list-righ">
                        {/*<span> <Button type="link" icon="fullscreen"  href={}></Button  ></span>*/}
                        {/*<span> <Button type="link" icon="close"  onClick={()=>this.delhis(i)}></Button  ></span>*/}
                    </div>
                  </li>
        })}
        </ul>
    </div>)
  }
}
export default ArticalList;