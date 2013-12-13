var ds = require('../data-source/db');
var config = require('./users.json');
var loopback = require('loopback');
var atconfig = require('./accessTokens.json');

var user = loopback.User.extend('myUser',config.properties,config.options);

var accesstoken = loopback.AccessToken.extend("accesstoken",atconfig.properties,atconfig.options);

user.accessToken = accesstoken;
// attach to the db
user.attachTo(ds);
user.accessToken.attachTo(ds);
accesstoken.attachTo(ds);

// TODO - this should be available as `hideRemotely: true`
user.beforeRemote('find', function(ctx, inst, next) {
  var args = ctx.args;
  var filter = args.filter || (args.filter = {});
  var fields = filter.fields || (filter.fields = {});

  // always hide password
  fields.password = false;

  next();
});

module.exports = user;