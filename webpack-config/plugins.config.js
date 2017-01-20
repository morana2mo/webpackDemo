var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');

var configPlugins = [
    new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        filename: "[name]/commons.js",
        minChunks : 3,  
    }),
    /* 抽取出chunk的css */
  	new ExtractTextPlugin('[name]/styles.css'),
]


pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}/layout.html`,
    template: path.resolve(dirVars.pagesDir, `${page}/layout.html`),
    inject: true, //js插入的位置，true/'head'/'body'/false
    hash: true, //为静态资源生成hash值
    minify: { //压缩HTML文件    
      removeComments: true, //移除HTML中的注释
      collapseWhitespace: false //删除空白符与换行符
    }
  });
  configPlugins.push(htmlPlugin);
});
module.exports = configPlugins;