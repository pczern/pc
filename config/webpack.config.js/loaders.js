const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('../paths')
const generateSourceMap = process.env.OMIT_SOURCEMAP === 'true' ? false : true

const cssRegex = /\.css$/
const cssModuleRegex = [/\.css$/, /\.scss$/] // /\.module\.css$/

const babelLoader = {
    test: /\.(js|jsx|tsx|ts|mjs)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
        plugins: [
            [
                require.resolve('babel-plugin-named-asset-import'),
                {
                    loaderMap: {
                        svg: {
                            ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
                        }
                    }
                }
            ]
        ]
    }
}

const cssModuleLoaderClient = {
    test: cssModuleRegex,
    include: [paths.src],
    use: [
        require.resolve('css-hot-loader'),
        MiniCssExtractPlugin.loader,
        {
            loader: require.resolve('css-loader'),
            options: {
                camelCase: true,
                modules: true,
                importLoaders: 1,
                sourceMap: generateSourceMap,
                localIdentName: '[name]__[local]--[hash:base64:5]'
            }
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap
            }
        },
        {
            // process SASS/SCSS for every .css file
            loader: require.resolve('sass-loader')
        },
        {
            loader: require.resolve('sass-resources-loader'),
            options: {
                resources: paths.sassResources
            }
        }
    ]
}

const cssNodeMoudlesLoaderClient = {
    test: cssRegex,
    include: [paths.nodeModules],
    use: [
        require.resolve('css-hot-loader'),
        MiniCssExtractPlugin.loader,
        require.resolve('css-loader'),
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap
            }
        }
    ]
}

const cssModuleLoaderServer = {
    test: cssModuleRegex,
    include: [paths.src],
    use: [
        {
            loader: require.resolve('css-loader/locals'),
            options: {
                camelCase: true,
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
            }
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap
            }
        },
        {
            // process SASS/SCSS for every .css file
            loader: require.resolve('sass-loader')
        },
        {
            loader: require.resolve('sass-resources-loader'),
            options: {
                resources: paths.sassResources
            }
        }
    ]
}

const cssNodeModulesLoaderServer = {
    test: cssRegex,
    include: [paths.nodeModules],
    loader: require.resolve('css-loader')
}

const urlLoaderClient = {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: require.resolve('url-loader'),
    options: {
        limit: 2048,
        name: 'assets/[name].[hash:8].[ext]'
    }
}

const urlLoaderServer = {
    ...urlLoaderClient,
    options: {
        ...urlLoaderClient.options,
        emitFile: false
    }
}

const fileLoaderClient = {
    exclude: [/\.(js|css|mjs|html|json)$/],
    use: [
        {
            loader: require.resolve('file-loader'),
            options: {
                name: 'assets/[name].[hash:8].[ext]'
            }
        }
    ]
}

const fileLoaderServer = {
    exclude: [/\.(js|css|mjs|html|json)$/],
    use: [
        {
            loader: require.resolve('file-loader'),
            options: {
                name: 'assets/[name].[hash:8].[ext]',
                emitFile: false
            }
        }
    ]
}

const client = [
    {
        oneOf: [
            babelLoader,
            cssModuleLoaderClient,
            cssNodeMoudlesLoaderClient,
            urlLoaderClient,
            fileLoaderClient
        ]
    }
]
const server = [
    {
        oneOf: [
            babelLoader,
            cssModuleLoaderServer,
            cssNodeModulesLoaderServer,
            urlLoaderServer,
            fileLoaderServer
        ]
    }
]

module.exports = {
    client,
    server
}
