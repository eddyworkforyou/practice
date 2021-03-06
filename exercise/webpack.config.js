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
	  	},
	  	{
	  		test: /\.json$/,
	  		exclude: /(node_modules)/,
	  		loader: "json-loader"
	  	},
	  	{
	  		test: /\.css$/,
	  		loader: 'style-loader!css-loader!postcss-loader'
	  	},
	  	{
	  		test: /\.scss$/,
	  		loader: 'style-loader!css-loader!postcss-loader!sass-loader'
	  	}] 
	}
}