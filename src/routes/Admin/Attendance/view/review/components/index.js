import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row, Button, Radio  } from 'antd';
import {Link, routerRedux} from "dva/router";
import BaseComponent from 'components/BaseComponent';
import G2 from 'components/Charts/G2';
import DataTable, { Editable } from 'components/DataTable';
import { getPath } from '../../../../../../utils/func'
import { columns } from './columns';
import { antdNotice } from 'components/Notification'
import './index.less';
const { Content } = Layout;
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label } = G2;

const Pagination = DataTable.Pagination;

@connect(({ attendance,loading }) => ({
  attendance,loading: loading.models.datatable
}))


export default class review extends BaseComponent {
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
        dispatch({
            type: 'attendance/getApplyList',
            payload: {
              currentPage:pageNum || 1,
              showCount:pageSize || 10,
            }
        })
    }
    getDetail = ( attendanceId ) => {
      const { dispatch } = this.props;
      this.props.dispatch(routerRedux.push('/admin/Attendance/create/'+attendanceId));
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
  render() {
    const { attendance, loading, dispatch } = this.props;
    const { pageData } = attendance;
    const dataTableProps1 = {
      loading,
      columns: columns({getDetail:this.getDetail}),
      rowKey: 'id',
      dataItems: pageData,
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
            <Link to={getPath("/admin/image_operate")}><Button icon="plus" type="primary art_add" >
              导入
              </Button></Link>
              <Pagination {...dataTableProps1} />
            </div>
        </Content>
      </Layout>
    );
  }
}





