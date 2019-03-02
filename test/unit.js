/*
 * Unit Tests
 *
 */

// Dependencies
var logs = require('./../lib/logs.js');
var assert = require('assert');

// Holder for Tests
var unit = {};

// Logs.list should callback an array and a false error
unit['logs.list should callback a false error and an array of log names'] = function(done){
  logs.list(true,function(err,logFileNames){
      assert.equal(err, false);
      assert.ok(logFileNames instanceof Array);
      assert.ok(logFileNames.length > 1);
      done();
  });
};

// Logs.truncate should not throw if the logId doesnt exist
unit['logs.truncate should not throw if the logId does not exist, should callback an error instead'] = function(done){
  assert.doesNotThrow(function(){
    logs.truncate('I do not exist',function(err){
      assert.ok(err);
      done();
    })
  },TypeError);
};

// Export the tests to the runner
module.exports = unit;
