import React from 'react';
import { TinyLine } from '@ant-design/charts';

export default function tinyLine() {
  const data = [3, 5, 8, 6, 0, 2, 7, 9];
  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
  };
  return <TinyLine {...config} />;
}
