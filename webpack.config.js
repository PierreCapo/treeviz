const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
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
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
            },
        ],
    },

    node: {
        net: "empty",
        tls: "empty",
        dns: "empty",
    },
};
