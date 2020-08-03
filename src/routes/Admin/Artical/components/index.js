import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row } from 'antd';
import Icon from 'components/Icon';
import BaseComponent from 'components/BaseComponent';
import Panel from 'components/Panel';
import G2 from 'components/Charts/G2';
import DataSet from '@antv/data-set';
import './index.less';
const { Content } = Layout;
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label } = G2;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234
  });
}

@connect(({ dashboard }) => ({
  dashboard
}))


export default class Dashboard extends BaseComponent {
  componentDidMount (){
    const { dispatch } = this.props;
    dispatch({
      type: 'home/getArtical',
      payload: {
        page:1,
        pageSize:10,
      }
    })
  }

  render() {
    const { dashboard } = this.props;
    return (
      <Layout className="full-layout page dashboard-page">

      </Layout>
    );
  }
}





