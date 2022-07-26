import { useGlobalIconFont } from './components/iconfont/helper';

export default {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // usingComponents: Object.assign(useGlobalIconFont()),
  pages: [
    'pages/index/index',
    'pages/coupons/list/list',
    'pages/coupons/add/add',
    'pages/coupons/detail/detail',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
