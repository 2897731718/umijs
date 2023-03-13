const Mock = require('mockjs');
let Random = Mock.Random;

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

module.exports = {
  ...usersList,
  ...applyList,
};
