const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const paths = {
    clientBuild: resolveApp('build/client'),
    serverBuild: resolveApp('build/server'),
    dotenv: resolveApp('.env'),
    src: resolveApp('src'),
    nodeModules: resolveApp('node_modules'),
    srcClient: resolveApp('src/client'),
    srcServer: resolveApp('src/server'),
    srcShared: resolveApp('src/shared'),
    publicPath: '/static/',
    sassResources: resolveApp('src/client/app/css/resources.scss')
}

paths.resolveModules = [
    paths.srcClient,
    paths.srcServer,
    paths.srcShared,
    paths.src,
    'node_modules'
]

module.exports = paths
