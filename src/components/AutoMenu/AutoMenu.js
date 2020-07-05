import React,{Component} from "react";
import {Card,Icon,type,Avatar,Button,Input, Row,Col ,Pagination } from "antd";
import './style/index.less';


class AutoMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      topOne:"h3",
      topTow:"h4",
      menu:""
    }
  }



  render(){
    const { menu } = this.props;
    return (<div>
      {this.menu?(<div className="autoMenu"><ul style={{height:"400px",padding:"20px"}} dangerouslySetInnerHTML={{__html:this.menu}}></ul></div>):null}
    </div>)
  }
}
export default AutoMenu;