const sassGlobImporter = require('node-sass-glob-importer');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const TsDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const path = require('path');
module.exports = {
  // You will want to change this to wherever your Stories will live.
  stories: ['../src/**/*.stories.[tj]sx'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register',
  ],
  webpackFinal: async config => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    config.resolve.mainFields = ['browser', 'module', 'main'];
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
              plugins: [
                require.resolve('@babel/plugin-proposal-class-properties'),
                // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
                require.resolve('babel-plugin-remove-graphql-queries'),
              ],
            },
          },
          require.resolve('ts-loader'),
          {
            loader: 'react-docgen-typescript-loader',
            options: {
              tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          // Translates CSS into CommonJS
          'style-loader',
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sassOptions: { importer: sassGlobImporter() },
            },
          },
        ],
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.plugins = [
      new TsconfigPathsWebpackPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') }),
      new TsDocgenPlugin(),
    ];
    return config;
  },
};
