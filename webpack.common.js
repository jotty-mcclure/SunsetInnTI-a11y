const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
	  app: './src/index.js',
  },
  plugins: [
	  new CleanWebpackPlugin()
  ],
  output: {
    filename: 'sunsetinn-a11y-patcher.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};