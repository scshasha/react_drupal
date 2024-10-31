const path = require('path');
const Dotenv = require('dotenv-webpack');

const config = {
  entry: './src/index.js',
  devtool: (process.env.NODE_ENV === 'production') ? false : 'inline-source-map',
  mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i, // Add this rule for processing CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Add this rule for processing images
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new Dotenv() // Load environment variables from .env file
  ],
};

module.exports = config;
