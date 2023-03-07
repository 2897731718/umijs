export default [
  { path: '/login', component: '@/pages/login', layout: false },
  // { path: '/', redirect: 'index' },
  {
    name: '首页',
    path: '/',
    component: '@/pages/index',
  },
  {
    name: '用户',
    path: '/users',
    routes: [
      {
        name: '用户列表',
        path: '/users/list',
        component: '@/pages/users/list',
      },
    ],
  },
  {
    name: '审核',
    path: '/examine',
    routes: [
      {
        name: '审核列表',
        path: '/examine/list',
        component: '@/pages/examine/list',
      },
      {
        name: '添加审核',
        path: '/examine/add',
        component: '@/pages/examine/list',
      },
    ],
  },
];
