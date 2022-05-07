const asserrt = require('assert').strict;
const _ = require('lodash');
const { _difference, _differenceSect, _differenceSet } = require('../lib/difference');

console.log(`=== test: ${_difference.name, _differenceSect.name, _differenceSet.name} strat ===`);

// console.log(_.difference())
// console.log(_difference())
// console.log(_differenceSet())
asserrt.deepStrictEqual(_.difference(), _difference());
asserrt.deepStrictEqual(_.difference(), _differenceSect());
asserrt.deepStrictEqual(_.difference(), _differenceSet());

// console.log(_.difference(1))
// console.log(_difference(1))
// console.log(_differenceSet(1))
asserrt.deepStrictEqual(_.difference(1), _difference(1));
asserrt.deepStrictEqual(_.difference(1), _differenceSect(1));
asserrt.deepStrictEqual(_.difference(1), _differenceSet(1));

// console.log(_.difference(null))
// console.log(_difference(null))
// console.log(_differenceSet(null))
asserrt.deepStrictEqual(_.difference(null), _difference(null));
asserrt.deepStrictEqual(_.difference(null), _differenceSect(null));
asserrt.deepStrictEqual(_.difference(null), _differenceSet(null));

// console.log(_.difference(1, 1))
// console.log(_difference(1, 1))
// console.log(_differenceSet(1, 1))
asserrt.deepStrictEqual(_.difference(1, 1), _difference(1, 1));
asserrt.deepStrictEqual(_.difference(1, 1), _differenceSect(1, 1));
asserrt.deepStrictEqual(_.difference(1, 1), _differenceSet(1, 1));

// console.log(_.difference(1, 1, 1))
// console.log(_difference(1, 1, 1))
// console.log(_differenceSet(1, 1, 1))
asserrt.deepStrictEqual(_.difference(1, 1, 1), _difference(1, 1, 1));
asserrt.deepStrictEqual(_.difference(1, 1, 1), _differenceSect(1, 1, 1));
asserrt.deepStrictEqual(_.difference(1, 1, 1), _differenceSet(1, 1, 1));

// console.log(_.difference([1, 2, 3], 1))
// console.log(_difference([1, 2, 3], 1))
// console.log(_differenceSet([1, 2, 3], 1))
asserrt.deepStrictEqual(_.difference([1, 2, 3], 1), _difference([1, 2, 3], 1));
asserrt.deepStrictEqual(_.difference([1, 2, 3], 1), _differenceSect([1, 2, 3], 1));
asserrt.deepStrictEqual(_.difference([1, 2, 3], 1), _differenceSet([1, 2, 3], 1));

// console.log(_.difference([1, 2, 3], 1, 1))
// console.log(_difference([1, 2, 3], 1, 1))
// console.log(_differenceSet([1, 2, 3], 1, 1))
asserrt.deepStrictEqual(_.difference([1, 2, 3], 1, 1), _difference([1, 2, 3], 1, 1));
asserrt.deepStrictEqual(_.difference([1, 2, 3], 1, 1), _differenceSect([1, 2, 3], 1, 1));
asserrt.deepStrictEqual(_.difference([1, 2, 3], 1, 1), _differenceSet([1, 2, 3], 1, 1));

// console.log(_.difference([1, 2, 3], [1]))
// console.log(_difference([1, 2, 3], [1]))
// console.log(_differenceSet([1, 2, 3], [1]))
asserrt.deepStrictEqual(_.difference([1, 2, 3], [1]), _difference([1, 2, 3], [1]));
asserrt.deepStrictEqual(_.difference([1, 2, 3], [1]), _differenceSect([1, 2, 3], [1]));
asserrt.deepStrictEqual(_.difference([1, 2, 3], [1]), _differenceSet([1, 2, 3], [1]));

// console.log(_.difference([1, 2, 3], ['1']))
// console.log(_difference([1, 2, 3], ['1']))
// console.log(_differenceSet([1, 2, 3], ['1']))
asserrt.deepStrictEqual(_.difference([1, 2, 3], ['1']), _difference([1, 2, 3], ['1']));
asserrt.deepStrictEqual(_.difference([1, 2, 3], ['1']), _differenceSect([1, 2, 3], ['1']));
asserrt.deepStrictEqual(_.difference([1, 2, 3], ['1']), _differenceSet([1, 2, 3], ['1']));

// console.log(_.difference([1, 2, 3], { 1: 2, length: 1 }))
// console.log(_difference([1, 2, 3], { 1: 2, length: 1 }))
// console.log(_differenceSet([1, 2, 3], { 1: 2, length: 1 }))
asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: 2, length: 1 }), _difference([1, 2, 3], { 1: 2, length: 1 }));
asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: 2, length: 1 }), _differenceSect([1, 2, 3], { 1: 2, length: 1 }));
asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: 2, length: 1 }), _differenceSet([1, 2, 3], { 1: 2, length: 1 }));

// console.log(_.difference([1, 2, 3], { 1: '12', length: 1 }))
// console.log(_difference([1, 2, 3], { 1: '12', length: 1 }))
// console.log(_differenceSet([1, 2, 3], { 1: '12', length: 1 }))
asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: '12', length: 1 }), _difference([1, 2, 3], { 1: '12', length: 1 }));
asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: '12', length: 1 }), _differenceSect([1, 2, 3], { 1: '12', length: 1 }));
asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: '12', length: 1 }), _differenceSet([1, 2, 3], { 1: '12', length: 1 }));

// console.log(_.difference([1, 2, 3], { 1: 'xx', length: 1 }))
// console.log(_difference([1, 2, 3], { 1: 'xx', length: 1 }))
// console.log(_differenceSet([1, 2, 3], { 1: 'xx', length: 1 }))
asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: 'xx', length: 1 }), _difference([1, 2, 3], { 1: 'xx', length: 1 }));
asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: 'xx', length: 1 }), _differenceSect([1, 2, 3], { 1: 'xx', length: 1 }));
asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: 'xx', length: 1 }), _differenceSet([1, 2, 3], { 1: 'xx', length: 1 }));

console.log('All cases pass the test.');

console.log('=== End ===');
