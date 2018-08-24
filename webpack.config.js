//entry -> output
const path = require('path');

module.exports = { // expose something to another file
    entry: './src/app.js', // tell webpack where it should start
    output: {
        path: path.join(__dirname, 'public'), // absolute path to where you want to output file
        filename: 'bundle.js'
    },
    module: { // set up the loader
        rules: [{ // lets you define how you want to use your loader
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [ // use allows us to declare an array of loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.svg$/,
            use: [
                {
                    loader: "babel-loader"
                },
                {
                  loader: "react-svg-loader",
                  options: {
                    jsx: true // true outputs JSX tags
                    }
                }
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', // helps with debugging, highlights source file
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

// loader allows you to customize the behavior of webpack when given a specific file
// for turning JSX into regular Javascript- what Webpack does, or es6 - es5
// ie. when it sees anything .js, will do something