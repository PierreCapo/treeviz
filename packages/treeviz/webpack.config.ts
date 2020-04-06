import path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// webpack.Configuration type
const config: any = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/",
    library: "Treeviz",
    libraryTarget: "umd",
  },

  devServer: {
    open: true, // open the browser automatically
    historyApiFallback: true, // can use any URL and refresh the browser manually
    contentBase: "./dist",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./demo/demo.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },

  node: {
    net: "empty",
    tls: "empty",
    dns: "empty",
  },
};

export default config;
