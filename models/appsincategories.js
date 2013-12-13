var ds = require('../data-source/db');
var app = require('./app');
var config = require('./categorieshasapps.json');
var category = require('./category');

var appsincategories = ds.createModel('appsincategories',config.properties,config.options);

appsincategories.belongsTo(app);
appsincategories.belongsTo(category);
app.hasMany(category,{through:appsincategories});
category.hasMany(app,{through:appsincategories});

module.exports = appsincategories;