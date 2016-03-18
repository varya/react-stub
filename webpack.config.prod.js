var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, './build', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'REINDEX_URL': JSON.stringify(process.env.REINDEX_URL),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
     extensions: ['', '.jsx', 'css', '.scss', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules/esri-leaflet-geocoder'),
          path.join(__dirname, 'node_modules/esri-leaflet')
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
