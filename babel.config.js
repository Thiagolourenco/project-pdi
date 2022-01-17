module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@store': './src/store',
          '@graphql': './src/graphql',
          '@pages': './src/pages',
          '@types': './src/@types',
        },
      },
    ],
  ],
};
