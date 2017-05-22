require('./note.js');

isTruthy = function(test_name, statement) {
  if (statement) {
    testPassing(test_name);
  } else {
    testFailing(test_name);
  }
};

var testPassing = function(test_name) {
  console.log('PASSING TEST: "' + test_name + '"');
};

var testFailing = function(test_name) {
  console.log('FAILING TEST: "' + test_name + '"');
};

isEqual = function(test_name, statement1, statement2) {
  if (statement1 === statement2) {
    testPassing(test_name);
  } else {
    testFailing(test_name);
  }
};
