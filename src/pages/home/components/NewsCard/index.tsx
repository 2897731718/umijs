import type Icon from '@ant-design/icons';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Card } from 'antd';
import React, { useState } from 'react';

import './index.less';
interface IconTextProps {
  icon: typeof Icon;
  text: React.ReactNode;
}
interface itemType {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
  img: string;
}
interface ChildrenProps {
  listData: Array<itemType>;
  loading: boolean;
}

const IconText: React.FC<IconTextProps> = ({ icon, text }) => (
  <>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </>
);

const App: React.FC<ChildrenProps> = (props: ChildrenProps) => {
  const listData = props.listData;
  const loading = props.loading;
  const openHref = (href: string) => {
    window.open(href);
  };
  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} style={{ marginBottom: 16 }} /> */}
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <Card className="card">
            <List.Item key={item.title} onClick={() => openHref(item.href)}>
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  // avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          </Card>
        )}
      />
    </>
  );
};

export default App;
