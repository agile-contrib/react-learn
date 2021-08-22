module.exports = {
    entry: ['./src/index.jsx'],
    output: {
        path: __dirname,
        filename: 'dist/main.js',
        chunkFilename: 'dist/main.[name].js'
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            loader: ['style-loader', 'css-loader', 'postcss-loader', './scss-loader.js']
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "dist/[name].[ext]",
                    limit: 5000
                }
            }]
        }]
    }
};
