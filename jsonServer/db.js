const Mock = require('mockjs');
let Random = Mock.Random;

const homeList = Mock.mock({
  [`home|10`]: [
    {
      'id|+1': 1,
      'key|+1': 1,
      href: 'https://ant.design',
      'title|+1': `ant design part ${1}`,
      'avatar|+1': `https://joesch.moe/api/v1/random?key=${1}`,
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    },
  ],
});

const usersList = Mock.mock({
  [`users|20`]: [
    {
      'id|+1': 1,
      'key|+1': 1,
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      'status|1': ['0', '1', '2', '3'],
      name: Random.cname(),
      age: 32,
      address: Random.province(),
      tags: ['nice', 'developer'],
    },
  ],
});

const applyList = Mock.mock({
  [`apply|20`]: [
    {
      'id|+1': 1,
      'key|+1': 1,
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      'status|1': ['0', '1', '2', '3'],
      name: Random.cname(),
      age: 32,
      address: Random.province(),
      tags: ['nice', 'developer'],
    },
  ],
});

const examineList = Mock.mock({
  [`examine|20`]: [
    {
      'id|+1': 1,
      'key|+1': 1,
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      'status|1': ['0', '1', '2', '3'],
      name: Random.cname(),
      age: 32,
      address: Random.province(),
      tags: ['nice', 'developer'],
    },
  ],
});

const informationList = Mock.mock({
  [`information|20`]: [
    {
      'id|+1': 1,
      'key|+1': 1,
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      'status|1': ['0', '1', '2', '3'],
      name: Random.cname(),
      age: 32,
      address: Random.province(),
      tags: ['nice', 'developer'],
    },
  ],
});

module.exports = {
  ...homeList,
  ...usersList,
  ...applyList,
  ...examineList,
  ...informationList,
};
