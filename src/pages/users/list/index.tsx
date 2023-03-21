import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { userList, userPatch } from '@/api/user';

import AccountState from '@/components/AccountState';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  status: string;
}

const App: React.FC = () => {
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
      title: '班级',
      dataIndex: 'classes',
      key: 'classes',
    },
    {
      title: '学号',
      dataIndex: 'studId',
      key: 'studId',
    },
    {
      title: '家庭地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '账号状态',
      dataIndex: 'status',
      key: 'status',
      render: (_, records, index) => (
        <AccountState status={records.status}></AccountState>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record, index) => (
        <Space size="middle">
          <Button
            type="primary"
            size="small"
            disabled={record.status === '1'}
            onClick={() => noBan(record)}
          >
            解禁
          </Button>
          <Button
            type="primary"
            size="small"
            disabled={record.status === '2'}
            danger
            onClick={() => ban(record)}
          >
            封禁
          </Button>
        </Space>
      ),
    },
  ];
  // 方式一
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const { code, data } = await userList({
      data: { _page: 1, _limit: 10 },
    });

    if (code === '200') {
      setDataTable(data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // 方式二
  // const { loading, data } = useRequest(async () => {
  //   return await userList({ params: { _page: 1, _limit: 4 } });
  // });
  const ban = async (values: any) => {
    await userPatch(values.key, { data: { status: '2' } });
    fetchData();
  };

  const noBan = async (values: any) => {
    await userPatch(values.key, { data: { status: '1' } });
    fetchData();
  };

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={dataTable}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 440 }}
    />
  );
};

export default App;
