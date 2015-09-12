module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jpg$/, loader: 'raw' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.html$/, loader: 'ngtemplate?relativeTo=' + __dirname + '/!html' }
    ]
  }
};
