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
	],
};
