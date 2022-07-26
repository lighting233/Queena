/* eslint-disable */
console.log(111111111111,`components/iconfont/${process.env.TARO_ENV}/${process.env.TARO_ENV}`)
const useGlobalIconFont = () => {
  return {
    // iconfont: `components/iconfont/${process.env.TARO_ENV}/${process.env.TARO_ENV}`,
    iconfont: `components/iconfont/h5/h5`,
  };
};

// es modules is unavaiable.
module.exports.useGlobalIconFont = useGlobalIconFont;
