const path = require('path')
const HTMLwebplugin = require('html-webpack-plugin')

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader'],
  },
]
module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },
  module: { rules },
  plugins: [
    new HTMLwebplugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      hash: true,
      inject: true,
    }),
  ],
  stats: {
    children: false,
  },
}
