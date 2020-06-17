const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsWebpackPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
  });
};
