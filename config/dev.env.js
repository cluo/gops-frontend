var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    PROD_TIP: true,
  API_ROOT: '"//127.0.0.1:7001"',
})
