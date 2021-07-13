import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row, Button, Radio, Upload  } from 'antd';
import {Link, routerRedux} from "dva/router";
import BaseComponent from 'components/BaseComponent';
import G2 from 'components/Charts/G2';
import DataTable, { Editable } from 'components/DataTable';
import { getPath } from '../../../../../../utils/func'
import { columns } from '../components/columns';
import { antdNotice } from 'components/Notification'
import './index.less';
const { Content } = Layout;
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label } = G2;

const Pagination = DataTable.Pagination;

@connect(({ department,loading }) => ({
  department,loading: loading.models.datatable
}))


export default class departmentList extends BaseComponent {
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
        const { dispatch, datatable, department, loading } = this.props;
        const { pageData, pageDataSort } = department;
        dispatch({
            type: 'department/getall',
            payload: {
              currentPage:pageNum || 1,
              showCount:pageSize || 10
            }
        })
    }
    delete = ( departmentId ) => {
      const { dispatch } = this.props;
      dispatch({
          type: 'department/delete',
          payload: {
              id:departmentId
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
      this.getList(1,10);
      // Get this url from response in real world.\
      this.setState({fileList:[info.fileList[0].response.data]});
    }
    if(info.file.status === 'removed'){
      this.setState({fileList:[]});
    }
  }
  render() {
    const { department, loading, dispatch } = this.props;
    const { pageData } = department;
    const dataTableProps1 = {
      loading,
      columns: columns({delete:this.delete}),
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
            <Upload
              name = "file"
              action="/v1/department/import"
              onChange = {this.onChange}
              onRemove = {this.onRemove}
                  >
          <Button icon="plus" type="primary">导入</Button>            
          </Upload>
              <Pagination {...dataTableProps1} />
            </div>
        </Content>
      </Layout>
    );
  }
}





