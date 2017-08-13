var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].bundle.js'
  },

  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: __dirname+'/node_modules',
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loaders: ['url-loader?limit=100000&name=assets/[name]-[hash:5].[ext]',
        'image-webpack'
        ]
      }
    ]
  },
  postcss: [
    require('autoprefixer')({
      broswers: ['last 5 versions']
    })
  ],
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}
