/*
 *
 Curry.js

 Examples of how to use currying to take advantage of partial application and
 function composition.
 *
*/
const map = require('lodash/fp/map');
const compose = require('lodash/fp/compose');
const sortBy = require('lodash/fp/sortBy');
const flatten = require('lodash/fp/flatten');
const filter = require('lodash/fp/filter');


// add :: Num -> Num -> Num
const add = a => b => a + b;

const result = add(1)(2);

// multiply :: Num -> Num -> Num
const multiply = a => b => a * b;

const product = multiply(2)(3);

// partial application
const double = multiply(2);

const tripple = multiply(3);

const doubleResult = double(4);

// fp map example
const numbers = [1,2,3];

const mapResult = map(x => x * 2)(numbers);

const test = compose(
  sortBy(x => x),
  flatten,
  map(x => [x, x * 2])
)(numbers);

const numsFromString = map(parseInt)(['1', '2', '3']);

// double and tripple are partially applied with their first value locked
const test2 = compose(double, tripple)(2);

// only return the truth values in the array
const truthy = filter(Boolean)(['a', '', null, 'b', 'c', '']);


console.log( truthy );
