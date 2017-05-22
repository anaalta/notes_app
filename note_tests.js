require('./note.js');

isTruthy = function(test_name, statement) {
  if (statement) {
    testPassing(test_name);
  } else {
    testFailing(test_name);
  }
};

var testPassing = function(test_name) {
  console.log('Test "' + test_name + '" passed');
};

var testFailing = function(test_name) {
  console.log('Test "' + test_name + '" failed');
};

isEqual = function(test_name, statement1, statement2) {
  if (statement1 === statement2) {
    testPassing(test_name);
  } else {
    testFailing(test_name);
  }
};
