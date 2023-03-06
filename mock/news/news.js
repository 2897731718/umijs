import Mock from 'mockjs';

export default {
  'GET /app/news/list': (req, res) => {
    console.log(res, req);
    const { page, limit } = req.query;
    const totalPage = 3;
    const lastPageLimit = 2;
    const total = limit * (totalPage - 1) + lastPageLimit;
    res.send({
      code: '200',
      data: {
        page,
        limit,
        total,
        ...Mock.mock({
          [`data|${page > totalPage ? lastPageLimit : limit}`]: [
            {
              'id|+1': 1,
              createTime: '@date("yyyy-MM-dd HH:mm:ss")',
              'status|1': ['0', '1', '2', '3'],
            },
          ],
        }),
      },
    });
  },
};
