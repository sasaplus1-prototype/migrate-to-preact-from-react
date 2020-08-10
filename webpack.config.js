module.exports = {
  context: __dirname,
  entry: {
    index: `${__dirname}/index.tsx`
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}`,
    publicPath: './'
  },
  resolve: { 
    alias: { 
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  target: 'web'
};
