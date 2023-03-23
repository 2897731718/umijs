import React from 'react';

import { Pie } from '@ant-design/charts';

export default function pie() {
  const data = [
    {
      type: '未请假',
      value: 50,
    },
    {
      type: '以通过',
      value: 18,
    },
    {
      type: '未通过',
      value: 3,
    },
    {
      type: '申请中',
      value: 15,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
}
