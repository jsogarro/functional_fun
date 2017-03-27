/*
 *
 Haskell.js

 Examples of how to use the curried version of lodash methods from lodash/fp. This
 list of methods intends to be a mapping to some of the most common/useful functions
 found in Haskell.

 Inspired by http://www.cse.unsw.edu.au/~en1000/haskell/inbuilt.html and
 http://yannesposito.com/Scratch/en/blog/Haskell-the-Hard-Way/#hard-part
 *
*/

// primary higher order functions
const map = require('lodash/fp/map');
const filter = require('lodash/fp/filter');
const reduce = require('lodash/fp/reduce'); // foldl
const reduceRight = require('lodash/fp/reduceRight');  // foldr

// useful array methods
const head = require('lodash/fp/head');
const tail = require('lodash/fp/tail');
const last = require('lodash/fp/last');
const take = require('lodash/fp/take');
const drop = require('lodash/fp/drop');
const find = require('lodash/fp/find');
const reverse = require('lodash/fp/reverse');
const includes = require('lodash/fp/includes'); // elem
const max = require('lodash/fp/max');
const maxBy = require('lodash/fp/maxBy');
const min = require('lodash/fp/min');
const minBy = require('lodash/fp/minBy');
const sum = require('lodash/fp/sum');
const sumBy = require('lodash/fp/sumBy');
const zip = require('lodash/fp/zip');
const unzip = require('lodash/fp/unzip');

// other helpful methods for composition
const compose = require('lodash/fp/compose');
const curry = require('lodash/fp/curry');
const get = require('lodash/fp/get');
const isEqual = require('lodash/fp/isEqual');
const toNumber = require('lodash/fp/toNumber');
const trim = require('lodash/fp/trim');


// addSquare :: Int -> Int -> Int
const addSquares = x => y => x * x + y * y;
console.log( addSquares(2)(3) ); // => 13

// map
const doubled = map(x => x * 2)([1,2,3]);
console.log(doubled); // => [ 2, 4, 6 ]

// passing a curried function to map
const players = [{name: 'MJ', number: 23}, {name: 'Lebron', number: 23}, {name: 'Kobe', number: 24}];
const playerNames = map(get('name'))(players);
console.log(playerNames); // => ['MJ', 'Lebron', 'Kobe']


// filter
const GOAT = filter(x => x.name === 'MJ')(players);
console.log(GOAT); // => [{name: 'MJ', number: 23}]

// reduce
const vals = [1,1,1];
const sumVal = reduce((acc, x) => acc + x, 0, vals);
console.log(sumVal); // => 3

// reduceRight
const numStrings = ['1', '2', '3', '4', '5'];
const concatNumStrings = reduceRight((acc, x) => x + acc, '', numStrings);
console.log(concatNumStrings); // => 54321

// head
const animals = ["frog", "dog", "hog"];
const firstItem = head(animals);
console.log(firstItem); // => frog

// tail
const lastItems = tail(animals);
console.log(lastItems); // => [ 'frog', 'dog' ]

// last
const lastItem = last(animals);
console.log(lastItem); // => hog

// take
const lastTwo = take(2, animals);
console.log(lastTwo); // => [ 'frog', 'dog' ]

// drop
const lastOne = drop(2, animals);
console.log(lastOne); // => ['hog']

// reverse
const nonReversedNums = [1, 2, 3];
const reversedNums = reverse(nonReversedNums);
console.log(reversedNums); // => [3, 2, 1]


// find
const foundItem = find(x => x === 'one')(['zero', 'one', 'two']);
console.log(foundItem); // => 'one'

// max
const numberBucket = [100, 400, 500, 700, 90];
const maxNum = max(numberBucket);
console.log(maxNum); // => 700

// maxBy
const bestCities = [{name: 'NYC', rating: 100}, {name: 'LA', rating: 90}, {name: 'BOS', rating: 80}];
const highestNumber = maxBy(get('rating'))(bestCities);
console.log(highestNumber); // => { name: 'NYC', rating: 100 }

// min
const minNum = min(numberBucket);
console.log(minNum); // => 90

// minBy
const lowestNumber = minBy(get('rating'))(bestCities);
console.log(lowestNumber); // => { name: 'BOS', rating: 80 }

// sum
const sumArr = [1, 2, 3, 4, 5];
const sumArrVal = sum(sumArr);
console.log(sumArrVal); // => 15

// sumBy
const sumObjs = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
const calcSum = sumBy(get('n'))(sumObjs);
console.log(calcSum);

// zip
const zipped = zip(['a', 'b'], [1, 2]);
console.log(zipped); // => [ [ 'a', 1 ], [ 'b', 2 ] ]

// unzip
const unzipped = unzip(zipped);
console.log(unzipped); // => [ [ 'a', 'b' ], [ 1, 2 ] ]

// includes (note it has an arity of 2
const hasValue = includes(2, [1,2,3]);
console.log(hasValue); // => true

// compose
const data = [{id: 1, val: 100}, {id: 2, val: 200}, {id:3, val: 300}];
const composedSum = compose(
  sum,
  map(get('val')),
  filter(x => x.val >= 200)
)(data);
console.log(composedSum); // => 500

// curry
const add = (x, y) => x + y;
const addTwo = curry(add)(2);
const fivePlusTwo = addTwo(5);
console.log( curry(add)(1)(1) ); // => 2
console.log(fivePlusTwo); // => 7

// get
const someObj = {a: 1, b: 2, c: 3};
const propertyVal = get('a')(someObj);
console.log(propertyVal); // => 1

// isEqual (arity of 2)
const obj1 = {a: 1};
const obj2 = {a: 1};
const areValuesEqual = isEqual(obj1, obj2);
console.log(areValuesEqual); // => true

// toNumber
const strNum = '750000.75';
const numFromStr = toNumber(strNum);
console.log(numFromStr); // => 750000.75

// trim
const str = trim('    Remove    ');
console.log(str); // => 'Remove';
