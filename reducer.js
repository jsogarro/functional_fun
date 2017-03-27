/*
 *
 Reduce.js

 Making use of Array.prototype.reduce 
 *
*/
const numbers = [1,2,3,4,5];

const sumNumbers = list => list.reduce((acc, x) => x + acc , 0);

const findEvens = list => list.reduce(
  (acc, item) => {
    (item % 2 === 0) && (acc.evens += 1);
    (item % 2 !== 0) && (acc.odds +=1);

    return acc;
  },
{evens: 0, odds: 0});

const calculateSquares = list => list.reduce((acc, x) => {
    return [...acc, (x * x)];
  },
[]);

const filterEvens = list => list.reduce((acc, x) => {
    if (x % 2 === 0) return [ ...acc, x];
    if (x % 2 !== 0) return acc;
  },
[]);

// results
const sum = sumNumbers(numbers);

const results = findEvens(numbers);

const squares = calculateSquares(numbers);

const evens = filterEvens(numbers);
