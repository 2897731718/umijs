import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'umi';

import RingProgress from '@/components/chart/RingProgress';
import TinyLine from '@/components/chart/TinyLine';
import Line from '@/components/chart/Line';
import Pie from '@/components/chart/Pie';
import DualAxes from '@/components/chart/DualAxes';

import '@/pages/index.less';

/**
 * props 可以结构出 module 里面的 reducer 传递过来的参数
 * @param props
 * @returns
 */
const App: React.FC = () => {
  const dispatch = useDispatch();
  // const { data, loading } = useSelector(({ apply, loading }: any) => ({
  //   data: apply.data.data,
  //   loading: loading.models.apply,
  // }));

  return (
    <>
      <Row gutter={[10, 20]} justify="center" className="padding-xs">
        <Col span={8}>
          <Card title="完成进度">
            <RingProgress />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="登记人数">
            <TinyLine />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="请假人数">
            <Line />
          </Card>
        </Col>
      </Row>
      <Row gutter={[10, 20]} justify="center" className="padding-xs">
        <Col span={12}>
          <Card title="请假比例">
            <Pie />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="防疫新闻发布数量">
            <DualAxes />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default App;
