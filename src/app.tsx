// 这个文件中 做项目得运行时配置
import { history } from 'umi';
import { BasicLayoutProps } from '@ant-design/pro-layout';
import { message } from 'antd';

import HeaderDropMenu from '@/components/HeaderDropMenu/index';

import { menu } from './api/login';
// import { RequestConfig } from 'umi';

// export const request: RequestConfig = {
//   timeout: 1000,
//   errorConfig: {},
//   middlewares: [],
//   // 请求拦截器
//   requestInterceptors: [
//     (url?: (string), options?: any) => {
//       options.url = "" + url
//       options.headers = {
//         "Content-Type": "application/json",
//       }
//       return options
//     }
//   ],
//   // 相应拦截器
//   responseInterceptors: [
//     async (response?: any, options?: any): Promise<any> => {
//       console.log("响应拦截", response)
//       return response
//     }
//   ],
// };

export const dva = {
  config: {
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
};

export async function getInitialState() {
  let info =
    localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');
  let userState = {
    isLogin: info ? true : false,
    userInfo: info ? JSON.parse(info) : null,
  };
  return userState;
}

// layout 运行时配置 自定义控制 layout 渲染逻辑
export const layout = ({
  initialState,
}: {
  initialState: { isLogin: boolean; userInfo: any };
}): BasicLayoutProps => {
  return {
    onPageChange: () => {
      // 此处可以根据用户得登录状态，引导用户到指定得路由访问
      // console.log('onChange', initialState);
      let { isLogin } = initialState;
      if (!isLogin) {
        history.replace('/login');
      }
    },
    rightContentRender: () => {
      return <HeaderDropMenu></HeaderDropMenu>;
    },
    menu: {
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request
      params: {
        userId: initialState?.userInfo?.userId,
      },
      request: async (params, defaultMenuData) => {
        // initialState.currentUser 中包含了所有用户信息
        const { data } = await menu({
          data: { userId: params.userId },
        });
        // console.log('menu', data);
        return data;
      },
    },
  };
};
