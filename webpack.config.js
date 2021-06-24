'use strict';
/** 使用插件html-webpack-plugin打包合并html
 * 使用插件extract-text-webpack-plugin打包独立的css(2.0开始废弃压缩，要使用@intervolga/optimize-cssnano-plugin
 进行css压缩)
 * 使用UglifyJsPlugin（webpack 4 开始不自带）压缩代码 ，要下载UglifyJs-webpack-plugin插件
 * 使用CleanWebpackPlugin清空文件夹
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const resolve = dir => {
  return path.join(__dirname, dir);
};

const config = (mode = 'development') =>  {
  return {
    entry: {
      index: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[hash].js'
    },
    resolve: {
      alias: {
        'urlConfig$': path.resolve(__dirname, `config/urlConfig.${mode}.js`),
        '@': resolve('src'),
      },
      extensions: ['.js']
    },
    module: {
      rules: [{
          test: /\.css$/,
          exclude: /(node_modules|bower_components)/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", 'postcss-loader']
          })
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 4096
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ // 生成合并html
        title: 'react recruit',
        template: './public/index.html',
        filename: 'index.html',
        chunks: ['index']
      }),
      new ExtractTextPlugin('[name].[hash].css'),
    ]
  }
};
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config(argv.mode).devtool = 'source-map';
  }
  if (argv.mode === 'production') {
    config(argv.mode).plugins.push(
      new OptimizeCssnanoPlugin({ // 压缩css
        sourceMap: true,
        cssnanoOptions: {
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
          }],
        },
      }),
      new UglifyJSPlugin({
        uglifyOptions: {
          warnings: false, //当删除没有用处的代码时，显示警告
          compress: { //压缩代码
            dead_code: true, //移除没被引用的代码
            loops: true //当do、while 、 for循环的判断条件可以确定是，对其进行优化
          },
          except: ['$super', '$', 'exports', 'require'] //混淆,并排除关键字
        }
      }),
      new CleanWebpackPlugin(['build'])
    );
  }
  return config(argv.mode);
}