import path from "path";
import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import WebpackMd5Hash from "webpack-md5-hash";

export default {
    debug: true,
    devtool: "source-map",
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, "src/vendor"),
        main: path.resolve(__dirname, "src/index")
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].[chunkhash].js"
    },
    plugins: [
        new WebpackMd5Hash(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        //Create HTML file that includes reference to bundled JS
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true
            }
        }),

        //Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        //Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
            { test: /\.css$/, loaders: ["style", "css"] }
        ]
    }

}