import Mock from 'mockjs';

const Random = Mock.Random;
/*
post 通过 data 传递 body 里面取值
post 通过 params 传递 通过 query
get 传递 通过 params 取值
*/

let totalPage = 3;
let lastPageLimit = 2;
let total = 1;
let curPage = 0;
let curLimit = 0;
const dataList = Mock.mock({
  [`data|${curPage > totalPage ? lastPageLimit : curLimit}`]: [
    {
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

export default {
  'POST /app/news/list': (req, res) => {
    const { page, limit } = req.body;
    curPage = page;
    curLimit = limit;
    totalPage = 3;
    lastPageLimit = 2;
    total = limit * (totalPage - 1) + lastPageLimit;
    res.send({
      code: '200',
      data: {
        page,
        limit,
        total,
        ...dataList,
      },
    });
  },
  'DELETE /app/news/delete': (req, res) => {
    const { key } = req.body;
    console.log(key);
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].key === key) {
        dataList.splice(i, 1);
        res.send({
          code: '200',
          data: '删除成功',
        });
        return;
      }
    }
    res.send({
      code: '200',
      data: '删除失败',
    });
  },
};
