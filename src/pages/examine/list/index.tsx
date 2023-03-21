import React, { useEffect, useState } from 'react';
import { Space, Table, Modal, Button, Form, Input } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';

import { useDispatch, useSelector } from 'umi';

import AuditState from '@/components/AuditState';

import '@/pages/index.less';

interface DataType {
  key: string;
  name: string;
  classes: number | string;
  studId: number | string;
  reason: string;
  address: string;
  auditState: string | number;
  // tags: string[];
}

interface PageProps {
  apply: any;
  loading: boolean;
  dispatch: any;
}

interface keyValueType {
  [key: string]: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
}

const formMap: keyValueType = {
  name: '姓名',
  classes: '班级',
  studId: '学号',
  reason: '原因',
  address: '过境信息',
  // auditState: "",
};

const getRandomParams = (params: TableParams) => ({
  _page: params.pagination?.current,
  _limit: params.pagination?.pageSize,
});

/**
 * props 可以结构出 module 里面的 reducer 传递过来的参数
 * @param props
 * @returns
 */
const App: React.FC<PageProps> = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(({ apply, loading }: any) => ({
    data: apply.data.data,
    loading: loading.models.apply,
  }));
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
      title: '离校原因',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: '过境信息',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '审核状态',
      dataIndex: 'auditState',
      key: 'auditState',
      render: (_, records, index) => (
        <AuditState auditState={records.auditState}></AuditState>
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
            disabled={record.auditState === '2'}
            onClick={() => applyPass(record)}
          >
            通过
          </Button>
          <Button
            type="primary"
            size="small"
            disabled={record.auditState === '3'}
            danger
            onClick={() => applyReject(record)}
          >
            驳回
          </Button>
        </Space>
      ),
    },
  ];
  const dataTable = data ? data?.reverse() : [];
  const [isAdd, setIsAdd] = useState(false);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [parent, setParent] = useState({
    type: 'pass',
    key: '1',
  });

  // 获取 pageSize
  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      // setData([])
    }
  };

  const [formData, setFormData] = useState<keyValueType>({
    name: '',
    classes: '',
    studId: '',
    reason: '',
    address: '',
  });

  useEffect(() => {
    // console.log("153", getRandomParams(tableParams))
    dispatch({
      type: 'apply/getTable',
      payload: { data: null },
    });
  }, [JSON.stringify(tableParams)]);

  // 确认提交按钮
  const defineAdd = async (values: any, type: string) => {
    if (type === 'pass') {
      await dispatch({
        type: 'apply/patch',
        payload: { key: values.key, data: { auditState: '2' } },
      });
    } else if (type === 'reject') {
      await dispatch({
        type: 'apply/patch',
        payload: { key: values.key, data: { auditState: '3' } },
      });
    }
    await dispatch({
      type: 'apply/getTable',
    });
  };
  // modal 展示
  const cancelShowAdd = () => setIsAdd(!isAdd);

  const applyPass = async (values: any) => {
    defineAdd(values, 'pass');
  };

  const applyReject = async (values: any) => {
    defineAdd(values, 'reject');
  };

  return (
    <>
      {/* <Button type="primary" className='margin-xs' onClick={cancelShowAdd}>添加申请</Button> */}
      <Table
        className="padding-xs"
        columns={columns}
        dataSource={dataTable}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
        loading={loading}
      />
      <Modal
        title="请假申请"
        open={isAdd}
        onCancel={cancelShowAdd}
        okText="确认"
        cancelText="取消"
        confirmLoading={isLoading}
      >
        <Form form={form}>
          {Object.keys(formData).map((item, index) => (
            <Form.Item
              key={index}
              name={item}
              label={formMap[item]}
              initialValue={formData[item] ? formData[item] : ''}
            >
              <Input placeholder={`请输入${item}`} />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};

export default App;
