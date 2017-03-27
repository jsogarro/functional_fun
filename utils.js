/**
  *
  Utils.js

  Helper functions to create immutable structures or perform common operations.
  Most functions are curried to allow for composition.
  *
**/

/*
tuple helper
*/
const Tuple = (x, y) => Object.freeze([x, y]);
const myTuple = Tuple(1, 2);
console.log(myTuple); // => [1, 2]

/*
length helper
*/
const length = x => x.length;

// for power we receive the data last so we can easily compose the functions
const power = x => y => Math.pow(y, x);

const square = power(2);

const cube = power(3);

console.log( cube(2) ); // => 8
