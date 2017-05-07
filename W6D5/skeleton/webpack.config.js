let path = require('path');
module.exports = {
  entry: "./app.jsx",
  output: {
    // path: path.resolve(__dirname, 'app,', '')
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
  loaders: [
    {
      test: [/\.jsx?$/], // Specifies file types to transpile
      exclude: /(node_modules)/, // Leaves dependencies alone
      loader: 'babel-loader', // Sets Babel as the transpiler
      query: {
        presets: ['es2015', 'react'] // Tells Babel what syntaxes to translate
      }
    }
  ]
},
resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
