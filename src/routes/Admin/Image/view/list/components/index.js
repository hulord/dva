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

@connect(({ artical,loading }) => ({
  image,  loading: loading.models.datatable
}))


export default class list extends BaseComponent {
  componentDidMount (){
        this.getList();
    }
    getList = () =>{
        const { dispatch, datatable, image, loading } = this.props;
        const { pageData, pageDataSort } = image;
        dispatch({
            type: 'image/@request',
            payload: {
                method:"get",
                valueField: 'pageData',
                url: '/v1/image/getall',
                pageInfo:  pageData.startPage(1, 10)
            }
        })
    }
    // delete = ( articalId ) => {
    //     const { dispatch } = this.props;
    //     dispatch({
    //         type: 'image/delete',
    //         payload: {
    //             id:articalId
    //         }
    //     }).then(res=>{
    //         if(res.status == 0){
    //             this.getList();
    //         }else{
    //             antdNotice.error(res.message);
    //         }
    //     });
    // }
  render() {
    const { image, loading, dispatch } = this.props;
    const { pageData, imageList} = image;
    const dataTableProps1 = {
      loading,
      columns: columns({delete:this.delete,edit:this.edit}),
      rowKey: 'id',
      dataItems: pageData,
      onChange: ({ pageNum, pageSize }) => {}
    };
    return (
      <Layout className="full-layout page dashboard-page">
        <Content>
            <DataTable {...dataTableProps1} />
            <div className="footer ptl">
            <Link to={getPath("/admin/image_operate")}><Button icon="plus" type="primary art_add" >
              新增
              </Button></Link>
              <Pagination {...dataTableProps1} />
            </div>
        </Content>
      </Layout>
    );
  }
}





