import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
// import 'antd/dist/antd.css';

const data = require('./NewPathcsv1.json')

function Graph_Line() {
  var config = {
    data: data,
    padding: 'auto',
    xField: 'Name',
    yField: 'Score',
    xAxis: { tickCount: 5 },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };
  return <Line {...config} />;

}
export default Graph_Line;