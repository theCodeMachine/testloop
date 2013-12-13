var ds = require('../data-source/db');
var config = require('./categories.json');

var Category = ds.createModel('category',config.properties,config.options);

module.exports = Category;