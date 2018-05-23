const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, argv) => {
    // 基本は--modeの判別で十分だが、UglifyJSPluginのdrop_consoleを使うためにモードを取得
    let isDevelop = argv.mode === "development";

    return [{
        entry: {
            bundle: ["./src/js/index.js"]
        },
        output: {
            filename: "[name].js",
            path: `${__dirname}/dist/js`
        },
        devtool: isDevelop ? "source-map" : "",

        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }]
            }, {
                // CSS Modules
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: isDevelop ? {
                            url: true,
                            sourceMap: true,
                            minimize: false,
                            importLoaders: 2
                        } : {
                            url: true,
                            sourceMap: false,
                            minimize: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: isDevelop ? {
                            sourceMap: true,
                            // compressedを指定しておかないとchrome devtoolでルート要素の行番号表示になる
                            // https://github.com/webpack-contrib/sass-loader/issues/272
                            outputStyle: "compressed"
                        } : {
                            sourceMap: false
                        }
                    },
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelop
                        }
                    }
                ]
            }, {
                // url-loaderの読み込み対象バイナリファイル
                test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
                loader: 'url-loader'
            }]
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({options: {}}),
        ],
        optimization: {
            minimizer:
                isDevelop
                    ? []
                    : [new UglifyJSPlugin({
                        // productionの場合はconsoleとdebuggerを破棄
                        uglifyOptions: {
                            compress: {drop_console: true, drop_debugger: true}
                        }
                    })]
        }
    }];
};
