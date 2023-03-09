const codeMessage: { [propName: string]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

export default {
  'POST /app/login': (req: any, res: any) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (username === 'admin' && password === '111111') {
      res.send({
        success: true,
        code: '200',
        data: { userId: 'admin' },
      });
    } else if (username === 'user' && password === '111111') {
      res.send({
        success: true,
        code: '200',
        data: { userId: 'user' },
      });
    } else {
      res.send({
        success: true,
        errorCode: '401',
        errorMessage: '登录失败',
      });
    }
  },
  'POST /app/menu': (req: any, res: any) => {
    const { userId } = req.body;
    if (userId === 'user') {
      res.send({
        success: true,
        code: '200',
        data: [
          {
            name: '首页',
            path: '/',
            component: '@/pages/home/browsing',
            // icon: "AreaChartOutlined",
          },
        ],
      });
    } else if (userId === 'admin') {
      res.send({
        success: true,
        code: '200',
        data: [
          {
            name: '数据统计',
            path: '/',
            component: '@/pages/statistics',
            // icon: "AreaChartOutlined",
          },
          {
            name: '我的申请',
            path: '/apply',
            // icon: "AreaChartOutlined",
            routes: [
              {
                name: '申请录入',
                path: '/apply/add',
                component: '@/pages/apply/list',
              },
              {
                name: '申请列表',
                path: '/apply/list',
                component: '@/pages/apply/list',
              },
            ],
          },
          {
            name: '用户管理',
            path: '/users',
            // icon: "AreaChartOutlined",
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
            // icon: "AreaChartOutlined",
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
          {
            name: '信息管理',
            path: '/information',
            // icon: "AreaChartOutlined",
            routes: [
              {
                name: '信息列表',
                path: '/information/list',
                component: '@/pages/information/list',
              },
              {
                name: '信息添加',
                path: '/information/add',
                component: '@/pages/information/list',
              },
            ],
          },
        ],
      });
    } else {
      res.send({
        success: true,
        code: '200',
        data: [],
      });
    }
  },
};
