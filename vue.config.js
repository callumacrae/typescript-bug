const path = require('path');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const merge = require('webpack-merge');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  configureWebpack: () => ({
    entry: `./src/main`,
    target: 'web',
    node: false,
    devtool:
      NODE_ENV === 'development'
        ? 'cheap-module-eval-source-map'
        : 'source-map',
    plugins: [
      new VueSSRClientPlugin()
    ],
    externals: undefined,
    output: {
      libraryTarget: undefined
    },
    // use development mode on stage
    mode: NODE_ENV === 'production' ? 'production' : 'development',
    optimization: {
      splitChunks: undefined,
      minimize: ['production', 'stage'].includes(NODE_ENV)
    },
    resolve: {
      alias: {
        '@/': path.resolve(process.cwd(), 'src')
      }
    }
  }),
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
          optimizeSSR: false,
          compilerOptions: {
            preserveWhitespace: true
          }
        })
      );
  }
};
