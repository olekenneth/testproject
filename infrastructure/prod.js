var _ = require('lodash');
var heroin = require('heroin-js');

var prod = {
    log_drains: ['syslog://data.logentries.com:13636']
};

var config = _.merge({}, require('./base'), prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);
