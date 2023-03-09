import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useRequest } from 'umi';

import { userList, deleteUser } from '@/api/user';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const App: React.FC = () => {
  const columns: ColumnsType<DataType> = [
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
            onClick={() => {
              console.log(_, record, index);
              deleteUser({
                data: { key: record.key },
              });
            }}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];
  // 方式一
  // const [dataTable, setDataTable] = useState({
  //   total: 0,
  //   page: 0,
  //   limit: 0,
  //   data: []
  // })
  // const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { code, data } = await userList({
  //       data: { page: 1, limit: 10 }
  //     })
  //     if (code === "200") {
  //       console.log("res", data)
  //       setDataTable(data)
  //     }
  //   }
  //   fetchData()
  // }, [])
  // 方式二
  const { loading, data } = useRequest(async () => {
    return await userList({ data: { page: 1, limit: 10 } });
  });
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data ? data.data : []}
    />
  );
};

export default App;
