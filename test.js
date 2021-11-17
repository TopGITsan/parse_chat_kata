// we have a test runner (Mocha) and an assertion library (Chai)
// Passing arrow functions (aka “lambdas”) to Mocha is discouraged. 
// Lambdas lexically bind this and cannot access the Mocha context.

// using common js
// const assert = require('assert'); // Node.js’ built-in assert module — but generally, if it throws an Error, it will work! 
// const  chai = require('chai');
// const assert = chai.assert;

// using modules es
import { assert } from 'chai';  // Using Assert style

// begin
import { kata1, kata2, kata3, kata4, kata44, kata5, kata6 , solution} from './index.js';

const stringToTest = kata1;

describe('Basic Mocha and Chai String Test', function () {
  it('should return number of charachters in a string', function () {
      assert.strictEqual("TDD".length, 3)
  });
  it('should return first charachter of the string', function () {
      assert.strictEqual("testing with mocha and chai".slice(0,1),"t")
  });
});

describe('kata 1 string test', function () {
  it('should be a string', function () {
      assert.isString( kata1, "Only strings are allowed");
    });
  it('should be at least 12 characters long', function () {
      assert.isAbove( kata1.length,12, "Only strings with min 12 char");
    });
  
});
describe('Split the chat, kata 1 solution', function () {
  it('should be a of type array', function () {
      assert.isArray(solution(kata1),'what kind of result do we want?');
    });
  it('should equal', function () {
      assert.include( solution(kata1)[0], {
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'customer'
      });
    });
  
});
describe('Split the chat, kata 2 solution', function () {
  it('should be a of type array', function () {
      assert.isArray(solution(kata2),'what kind of result do we want?');
    });
  it('should equal', function () {
      assert.sameDeepMembers( solution(kata2), 
      [{
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
        type: 'customer'
      }, {
        date: '14:26:15',
        mention: '14:26:15 Agent : ',
        sentence: 'Aliquam non cursus erat, ut blandit lectus.',
        type: 'agent'
      }]
      );
    });
  
});
describe('Split the chat, kata 3 solution', function () {
  it('should be a of type array', function () {
      assert.isArray(solution(kata3),'what kind of result do we want?');
    });
  it('should equal', function () {
      assert.sameDeepMembers( solution(kata3), 
        [{
          date: '14:24:32',
          mention: '14:24:32 Customer : ',
          sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
          type: 'customer'
        }, {
          date: '14:27:00',
          mention: '14:27:00 Customer : ',
          sentence: 'Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n',
          type: 'customer'
        }, {
          date: '14:27:47',
          mention: '14:27:47 Agent : ',
          sentence: 'Vestibulum tempor diam eu leo molestie eleifend.\n',
          type: 'agent'
        }, {
          date: '14:28:28',
          mention: '14:28:28 Customer : ',
          sentence: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
          type: 'customer'
        }]
      );
    });
  
});
describe('Split the chat, kata 4 solution', function () {
  it('should be a of type array', function () {
      assert.isArray(solution(kata4),'what kind of result do we want?');
    });
  it('should equal', function () {
      assert.sameDeepMembers( solution(kata4), [{
          date: '14:24:32',
          mention: '14:24:32 Customer : ',
          sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: 'customer'
        }, {
          date: '14:26:15',
          mention: '14:26:15 Agent : ',
          sentence: 'Aliquam non cursus erat, ut blandit lectus.',
          type: 'agent'
        }]
      );
    });
  
});
describe('Split the chat, kata 44 solution', function () {
  it('should be a of type array', function () {
      assert.isArray(solution(kata44),'what kind of result do we want?');
    });
  it('should equal', function () {
      assert.sameDeepMembers( solution(kata44), 
      [{
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'customer'
      }, {
        date: '14:27:00',
        mention: '14:27:00 Customer : ',
        sentence: 'Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.',
        type: 'customer'
      }, {
        date: '14:27:47',
        mention: '14:27:47 Agent : ',
        sentence: 'Vestibulum tempor diam eu leo molestie eleifend.',
        type: 'agent'
      }, {
        date: '14:28:28',
        mention: '14:28:28 Customer : ',
        sentence: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        type: 'customer'
      }]
      );
    });
  
});

describe('Split the chat, kata 6 solution', function () {
  it('should be a of type array', function () {
      assert.isArray(solution(kata6),'what kind of result do we want?');
    });
  it('should equal', function () {
      assert.sameDeepMembers( solution(kata6), 
        [{
          date: '14:24:32',
          mention: '14:24:32 Luca Galasso : ',
          sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: 'customer'
        }, {
          date: '14:26:15',
          mention: '14:26:15 Emanuele Querzola : ',
          sentence: 'I received the package, ut blandit lectus.',
          type: 'agent'
        }]
      );
    });
});

describe('Split the chat, kata 5 solution', function () {
  it('should be a of type array', function () {
      assert.isArray(solution(kata5),'what kind of result do we want?');
    });
  it('should equal', function () {
      assert.sameDeepMembers( solution(kata5), 
        [{
          date: '14:24:32',
          mention: '14:24:32 Customer : ',
          sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: 'customer'
        }, {
          date: '14:26:15',
          mention: '14:26:15 Agent : ',
          sentence: 'I received it at 12:24:48, ut blandit lectus.',
          type: 'agent'
        }]
      );
    });
  
});
