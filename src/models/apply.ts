import { Effect, Subscription } from 'dva';

import { applyList, applyDelete } from '../api/apply';

const namespace = 'apply';

interface applyType {
  namespace: string;
  state: any;
  reducers: {};
  effects: {
    getTable: Effect;
    remove: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const initState = {
  data: [],
};

const ApplyModel: applyType = {
  namespace,
  // connect 接收到的数据
  state: initState,
  // 处理同步业务
  reducers: {
    // 第一个参数 接收的是 dispatch 传递的 payload ? 名字固定吗 还是可以自己命名
    // 第二个参数 是 put 返回过来的 payload
    // 接收上方 state 中的数据 action { type, payload}
    getList: (state: any, action: any) => {
      console.log(state, action);
      return { ...state, data: action.payload };
    },
    test: () => {
      return [111];
    },
  },
  effects: {
    // 这里每个函数都有两个参数，( action, effect ), effect = { put, call, select }
    *getTable(action, { call, put }) {
      // call 执行异步函数，比如请求
      try {
        // call 第一个参数传递 异步方法 他会帮忙调用 第二个参数传递 第一个方法的参数
        const { data } = yield call(applyList, {
          params: { _page: 1, _limit: 10 },
        });
        yield put({
          type: 'getList',
          payload: { data }, // 这里直接返回data会获取不到数据，因此我用对象又包了一层
        });
      } catch (error) {
        console.log(error);
      }
    },
    *remove(action, { call, put }) {
      const { key } = action.payload;
      yield call(applyDelete, key);
      const { data } = yield call(applyList, {
        params: { _page: 1, _limit: 10 },
      });
      yield put({
        type: 'getList',
        payload: { data }, // 这里直接返回data会获取不到数据，因此我用对象又包了一层
      });
    },
  },
  // 订阅 可以用作到达某一个路由时 进行什么操作 比如获取 数据
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        // console.log(location.query)
        if (location.pathname === '/apply/list') {
          /**
           * type 表示 调用的参数
           * 第二个参数 payload 传递 参数
           *   这传递的参数 可以由上方 reducer effect 中方法的第一个参数接收
           *   场景：table 点击 传递 id 由 query 接收后传递 给对象的方法 调用相应的异步方法
           */
          dispatch({
            type: 'getTable',
          });
        }
      });
    },
  },
};

export default ApplyModel;
