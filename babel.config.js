module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          assets: './src/assets/',
          components: './src/components/',
          constants: './src/constants/',
          routes: './src/routes/',
          screens: './src/screens',
          src: './src'
        }
      }
    ]
  ]
};
