/*
*
 Category.js

 Intro to category theory.
*
*/

// Contracts
const str = input => {
    if (typeof input !== 'string') throw TypeError('Unexpected value');

    return input;
};

const repeat = input => {
    const s = str(input);

    return s + s;
};

const repeated = repeat(1);
console.log(repeated);


// Guarded Functions
const any = x => x;

// contracts and the functions they guard form categories
// maps between categoreis are functors
// maps between functors are natural transformations

// Objects - contracts of a category
// Morphism - guarded function

// Array contract
const arr = a => {
    if ({}.toString.call(a) !== '[object Array]') {
        throw new TypeError('Expected an array!');
    }

    return a;
};


// Functor
const arrOf = c => a => arr(a).map(c);
