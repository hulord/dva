import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row } from 'antd';
import Icon from 'components/Icon';
import BaseComponent from 'components/BaseComponent';
import Panel from 'components/Panel';
import G2 from 'components/Charts/G2';
import DataSet from '@antv/data-set';
import DataTable, { Editable } from 'components/DataTable';
import { columns1, columns2, columns3, columns4, columns5 } from './columns';
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


export default class Artical extends BaseComponent {
  componentDidMount (){
    const { dispatch } = this.props;
    dispatch({
      type: 'home/getArtical',
      payload: {
        page:1,
        pageSize:10,
      }
    })
  }; 

  render() {
    const { artical, loading } = this.props;
    const { pageData, pageDataSort } = artical;

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
            <div className="footer">
              <Pagination {...dataTableProps1} />
            </div>
        </Content>
      </Layout>
    );
  }
}





