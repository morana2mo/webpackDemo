var ExtractTextPlugin = require('extract-text-webpack-plugin');
var dirVars = require('./base/dir-vars.config.js');
module.exports  = {
	 loaders:[
			{
				test:  /\.jsx?$/,
		        loader: 'babel',
		        exclude: /node_modules/,
		        query: {
		          presets: ['es2015', 'react']
		        }
			},   
		    {
		      	test: /\.css$/,
		      	include: dirVars.srcRootDir,
		     	loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		    },
		    {
		      	test: /\.less$/,
		      	include: dirVars.srcRootDir,
		     	loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
		    },
		    {
		     	test: /\.html$/,
		      	include: dirVars.srcRootDir,
		      	loader: 'html',
		      	query: {
			     	minimize: true
			    }
		    }, 
		    {
		      // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
		      // 如下配置，将小于8192byte的图片转成base64码
		      test: /\.(png|jpg|gif)$/,
		      include: dirVars.srcRootDir,
		      loader: 'url?limit=8192&name=./static/img/[hash].[ext]',
		    }, 
	],
};
