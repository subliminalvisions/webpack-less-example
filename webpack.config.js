const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
      },
      devServer: {
        contentBase: './deploy',
        open: true
      },      
      module: {
        rules: [
          {
            test: /\.(less)$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'less-loader' // compiles Less to CSS
            }]
          },
          { 
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
        ]
      },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      title: "Webpack Output test2",
    }),
    new CleanWebpackPlugin()
  ],
};
