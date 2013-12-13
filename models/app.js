var ds = require('../data-source/db');
var config = require('./apps.json');

var App = ds.createModel('app',config.properties,config.options);

module.exports = App;