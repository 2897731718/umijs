import React from 'react';
import { DualAxes } from '@ant-design/charts';
export default function dualAxes() {
  const data = [
    {
      time: '2',
      value: 350,
      count: 800,
    },
    {
      time: '3',
      value: 900,
      count: 600,
    },
    {
      time: '4',
      value: 300,
      count: 400,
    },
    {
      time: '5',
      value: 450,
      count: 380,
    },
    {
      time: '6',
      value: 470,
      count: 220,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    yAxis: {
      // 格式化左坐标轴
      value: {
        min: 0,
        label: {
          formatter: (val: any) => `${val}个`,
        },
      },
      // 隐藏右坐标轴
      count: false,
    },
    geometryOptions: [
      {
        geometry: 'column',
        color: '#5B8FF9',
        columnWidthRatio: 0.4,
        label: {
          position: 'middle',
        },
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#5AD8A6',
      },
    ],
    // 更改柱线交互，默认为 [{type: 'active-region'}]
    interactions: [
      {
        type: 'element-highlight',
      },
      {
        type: 'active-region',
      },
    ],
    annotations: {
      value: [
        {
          type: 'text',
          position: ['2019-06', 'max'],
          content: '柱线混合图',
        },
      ],
      count: [
        {
          type: 'dataMarker',
          top: true,
          position: ['2019-05', 400],
          line: {
            length: 20,
          },
          text: {
            content: '2019-05, 发布新版本',
            style: {
              textAlign: 'left',
            },
          },
        },
      ],
    },
  };
  return <DualAxes {...config} />;
}
