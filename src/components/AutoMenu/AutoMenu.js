import React,{Component} from "react";
import {Card,Icon,type,Avatar,Button,Input, Row,Col ,Pagination } from "antd";
import './style/index.less';


class AutoMenu extends Component {
  constructor(props){
    super(props);

  }

  Changeactive = (menu,anchor) => {
    var reg = new RegExp('name=\"'+anchor+'\"',"g"); //创建正则RegExp对象    
    var menu = menu.replace(reg,'name=\"'+anchor+'\" class="active"');
    return  <div className="autoMenu"><ul style={{height:"500px",padding:"20px"}} dangerouslySetInnerHTML={{__html:menu}}></ul></div>;
  }

  render(){
    const { menu ,anchor} = this.props;
    console.log(anchor)
    return (<div>
      {menu?(
         this.Changeactive(menu,anchor) 
      ):null}
    </div>)
  }
}
export default AutoMenu;