import React from 'react';

import { Tag } from 'antd';

interface propsType {
  auditState: string | number;
}

interface keyValueType {
  [key: string]: string;
}

const mapStates: keyValueType = {
  '1': '审核中',
  '2': '审核通过',
  '3': '未通过',
};

const stateColor: keyValueType = {
  '1': 'blue',
  '2': 'green',
  '3': 'red',
};
export default function state(props: propsType) {
  const auditState = props.auditState as string | number;
  return <Tag color={stateColor[auditState]}>{mapStates[auditState]}</Tag>;
}
