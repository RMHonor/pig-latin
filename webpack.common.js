const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: `${__dirname}/src`,

  entry: {
    bundle: ['./index.jsx', './assets/style/main.scss'],
  },

  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?sourceMap'],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};