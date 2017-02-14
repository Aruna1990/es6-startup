var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	entry: {
		main: "./src/index.js"
	},
	output: {
		filename: "[name].js",
		path: path.resolve("dist")
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: 'css-loader'
			})
		}, { 
			test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
			use: ExtractTextPlugin.extract({
				use: 'file-loader'
			})
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor'],
			minChunks: function (module) {
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		new ChunkManifestPlugin({
			filename: 'chunk-manifest.json',
			manifestVariable: 'webpackManifest'
		}),
		new ManifestPlugin({
			basePath: 'dist/'
		})
	]
};