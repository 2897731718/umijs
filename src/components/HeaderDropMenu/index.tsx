import React from 'react';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

import { useModel, history } from 'umi';

const items: MenuProps['items'] = [
  {
    label: '个人设置',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '退出登录',
    key: '2',
    icon: <LoginOutlined />,
  },
];

const App: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const res =
    localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // message.info('Click on left button.');
    // console.log('click left button', e);
  };

  const handleMenuClick: MenuProps['onClick'] = async ({ key }) => {
    if (key === '2') {
      // 清楚本地存储
      localStorage.removeItem('userInfo');
      sessionStorage.removeItem('userInfo');
      // 清除 setInitialState
      await setInitialState({
        isLogin: true,
        userInfo: null,
      });
      // 跳转
      history.replace('/login');
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Space wrap>
      {res ? (
        <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
          {JSON.parse(res).username}
        </Dropdown.Button>
      ) : null}
    </Space>
  );
};
export default App;
