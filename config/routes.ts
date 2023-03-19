export default [
  { path: '/login', component: '@/pages/login', layout: false },
  // { path: '/', redirect: 'index' },
  {
    name: '首页',
    path: '/',
    component: '@/pages/home',
    icon: 'AreaChartOutlined',
    hideInBreadcrumb: false,
  },
  // {
  //   name: '数据统计',
  //   path: '/',
  //   component: '@/pages/statistics',
  //   icon: 'AreaChartOutlined',
  //   hideInBreadcrumb: false,
  // },
  {
    name: '我的申请',
    path: '/apply',
    icon: 'AreaChartOutlined',
    routes: [
      {
        name: '申请列表',
        path: '/apply/list',
        component: '@/pages/apply/list',
      },
      {
        name: '申请录入',
        path: '/apply/add',
        component: '@/pages/apply/add',
      },
    ],
  },
  {
    name: '用户管理',
    path: '/users',
    icon: 'AreaChartOutlined',
    routes: [
      {
        name: '用户列表',
        path: '/users/list',
        component: '@/pages/users/list',
      },
    ],
  },
  {
    name: '审核管理',
    path: '/examine',
    icon: 'AreaChartOutlined',
    routes: [
      {
        name: '审核列表',
        path: '/examine/list',
        component: '@/pages/examine/list',
      },
      {
        name: '添加审核',
        path: '/examine/add',
        component: '@/pages/examine/add',
      },
    ],
  },
  {
    name: '信息管理',
    path: '/information',
    icon: 'AreaChartOutlined',
    routes: [
      {
        name: '信息列表',
        path: '/information/list',
        component: '@/pages/information/list',
      },
      {
        name: '信息添加',
        path: '/information/add',
        component: '@/pages/information/add',
      },
    ],
  },
];
