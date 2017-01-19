var ExtractTextPlugin = require('extract-text-webpack-plugin');
var dirVars = require('./webpack-config/base/dir-vars.config.js');
module.exports = {
	entry: require('./webpack-config/entry.config.js'),
    output: require('./webpack-config/output.config.js'),
    module:{
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
	},
    resolve: require('./webpack-config/resolve.config.js'),
    plugins: require('./webpack-config/plugins.config.js')
	
};