var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');

var configPlugins = [
    new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom'
    }),
    /* 抽取出chunk的css */
  	new ExtractTextPlugin('[name]/styles.css'),
  	 /* 抽取出所有通用的部分 */
	  new webpack.optimize.CommonsChunkPlugin({
	    name: 'commons/commons',      // 需要注意的是，chunk的name不能相同！！！
	    filename: '[name]/bundle.js',
	    minChunks: 4,
	  }),
     new OpenBrowserPlugin({
      url: 'http://localhost:8080/build/home/index/layout.html'
    })
]

pageArr.forEach((page) => {
var main = '../src/pages/course/index/index.jsx';
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}/layout.html`,
    template: path.resolve(dirVars.pagesDir, 'layout.html'),
    inject: true, //js插入的位置，true/'head'/'body'/false
    hash: true, //为静态资源生成hash值，
    chunks: [page, 'commons/commons'],

  });
  configPlugins.push(htmlPlugin);
});
module.exports = configPlugins;