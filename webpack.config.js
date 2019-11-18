const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development', // 开发模式
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        hot: true
        // colors: true,//终端中输出结果为彩色
        // historyApiFallback: true,//不跳转
        // inline: true,//实时刷新
        // open:true
    }
}