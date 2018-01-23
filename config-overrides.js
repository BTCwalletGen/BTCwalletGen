const webpack = require('webpack');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

module.exports = function override(config, env)  {
    config.plugins[3] = new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          comparisons: false,
        },
        mangle: {
          safari10: true,
          except: ['BigInteger','ECPair','Point'],
        },
        output: {
          comments: false,
          ascii_only: true,
        },
        sourceMap: shouldUseSourceMap,
      });

    return config;
}