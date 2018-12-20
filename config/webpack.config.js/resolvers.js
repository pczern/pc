const paths = require('../paths')

module.exports = {
    extensions: ['.js', '.tsx', '.ts', '.mjs', '.json', '.jsx', '.css'],
    modules: paths.resolveModules
}
