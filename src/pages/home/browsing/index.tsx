import React, { useState } from 'react';
import { useDispatch, useSelector } from 'umi';
import { Col, Row } from 'antd';

import Carousel from '../components/Carousel';
import NewsCard from '../components/NewsCard';

import one from '@/assets/one.png';
import two from '@/assets/two.png';
import three from '@/assets/three.png';

import '@/pages/index.less';

export default function index() {
  const [imageList] = useState([one, two, three]);
  const dispatch = useDispatch();
  const { data, loading } = useSelector(({ home, loading }: any) => ({
    data: home.data.data,
    loading: loading.models.examine,
  }));
  return (
    <>
      <Row className="padding-xs">
        <Col span={24}>
          <Carousel imageList={imageList}></Carousel>
        </Col>
      </Row>
      <Row className="padding-xs">
        <Col span={24}>
          <NewsCard listData={data} loading={loading}></NewsCard>
        </Col>
      </Row>
    </>
  );
}
