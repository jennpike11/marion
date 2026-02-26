const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const css_gen = new MiniCssExtractPlugin({
	filename: '[name]-styles.css'
});
const clean_webpack = new CleanWebpackPlugin();

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'scripts.js'
	},
	mode: 'development',
	watch: false,
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							api: 'modern',
							sassOptions: {
								includePaths: [
									path.resolve(__dirname, 'app/scss'),
									path.resolve(__dirname, 'app/scss/components')
								],
							},
						}
					}
				]
			},
			{
				test: /\.(txt|html)$/i,
				type: 'asset/source'
			}
		]
	},
	plugins: [
		clean_webpack,
		css_gen,
		new webpack.ProvidePlugin({
			React: 'react'
		})
	]
};