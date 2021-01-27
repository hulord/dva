import React,{Component} from "react";
import {Avatar,Icon,type,Button, Divider } from "antd";
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
                    <div  className="side-list-left">
                        <a  href={"/artical/"+item.Id}>
                        {item.Title.length>20?  item.Title.substr(0,20)+"..." :item.Title}&nbsp;&nbsp;
                        <Icon type="eye"  style={{ fontSize: '14px', color: '#1890ff' }}></Icon>&nbsp;{item.View}
                        </a>
                    </div>
                  </li>
        })}
        </ul>
    </div>)
  }
}
export default ArticalList;