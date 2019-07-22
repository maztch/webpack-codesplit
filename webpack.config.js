const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    entry: {
    	app: "./src/index.js"
    },
	output: {
	    path: path.resolve(__dirname, 'dist/'),
	    filename: '[name].bundle.js',
	    chunkFilename: '[name].bundle.js',	//chunk external libraries
	},
    devServer: {
        contentBase: 'dist'
    },
    module: {
	  rules: [
	    { 
	    	test: /\.js$/, 
	    	exclude: /node_modules/, 
	    	loader: "babel-loader" 
	    }
	  ]
	},	
	plugins: [
	    new HtmlWebPackPlugin({
	      template: "./src/index.html",
	      filename: "./index.html",
	      inlineSource: '.(js|css)$' // embed all javascript and css inline, comment this line for a standard use 
	    }),
	    new HtmlWebpackInlineSourcePlugin()  // embed all javascript and css inline, comment this line for a standard use 
	]
};