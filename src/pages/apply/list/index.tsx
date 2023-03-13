import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { ConnectRC, Loading, connect } from 'umi';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
interface PageProps {
  apply: any;
  loading: boolean;
  dispatch: any;
}
/**
 * props 可以结构出 module 里面的 reducer 传递过来的参数
 * @param props
 * @returns
 */
const App: React.FC<PageProps> = ({ apply, dispatch }) => {
  const columns: ColumnsType<DataType> = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '家庭地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record, index) => (
        <Space size="middle">
          <Button type="primary" size="small">
            编辑
          </Button>
          <Button
            type="primary"
            size="small"
            danger
            onClick={async () => {
              dispatch({
                type: 'apply/remove',
                payload: { key: record.key },
              });
            }}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];
  const { data } = apply.data;
  return (
    <Table
      // loading={loading}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 440 }}
    />
  );
};
/**
 * 通过 connect 连接 model 中的 namespace 获取 reducer 中的 数据
 * 并且 该函数必须返回参数 props 才能接收到传过来的值
 * connect 是连接的桥梁
 * @param state 可以接收到所有 model 注册的数据 如果需要哪一个 model 中的数据 就需要根据 namespace 对应的名称进行结构获取
 * @returns
 */
const connectFun = (state: { apply: string; loading: any }) => {
  console.log('stateIn', state);
  return {
    apply: state.apply,
    loading: state.loading.models.index,
  };
};

export default connect(connectFun)(App);
