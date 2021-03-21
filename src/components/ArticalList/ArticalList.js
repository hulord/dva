import React,{Component} from "react";
import {Avatar,Icon,type,Button, Divider } from "antd";
import './style/index.less';
import  titleImg from 'assets/images/logo/heading_logo.png'
import { rTime } from '@/utils/func'

class ArticalList extends Component {
  showArtical = (character,item)=>{
    var str = "";
    if (character == "view") {
       str =  <div className="articalNotice"><Icon type="eye"  style={{ fontSize: '14px', color: '#1890ff' }}></Icon> {item.View}</div>;
    }else{
       str =  <div className="articalNotice"><Icon type="calendar"  style={{ fontSize: '14px', color: '#1890ff' }}></Icon> {rTime(item.CreateTime,"Y-m-d")}</div>
    }  
    return str;
  } 
  render(){
    const { list,title,character } = this.props;
    return (<div className="site-list-box-home">
        <img src={titleImg} alt="logo" />
        <b>{title}</b>
        <ul>
        {list && list.map((item, i) => {
          return <a  href={"/artical/"+item.Id}><li key={i}>
                    <div  className="side-list-left">
                        {item.Title.length>16?item.Title.substr(0,16)+"..." :item.Title}
                        {this.showArtical(character,item)}
                    </div>
                  </li>
                  </a>
        })}
        </ul>
    </div>)
  }
}
export default ArticalList;