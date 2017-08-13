var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{
    main: './src/script/main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  },
  output: {
    path: __dirname+'/dist',
    filename: 'js/[name]-[chunkhash].js',
    publicPath: 'http://cdn.com'
  },

  plugins:[
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html',
      inject: false,
      title: 'webpack is a.html',
      excludeChunks:['b','c']
    }),
    new htmlWebpackPlugin({
      filename: 'b.html',
      template: 'index.html',
      inject: false,
      title: 'webpack is b.html',
      excludeChunks:['a','c']
    }),
    new htmlWebpackPlugin({
      filename: 'c.html',
      template: 'index.html',
      inject: false,
      title: 'webpack is c.html',
      excludeChunks:['a','b']
    })
  ]
}
