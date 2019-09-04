import React from 'react';
import G2 from 'components/Charts/G2';
import DataSet from '@antv/data-set';
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label, View, Guide, Shape, Facet, Util } = G2;
const { Text } = Guide;
const { DataView } = DataSet;

const data = [
  {
    country: "Asia",
    year: "1750",
    value: 502
  },
  {
    country: "Asia",
    year: "1800",
    value: 635
  },
  {
    country: "Africa",
    year: "1750",
    value: 30
  },
  {
    country: "Africa",
    year: "1800",
    value: 107
  }
];
const ds = new DataSet();
const dv = ds.createView("tt");
dv.source(data);
dv.transform({
  type: "percent",
  field: "value",
  dimension: "year",
  groupBy: ["country"],
  as: "percent"
});

const cols = {
  year: {
    type: "linear",
    tickInterval: 25
  },
  percent: {
    formatter(value) {
      value = value || 0;
      value *= 100;
      return parseInt(value);
    },

    alias: "percent(%)"
  }
};
export default props => (
  <Chart height={window.innerHeight} data={dv} scale={cols} forceFit>
    <Axis name="year" />
    <Axis name="percent" />
    <Tooltip />
    <Geom
      type="area"
      adjustType="stack"
      position={"year*percent"}
      color={["country", ["#ffd54f", "#ef6c00", "#1976d2", "#64b5f6"]]}
    />
</Chart>

);
