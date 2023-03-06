const Mock = require('mockjs');
let random = Mock.Random;

module.exports = () => {
  Mock.mock({
    'news|3': [
      {
        'id|+1': 1000,
        title: '@ctitle(8, 12)',
      },
    ],
  });
};
