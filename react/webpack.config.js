var wepack = require("webpack")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
	  rules: [{
	    test: /\.js$/,
	    exclude: /node_modules/,
	    loaders: [
	      'babel-loader?' +
	        'presets[]=es2016,' +
	        'presets[]=stage-0,' +
	        'presets[]=react'
	      ]
	  }] 
	}
}