var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, './build', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'REINDEX_URL': JSON.stringify(process.env.REINDEX_URL),
      },
    }),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
     extensions: ['', '.jsx', 'css', '.scss', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          path.join(__dirname, 'src')
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          require.resolve('sass-loader') + '?sourceMap'
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          require.resolve('css-loader') + '?sourceMap',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: function() {
    return [
      require('postcss-cssnext')
    ]
  }
};
