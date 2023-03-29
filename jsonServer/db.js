const Mock = require('mockjs');
let Random = Mock.Random;

const homeList = Mock.mock({
  [`home|10`]: [
    {
      'id|+3': 1,
      'key|+3': 1,
      href: 'http://www.moe.gov.cn/jyb_xwfb/s5148/202009/t20200901_483904.html',
      title: `精准做好校园常态化疫情防控`,
      avatar: `https://joesch.moe/api/v1/random?key=${1}`,
      description:
        '如何确保安全开学、正常开学、全面开学，有序推进教育教学工作，是教育系统最为重要的任务.',
      content:
        '实现正常开学、全面开学的前提是安全，是校园防疫安全、是师生生命安全和身体健康得到切实保障。目前，我国疫情的大规模传播已被彻底阻断，全面复工复产取得显著成效，这是全面恢复正常教育教学秩序的基础条件。同时，教育系统在疫情防控期间启动在线教学，在春季学期陆续开学，取得了疫情防控和恢复正常教育教学秩序的双重成功，也为秋季学期全面恢复正常教学秩序，积累了经验、奠定了基础。',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    },
    {
      'id|+3': 2,
      'key|+3': 2,
      href: 'https://mp.weixin.qq.com/s?__biz=MzI5ODcwODcxOQ==&mid=2247488300&idx=4&sn=8cd0a14646710835e2ab8a83778f9c02&chksm=eca0e8acdbd761badbca8ed0a26c773da31adc12aea76c28365cc3e8af2754a78578badc14fb&scene=27',
      title: `疫”视角下的校园`,
      avatar: `https://joesch.moe/api/v1/random?key=${1}`,
      description: '快来pick你喜欢的作品吧',
      content:
        '为了弘扬抗疫精神，宣传延边大学珲春校区在进行抗疫工作中的动人事迹，展现疫情防控期间学生及老师们的校园生活，加强学生对校园的热爱和责任感，延边大学珲春校区传媒社组织开展“‘疫’视角下的校园”主题摄影大赛，经过初轮筛选，将符合格式要求的作品进行公示投票，没有选上的小伙伴们也不要灰心，以下为作品展示，请大家为优秀作品投一票！',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    },
    {
      'id|+3': 3,
      'key|+3': 3,
      href: 'https://new.qq.com/rain/a/20230322A04SHE00',
      title: `中小学校重点人群诺如病毒防控核心要点之教师员工从业人员篇`,
      avatar: `https://joesch.moe/api/v1/random?key=${1}`,
      description:
        '中小学校重点人群诺如病毒感染防控核心要点之教师与食堂从业人员篇',
      content:
        '诺如病毒具有传染性强，感染剂量低、排毒时间长、变异速度快、免疫保护时间短和全人群普遍易感等特点，使其成为全球急性胃肠炎散发病例和暴发疫情的主要致病原。每年10月至次年3月是诺如病毒感染的高发季节，极易在社区、学校、托幼机构等集体单位引起流行、暴发，舆论对此关注度较高',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    },
  ],
});

const usersList = Mock.mock({
  [`users`]: [
    {
      'id|+3': 1,
      'key|+3': 1,
      'status|1': ['1', '2'],
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      name: Random.cname(),
      age: 20,
      address: Random.province(),
      studId: '20191923',
      classes: '1910',
    },
    {
      'id|+3': 2,
      'key|+3': 2,
      'status|1': ['1', '2'],
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      name: Random.cname(),
      age: 20,
      address: Random.province(),
      studId: '20191923',
      classes: '1910',
    },
    {
      'id|+3': 3,
      'key|+3': 3,
      'status|1': ['1', '2'],
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      name: Random.cname(),
      age: 20,
      address: Random.province(),
      studId: '20191923',
      classes: '1910',
    },
  ],
});

const applyList = Mock.mock({
  [`apply|20`]: [
    {
      'id|+3': 1,
      'key|+3': 1,
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      // 'status|1': ['0', '1', '2', '3'],
      name: Random.cname(),
      studId: '20191923',
      classes: '1910',
      'auditState|1': ['1', '2', '3'],
      reason: '生病了',
      address: Random.province(),
      tags: ['nice', 'developer'],
    },
    {
      'id|+3': 2,
      'key|+3': 2,
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      // 'status|1': ['0', '1', '2', '3'],
      name: Random.cname(),
      studId: '20191923',
      classes: '1910',
      'auditState|1': ['1', '2', '3'],
      reason: '生病了',
      address: Random.province(),
      tags: ['nice', 'developer'],
    },
    {
      'id|+3': 3,
      'key|+3': 3,
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      // 'status|1': ['0', '1', '2', '3'],
      name: Random.cname(),
      studId: '20191923',
      classes: '1910',
      'auditState|1': ['1', '2', '3'],
      reason: '生病了',
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
      // 'status|1': ['0', '1', '2', '3'],
      name: Random.cname(),
      studId: '20191923',
      classes: '1910',
      'auditState|1': ['1', '2', '3'],
      reason: '生病了',
      address: Random.province(),
      tags: ['nice', 'developer'],
    },
  ],
});

const informationList = Mock.mock({
  [`information|5`]: [
    {
      'id|+2': 1,
      'key|+2': 1,
      'auditState|1': ['1', '2', '3'],
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      title: Random.csentence(1, 8),
      content: Random.csentence(1, 8),
      url: Random.url(),
      link: Random.image(),
    },
    {
      'id|+2': 2,
      'key|+2': 2,
      'auditState|1': ['1', '2', '3'],
      createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      title: Random.csentence(1, 8),
      content: Random.csentence(1, 8),
      url: Random.url(),
      link: Random.image(),
    },
  ],
});

module.exports = {
  ...homeList,
  ...usersList,
  ...applyList,
  ...informationList,
  ...examineList,
};
