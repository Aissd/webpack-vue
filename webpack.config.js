const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 配置入口文件
	entry: './src/index.js',
	// 配置出口文件
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
	},
	mode: 'development',
	// 添加插件
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
			filename: 'index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		// 导出时识别vue
		extensions: ['.js', '.css', '.vue'],
		// 模板语法支持
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
	},
};