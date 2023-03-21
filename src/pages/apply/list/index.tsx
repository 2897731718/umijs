import React, { useEffect, useState } from 'react';
import { Space, Table, Modal, Button, Form, Input } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';

import { connect } from 'umi';

import AuditState from '@/components/AuditState';

import '@/pages/index.less';
import { applyDelete } from '@/api/apply';
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
          <Button type="primary" size="small" onClick={() => applyEdit(record)}>
            编辑
          </Button>
          <Button
            type="primary"
            size="small"
            danger
            onClick={() => applyDelete(record.key)}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];
  // const [data, setData] = useState([])
  const dataTable = apply?.data?.reverse();
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
  const defineAdd = async () => {
    setIsLoading(true);
    const data = form.getFieldsValue();

    if (parent.type === 'add') {
      data.auditState = '1';
      data.key = dataTable.length + 1;

      await dispatch({
        type: 'apply/add',
        payload: { data },
      });
    } else if (parent.type === 'edit') {
      await dispatch({
        type: 'apply/patch',
        payload: { key: parent.key, data },
      });
    }
    await dispatch({
      type: 'apply/getTable',
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

  const applyEdit = (values: any) => {
    form.setFieldsValue({
      name: values.name,
      classes: values.classes,
      studId: values.studId,
      reason: values.reason,
      address: values.address,
    });
    setParent({
      type: 'edit',
      key: values.key,
    });
    cancelShowAdd();
  };

  const applyDelete = (key: string) => {
    dispatch({
      type: 'apply/remove',
      payload: { key },
    });
    dispatch({
      type: 'apply/getTable',
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
/**
 * 通过 connect 连接 model 中的 namespace 获取 reducer 中的 数据
 * 并且 该函数必须返回参数 props 才能接收到传过来的值
 * connect 是连接的桥梁
 * @param state 可以接收到所有 model 注册的数据 如果需要哪一个 model 中的数据 就需要根据 namespace 对应的名称进行结构获取
 * @returns
 */
const connectFun = (state: { apply: any; loading: any }) => {
  // console.log("state", state.apply)
  return {
    apply: state.apply?.data,
    loading: state.loading.models.index,
  };
};

export default connect(connectFun)(App);
