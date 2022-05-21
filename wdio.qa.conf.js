const merge = require('deepmerge')
const wdioConf = require('./wdio.conf')

exports.config = merge(wdioConf.config, {
    baseUrl: "http://google.com"
})