import React from 'react';
import { Button, Checkbox, Form, Input, Card, Row, Col, message } from 'antd';
import { useModel, history } from 'umi';

import { login } from '@/api/login';

import loginImg from '@/assets/login.png';

import './index.less';
/**
 * 登录逻辑
 * - 这里使用了 layout 布局
 * 第一次进入时 根据 getInitialState 获取 登录状态 给 layout
 * layout 运行时判断 登录状态
 *  - 没登陆 就跳转到 login 页面
 *  - 恩如触发 setInitialState 来修改状态 重新触发 getInitialState 判断是否登录
 *
 */

const App: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const [messageApi, contextHolder] = message.useMessage();

  const userData = {
    username: 'admin',
    password: '111111',
    remember: false,
  };

  const onFinish = async (values: any) => {
    // 修改状态 这个函数是异步执行的 需要
    let res = await login({
      data: values,
    });
    let userInfo = {
      ...values,
      ...res.data,
    };
    if (res.code === '200') {
      values.remember &&
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      !values.remember &&
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      await setInitialState({
        isLogin: true,
        userInfo,
      });
      // 2.跳转登录页
      history.replace('/');
    } else {
      messageApi.error('登录失败');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="background">
      <div className="title">校园疫情防疫系统</div>
      <Row align="middle" className="row">
        <Col span={8} offset={8}>
          <Card title="登录" extra={<a href="#">注册</a>}>
            <Form
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              // style={{ maxWidth: 600 }}
              initialValues={userData}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 6, span: 18 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
