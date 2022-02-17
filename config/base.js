/** @format */

const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const getplugins = require("./plugins");
const getLoaders = require("./loaders");
const paths = require("./defaultPaths");

module.exports = function (program) {
  // user webpack config
  const entry = {
      app: paths.appSrc + "/index",
    },
    output = {
      path: paths.appDist,
      filename: "js/[name].[contenthash].js",
      publicPath: "/",
      clean: true,
    },
    loaders = getLoaders(program),
    plugins = getplugins(program),
    extensions = [
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".css",
      ".less",
      ".json",
      ".html",
    ],
    /**
     * default webpack configs
     */
    defaultConf = {
      context: paths.appDirectory,
      entry,
      output,
      module: {
        rules: loaders,
      },
      plugins,
      resolve: {
        modules: [paths.appModules, "node_modules"],
        extensions,
        plugins: [],
      },
      performance: {
        // 打包性能配置
        hints: false, // 关闭性能提示
      },
      stats: {
        errorDetails: true,
      },
      optimization: {
        minimize: false,
        minimizer: [],
      },
      externals: {},
      node: false,
      target: "web",
      cache: {
        type: "filesystem",
      },
    };

  if (paths.appTsConfig) {
    // support ts paths link to webpack resolve alias
    const option = {
        configFile: paths.appTsConfig,
        extensions,
      },
      { resolve } = defaultConf,
      tsconfigPaths = new TsconfigPathsPlugin(option);
    resolve.plugins.push(tsconfigPaths);
  }

  return defaultConf;
};
