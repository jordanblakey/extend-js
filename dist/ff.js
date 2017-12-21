'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.string = exports.node = exports.math = exports.func = exports.date = exports.browser = exports.array = undefined;

var _array = require('./lib/array');

var _array2 = _interopRequireDefault(_array);

var _browser = require('./lib/browser');

var _browser2 = _interopRequireDefault(_browser);

var _date = require('./lib/date');

var _date2 = _interopRequireDefault(_date);

var _func = require('./lib/func');

var _func2 = _interopRequireDefault(_func);

var _math = require('./lib/math');

var _math2 = _interopRequireDefault(_math);

var _node = require('./lib/node');

var _node2 = _interopRequireDefault(_node);

var _string = require('./lib/string');

var _string2 = _interopRequireDefault(_string);

var _util = require('./lib/util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = console.log;

// TEST ARRAY METHODS //////////////////////////////////////////////////////////
// log('arrayGcd:', array.arrayGcd([4, 8, 12]))
// log('arrayMax:', array.arrayMax([10, 1, 5]))
// log('arrayMin:', array.arrayMin([10, 1, 5]))
// log('chunk:', array.chunk([1, 2, 3, 4, 5], 2))
// log('compact:', array.compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))
// log('countOccurences:', array.countOccurences([1, 1, 2, 1, 2, 3], 1))
// log('flatten:', array.flatten([1, [2], [3, [4]]]))
// log('flattenDepth:', array.flattenDepth([1, [2], [[[3], 4], 5]], 2))
// log('deepFlatten', array.deepFlatten([1, [2], [[3], 4], 5]))
// log('difference:', array.difference([1, 2, 3], [1, 2, 4]))
// log('differenceWith:', array.differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a, b) => Math.round(a) === Math.round(b)))
// log('distictValuesOfArray:', array.distinceValuesOfArray([1, 2, 2, 3, 4, 4, 5]))
// log('dropElements:', array.dropElements([1, 2, 3, 4], n => n >= 3))
// log('dropRight:', array.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
// log('everyNth:', array.everyNth([1, 2, 3, 4, 5, 6], 2))
// log('filterNonUnique', array.filterNonUnique([1, 2, 2, 3, 4, 4, 5]))
// log('groupBy:', array.groupBy([6.1, 4.2, 6.3], Math.floor))
// log('head:', array.head([1, 2, 3]))
// log('initial:', array.initial([1, 2, 3]))
// log('initArrayRange:', array.initArrayRange(7, 3))
// log('initArrayFill:', array.initArrayFill(5, 2))
// log('init2DArray:', array.init2dArray(3, 3, 0))
// log('intersection:', array.intersection([1, 2, 3], [4, 3, 2]))
// log('last:', array.last([1, 2, 3]))
// log('mapObject:', array.mapObject([1, 2, 3, 4], a => a * a))
// log('pick:', array.pick({'a':1, 'b':'2', 'c': 3}, ['a', 'c']))
// log('pull:', array.pull(['a', 'b', 'c'], 'a'))
// log('sample:', array.sample([3, 7, 9, 11]))
// log('shuffle:', array.shuffle([1, 2, 3]))
// log('similarity:', array.similarity([1, 2, 3], [1, 2, 4]))
// log('symmetricDifference:', array.symmetricDifference([1, 2, 3], [1, 2, 4]))
// log('tail:', array.tail([1, 2, 3]))
// log('take:', array.take([1, 2, 3, 4, 5], 3))
// log('takeRight:', array.takeRight([1, 2, 3, 4, 5], 3))
// log('union:', array.union([1, 2, 3], [4, 3, 2]))
// log('without:', array.without([2, 1, 2, 3], 1, 2))
// log('zip:', array.zip(['a'], [1, 2], [true, false]))

// TEST BROWSER METHODS ////////////////////////////////////////////////////////
log('test:', _browser2.default.test());

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST DATE METHODS ///////////////////////////////////////////////////////////
log('test:', _date2.default.test());

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST FUNCTION METHODS ///////////////////////////////////////////////////////
log('test:', _func2.default.test());

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST MATH METHODS ///////////////////////////////////////////////////////////
log('test:', _math2.default.test());

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST NODE METHODS ///////////////////////////////////////////////////////////
log('test:', _node2.default.test());

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST STRING METHODS ///////////////////////////////////////////////////////////
log('test:', _string2.default.test());

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST UTILITY METHODS ///////////////////////////////////////////////////////////
log('test:', _util2.default.test());

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// COMBINE IMPORTED MODULES INTO A DEFAULT EXPORT //////////////////////////////
var _module = {};
_module = Object.assign(_module, _array2.default);
_module = Object.assign(_module, _browser2.default);
_module = Object.assign(_module, _date2.default);
_module = Object.assign(_module, _func2.default);
_module = Object.assign(_module, _math2.default);
_module = Object.assign(_module, _node2.default);
_module = Object.assign(_module, _string2.default);
_module = Object.assign(_module, _util2.default);

// Check methods added
// console.log(module)
exports.default = _module;

// ALSO ALLOW THEM TO BE IMPORTED INDEPENDENTLY ////////////////////////////////

exports.array = _array2.default;
exports.browser = _browser2.default;
exports.date = _date2.default;
exports.func = _func2.default;
exports.math = _math2.default;
exports.node = _node2.default;
exports.string = _string2.default;
exports.util = _util2.default;