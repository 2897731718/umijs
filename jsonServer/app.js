const jsonServer = require('json-server');
const path = require('path');
const db = require('./db.js');
// const Mock = require("mockjs")

// console.log("data", db)
const port = 8000;

const server = jsonServer.create();

const middlewares = jsonServer.defaults();
// const router = jsonServer.router(path.join(__dirname, 'db.json'));
const router = jsonServer.router(db);

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  next();
});

// 登录校验
server.post('/app/login', (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;
  // console.log(username, password);
  if (username === 'admin' && password === '111111') {
    res.jsonp({
      success: true,
      code: '200',
      data: { userId: 'admin' },
    });
  } else if (username === 'user' && password === '111111') {
    res.jsonp({
      success: true,
      code: '200',
      data: { userId: 'user' },
    });
  } else {
    res.jsonp({
      success: true,
      errorCode: '401',
      errorMessage: '登录失败',
    });
  }
});
server.post('/app/menu', (req, res) => {
  // console.log(req.body);
  const { userId } = req.body;
  if (userId === 'user') {
    res.jsonp({
      success: true,
      code: '200',
      data: [
        {
          name: '首页',
          path: '/',
          component: '@/pages/home',
          // icon: "AreaChartOutlined",
        },
        {
          name: '我的申请',
          path: '/apply',
          // icon: "AreaChartOutlined",
          routes: [
            {
              name: '申请列表',
              path: '/apply/list',
              component: '@/pages/apply/list',
            },
            // {
            //   name: '申请录入',
            //   path: '/apply/add',
            //   component: '@/pages/apply/add',
            // },
          ],
        },
      ],
    });
  } else if (userId === 'admin') {
    res.jsonp({
      success: true,
      code: '200',
      data: [
        {
          name: '数据统计',
          path: '/',
          component: '@/pages/home',
          // icon: "AreaChartOutlined",
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
            // {
            //   name: '添加审核',
            //   path: '/examine/add',
            //   component: '@/pages/examine/add',
            // },
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
            // {
            //   name: '信息添加',
            //   path: '/information/add',
            //   component: '@/pages/information/add',
            // },
          ],
        },
      ],
    });
  } else {
    res.jsonp({
      success: true,
      code: '200',
      data: [],
    });
  }
});

server.use(router);

router.render = (req, res) => {
  // console.log(res.locals);
  res.jsonp({
    code: '200',
    data: res.locals.data,
  });
};

server.listen(port, () => {
  console.log('running');
});
