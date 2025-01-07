module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // 이게 반드시 plugins 배열의 마지막에 있어야 합니다!
  ],
};
