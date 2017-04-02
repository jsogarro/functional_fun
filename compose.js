/*
*
 Compose.js

 Examples of function composition.
*
*/

// sample compose function
const compose = require('lodash/fp/compose');
const includes = require('lodash/fp/includes');
const map = require('lodash/fp/map');
const filter = require('lodash/fp/filter');
const nth = require('lodash/fp/nth');
const uniq = require('lodash/fp/uniq');
const negate = require('lodash/fp/negate');
const isEmpty = require('lodash/fp/isEmpty');
const get = require('lodash/fp/get');
const max = require('lodash/fp/max');


const myCompose = (f, g) => (x) => f(g(x));

const toNumber = x => parseInt(x, 10);

const double = x => x * 2;

const result = myCompose(double, toNumber)('2');
// convertAndDouble = myCompose(double, toNumber0;
// result = convertAndDouble('2'); // => 4
console.log(result);


// building functions from compositions
const emptyArray = [];
const not = x => !x;
const notEmpty = compose(not, isEmpty);
const hasData = notEmpty('');

console.log(hasData);


// using a generic definition to build other functions
const teams = [{name: 'Knicks', city: 'NY', year: 1946}, {name: 'Bulls', city: 'CHI', year: 1966}, {name: 'Raptors', city: 'TOR', year: 1995}];
const oldestTeam = compose(
  max,
  map( get('year') ),
  filter(x => x.city !== 'TOR')
)(teams);

console.log(oldestTeam);
