import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row, Button, Radio  } from 'antd';
import { Link } from "dva/router";
import BaseComponent from 'components/BaseComponent';
import G2 from 'components/Charts/G2';
import DataSet from '@antv/data-set';
import DataTable, { Editable } from 'components/DataTable';
import { getPath } from '../../../../../../utils/func'
import { columns1 } from './columns';
import './index.less';
const { Content } = Layout;
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label } = G2;

const Pagination = DataTable.Pagination;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234
  });
}

@connect(({ artical,loading }) => ({
  artical,  loading: loading.models.datatable
}))


export default class list extends BaseComponent {
  componentDidMount (){
      const { dispatch, datatable, artical, loading } = this.props;
      const { pageData, pageDataSort } = artical;
      dispatch({
        type: 'artical/@request',
        payload: {
          method:"get",
          valueField: 'pageData',
          url: '/v1/artical/getall',
          pageInfo:  pageData.startPage(1, 10)
        }
      })
  }
  render() {
    const { artical, loading } = this.props;
    const { pageData, articalList} = artical;
    const dataTableProps1 = {
      loading,
      columns: columns1,
      rowKey: 'id',
      dataItems: pageData,
      onChange: ({ pageNum, pageSize }) => {}
    };
    return (
      <Layout className="full-layout page dashboard-page">
        <Content>
            <DataTable {...dataTableProps1} />
            <div className="footer ptl">
            <Link to={getPath("/admin/createartical")}><Button icon="plus" type="primary art_add" >
              新增
              </Button></Link>
              <Pagination {...dataTableProps1} />
            </div>
        </Content>
      </Layout>
    );
  }
}





