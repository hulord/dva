import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row, Button, Radio, Upload } from 'antd';
import {Link, routerRedux} from "dva/router";
import BaseComponent from 'components/BaseComponent';
import G2 from 'components/Charts/G2';
import DataTable, { Editable } from 'components/DataTable';
import { getPath } from '../../../../../../utils/func'
import { columns6 } from './columns';
import { antdNotice } from 'components/Notification'
import './index.less';
const { Content } = Layout;
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label } = G2;

const Pagination = DataTable.Pagination;

@connect(({ attendance,loading }) => ({
  attendance,loading: loading.models.datatable
}))


export default class attendance extends BaseComponent {
    componentDidMount (){
        this.getList(1,10);
    }
    constructor(props) {
      super(props);

      this.state = {
        pageNum:1,
        pageSize:10
      }
    }
    getList = (pageNum, pageSize) =>{
        const { dispatch, datatable, attendance, loading } = this.props;
        const { pageData, pageDataSort } = attendance;
        const date = new Date();//中国标准时间
        const month = date.getMonth();//获取当前月份(0-11,0代表1月)
        dispatch({
            type: 'attendance/getall',
            payload: {
              currentPage:pageNum || 1,
              showCount:pageSize || 10,
              mouth:month
            }
        })
    }
    delete = ( attendanceId ) => {
      const { dispatch } = this.props;
      dispatch({
          type: 'attendance/delete',
          payload: {
              id:attendanceId
          }
      }).then(res=>{
          if(res.status == 0){
            this.getList(1,10);
          }else{
              antdNotice.error(res.message);
          }
      });
  }
  onChange =  (info) => {
    this.setState({ fileList: info.fileList});
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.\
      this.setState({fileList:[info.fileList[0].response.data]});
    }
    if(info.file.status === 'removed'){
      this.setState({fileList:[]});
    }
  }
  render() {
    const { attendance, loading, dispatch } = this.props;
    const { pageData } = attendance;
    const dataTableProps1 = {
      loading,
      columns: columns6({delete:this.delete}),
      rowKey: 'id',
      dataItems: pageData,
      isScroll: true,
      onChange: ({ pageNum, pageSize }) => {
        this.state.set({pageNum:pageNum,pageSize:pageSize})
        this.getList(pageNum,pageSize)
      }
    };
    return (
      <Layout className="full-layout page dashboard-page">
        <Content>
            <DataTable {...dataTableProps1} />
            <div className="footer ptl">
            <Upload
              name = "file"
              action="/v1/attendance/import"
              onChange = {this.onChange}
              onRemove = {this.onRemove}
                  >
            <Button >导入</Button>
          </Upload>
              <Pagination {...dataTableProps1} />
            </div>
        </Content>
      </Layout>
    );
  }
}





