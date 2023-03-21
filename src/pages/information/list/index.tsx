import React, { useEffect, useState } from 'react';
import { Space, Table, Modal, Button, Form, Input } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';

import { useDispatch, useSelector } from 'umi';

import AuditState from '@/components/AuditState';

import '@/pages/index.less';

interface DataType {
  key: string;
  title: string;
  content: string;
  url: string;
  createTime: string;
  auditState: string | number;
  // tags: string[];
}

interface PageProps {
  information: any;
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
  title: '标题',
  content: '内容',
  url: '链接',
  createTime: '创建时间',
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
  const { data, loading } = useSelector(({ information, loading }: any) => ({
    data: information.data.data,
    loading: loading.models.information,
  }));
  const columns: ColumnsType<DataType> = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '连接',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
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
            onClick={() => informationEdit(record)}
          >
            编辑
          </Button>
          <Button
            type="primary"
            size="small"
            danger
            onClick={() => informationDelete(record.key)}
          >
            删除
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
    type: 'add',
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
    title: '',
    content: '',
    url: '',
    createTime: '',
  });

  useEffect(() => {
    // console.log("153", getRandomParams(tableParams))
    dispatch({
      type: 'information/getTable',
      payload: { data: null },
    });
  }, [JSON.stringify(tableParams)]);

  // 确认提交按钮
  const defineAdd = async () => {
    setIsLoading(true);
    const data = form.getFieldsValue();

    if (parent.type === 'add') {
      data.auditState = '1';
      data.key = dataTable.length + 1;

      await dispatch({
        type: 'information/add',
        payload: { data },
      });
    } else if (parent.type === 'edit') {
      await dispatch({
        type: 'information/patch',
        payload: { key: parent.key, data },
      });
    }
    await dispatch({
      type: 'information/getTable',
    });

    setIsLoading(false);
    setParent({
      type: 'add',
      key: '1',
    });

    form.resetFields();
    cancelShowAdd();
  };
  // modal 展示
  const cancelShowAdd = () => setIsAdd(!isAdd);

  const informationEdit = (values: any) => {
    form.setFieldsValue({
      title: values.title,
      content: values.content,
      url: values.url,
      createTime: values.createTime,
    });
    setParent({
      type: 'edit',
      key: values.key,
    });
    cancelShowAdd();
  };

  const informationDelete = (key: string) => {
    dispatch({
      type: 'information/remove',
      payload: { key },
    });
    dispatch({
      type: 'information/getTable',
    });
  };

  return (
    <>
      <Button type="primary" className="margin-xs" onClick={cancelShowAdd}>
        添加申请
      </Button>
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
        onOk={defineAdd}
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
