import React from 'react';
import { Carousel } from 'antd';
import './index.less';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

interface childrenProps {
  imageList: any;
}

const App: React.FC<childrenProps> = (props) => {
  const { imageList } = props;

  return (
    <Carousel autoplay>
      {imageList.map((e: any) => {
        return <img className="image" src={e} alt="" />;
      })}
    </Carousel>
  );
};

export default App;
