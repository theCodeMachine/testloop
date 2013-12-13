/** Database Datasource Defination */

/**  Dependecies */

var loopback = require('loopback');

var DB = 'mysql';

config = {};

try
{
	config.connector = require('loopback-connector-mysql');
	config.host = 'localhost';
	config.port = 3306;
	config.database = 'testlloop';
	config.username = 'root';
	config.password = '';
}
catch(e)
{
	console.error('could not require oopback-connector-mysql');
    console.error('make sure it is listed in package.json');
    console.error('then run');
    console.error('  npm install');

    throw e;
}

try {
  module.exports = loopback.createDataSource(config);
} catch (e) {
  console.error('Error while initializing the data source:');
  console.error(e.stack);
  console.error('\nPlease check your configuration settings and try again.');
  process.exit(1);
}