import React from 'react';

import { Tag } from 'antd';

interface propsType {
  status: string | number;
}

interface keyValueType {
  [key: string]: string;
}

const mapStates: keyValueType = {
  '1': '正常',
  '2': '禁用',
};

const stateColor: keyValueType = {
  '1': 'green',
  '2': 'red',
};
export default function state(props: propsType) {
  const status = props.status as string | number;
  return <Tag color={stateColor[status]}>{mapStates[status]}</Tag>;
}
