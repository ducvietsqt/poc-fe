// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  transpileDependencies: ["vue-currency-input"],
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
      analyzerMode: "disabled",
    },
  },
  configureWebpack: {
    plugins: [
      new Dotenv({
        safe: false,
        systemvars: true,
        silent: false,
      }),
    ],
    devServer: {
      watchOptions: {
        ignored: /node_modules/,
        poll: false,
      },
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
      minimizer: isProd
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: isProd,
                },
              },
            }),
          ]
        : [],
    },
  },
};
