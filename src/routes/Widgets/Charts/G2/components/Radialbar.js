import React from 'react';
import G2 from 'components/Charts/G2';
import DataSet from '@antv/data-set';
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label, View, Guide, Shape, Facet, Util } = G2;
const { Text } = Guide;
const { DataView } = DataSet;
const data = [
  {
    question: "问题 1",
    percent: 0.21
  },
  {
    question: "问题 2",
    percent: 0.4
  },
  {
    question: "问题 3",
    percent: 0.49
  },
  {
    question: "问题 4",
    percent: 0.52
  },
  {
    question: "问题 5",
    percent: 0.53
  },
  {
    question: "问题 6",
    percent: 0.84
  },
  {
    question: "问题 7",
    percent: 1.0
  },
  {
    question: "问题 8",
    percent: 1.2
  }
];

const cols = {
  percent: {
    min: 0,
    max: 2
  }
};

const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'fold',
  fields: ['a', 'b'], // 展开字段集
  key: 'Radialbar', // key字段
  value: 'Radialbar' // value字段
});
export default props => (
  <Chart height={window.innerHeight} data={data} scale={cols} forceFit>
  <Coord type="polar" innerRadius={0.1} transpose />
  <Tooltip title="question" />
  <Geom
    type="interval"
    position="question*percent"
    color={["percent", "#BAE7FF-#1890FF-#0050B3"]}
    tooltip={[
      "percent",
      val => {
        return {
          name: "占比",
          value: val * 100 + "%"
        };
      }
    ]}
    style={{
      lineWidth: 1,
      stroke: "#fff"
    }}
  >
    <Label content="percent" offset={-5} />
  </Geom>
  <Guide>
    {data.map(obj => {
      return (
        <Text
          key = {obj.question}
          position={[obj.question, 0]}
          content={obj.question + " "}
          style={{
            textAlign: "right"
          }}
        />
      );
    })}
  </Guide>
</Chart>

);
