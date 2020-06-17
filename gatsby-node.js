exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsWebpackPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
  });
};
