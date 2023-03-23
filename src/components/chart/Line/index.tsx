import React from 'react';
import { Line } from '@ant-design/charts';

export default function line() {
  const data = [
    { year: '3', value: 3 },
    { year: '4', value: 4 },
    { year: '5', value: 4 },
    { year: '6', value: 5 },
    { year: '7', value: 0 },
    { year: '8', value: 0 },
    { year: '9', value: 3 },
    { year: '10', value: 8 },
    { year: '11', value: 13 },
  ];
  const config = {
    data,
    height: 100,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
}
