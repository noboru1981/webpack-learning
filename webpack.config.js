const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, argv) => {
    // 基本は--modeの判別で十分だが、UglifyJSPluginのdrop_consoleを使うためにモードを取得
    let isDevelop = argv.mode === "development";

    return [{
        entry: {
            bundle: ["./src/js/index.jsx"],
        },
        output: {
            filename: "[name].js",
            path: `${__dirname}/dist/js`
        },
        devtool: isDevelop ? "source-map" : "",

        module: {
            rules: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }]
            }]
        },
        optimization: {
            minimizer:
                isDevelop
                    ? []
                    : [
                        new UglifyJSPlugin({
                            // productionの場合はconsoleとdebuggerを破棄
                            uglifyOptions: {
                                compress: {drop_console: true, drop_debugger: true}
                            }
                        })
                    ]
        }
    }];
};
