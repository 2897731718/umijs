import routes from './routes';

export default {
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  antd: {},
  dva: {
    skipModelValidate: true,
    disableModelsReExport: true,
    lazyLoad: true,
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: '校园疫情防控系统',
    locale: true,
    layout: 'side',
  },
};
