
assert = module.exports = {
  isTruthy: function(statement) {
      if (statement) {
          result('PASSED');
      } else {
          result('FAILED');
      }
  },

  isEqual: function(statement1, statement2) {
      if (statement1 === statement2) {
          result('PASSED');
      } else {
          result('FAILED');
      }
  },

  include: function(includedObject, inclusiveObject) {
      if (inclusiveObject.includes(includedObject)) {
          result('PASSED');
      } else {
          result('FAILED');
      }
  }
};

var result = function(result) {
      console.log(' '.repeat(indentLevel) + result);
  };

var indentLevel = 0;

describe = function(description, test) {
      console.log(' '.repeat(indentLevel) + description);
      indentLevel += 2;
      test();
      indentLevel -= 2;
}

it = describe;