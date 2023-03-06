export default [
  { path: '/login', component: '@/pages/login', layout: false },
  { path: '/', redirect: 'index' },
  {
    path: '/',
    component: '@/pages/index',
    name: '首页',
    routes: [
      {
        path: '/user/list',
        component: '@/pages/users/list',
      },
    ],
  },
];
