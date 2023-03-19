import React from 'react';

import Browsing from './browsing/index';
import Statistics from './statistics/index';

export default function home() {
  const userInfo =
    sessionStorage.getItem('userInfo') || localStorage.getItem('userInfo');
  let div = null;
  if (userInfo) {
    div =
      JSON.parse(userInfo).username === 'admin' ? <Statistics /> : <Browsing />;
  }
  return div;
}
