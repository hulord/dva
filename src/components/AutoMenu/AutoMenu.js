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

  returnMenu = (content) => {
    if(content){
      let a = content.match(/<h([1-6]).*>(.*?)<\/h[1-6]>/g);   
      let html = "";
      if(a && a.length>0){
         a.map(item=>{
            if(item.indexOf("h3") != -1){
              html += "<li name=\"0\" ><a href=\"#0\">"+item.replace(/<[^>]+>/g,"")+"</a></li>";
            }else if(item.indexOf("h4") != -1){
              html += "<li class=\"sub\" name=\"2\"><a href=\"#2\">"+item.replace(/<[^>]+>/g,"")+"</a></li>"
            }
        })
      }
      this.state.menu = html;
    }
  }

  render(){
    const { artical } = this.props;
    return (<div>
       {this.returnMenu(artical)}
      {this.state.menu?(<div className="autoMenu"><ul style={{height:"400px",padding:"20px"}} dangerouslySetInnerHTML={{__html:this.state.menu}}></ul></div>):null}
    </div>)
  }
}
export default AutoMenu;