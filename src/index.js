var beerchainjs = require('bitcoinjs-lib')

Object.assign(beerchainjs.networks, require('./networks'))

beerchainjs.utils = require('./utils')

module.exports = beerchainjs