// 这个文件中 做项目得运行时配置
import { history } from 'umi';
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

export async function getInitialState() {
  let userState = {
    isLogin: false,
    userInfo: null,
  };
  // console.log("user", userState)
  return userState;
}

// layout 运行时配置 自定义控制 layout 渲染逻辑
export const layout = ({
  initialState,
}: {
  initialState: { isLogin: boolean };
}) => {
  return {
    onPageChange: () => {
      // 此处可以根据用户得登录状态，引导用户到指定得路由访问
      // console.log("onChange", initialState)
      let { isLogin } = initialState;
      if (!isLogin) {
        history.push('/login');
      }
    },
  };
};
