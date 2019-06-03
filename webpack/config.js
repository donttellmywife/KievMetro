const { resolve } = require('path')

const HTML = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  context: resolve('src'),
  entry: {
    bundle: ['./index.js']
  },
  output: {
    path: resolve('dist'),
    chunkFilename: '[name].[id].js',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte']
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode,
  plugins: [
    new HTML({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devtool: prod ? false: 'source-map'
};
