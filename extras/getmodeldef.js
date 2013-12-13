var loopback = require('loopback');
var fs = require('fs');
var path = require('path');
var db = require('../data-source/db');
var modelsDir = path.join(__dirname, '..', 'models');

// discover tables
db.discoverModelDefinitions(function(err, models) {
  if (err) {
    console.log(err);
  } else {
    console.log(models);
    models.forEach(function(def) {
      console.log('discovering', def.name);
        db.discoverSchema(def.name, {"owner":"testlloop"},function(err, schema) {
          fs.writeFileSync(
            path.join(modelsDir, schema.name.toLowerCase() + '.json'),
            JSON.stringify(schema, null, 2)
          );
        });
      
    });
  }
});

