//Get first value in an Array

function getFirstValue(array){
   return array[0];
}


// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));




//is the number less than or equal to zero

function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(lessThanOrEqualToZero(5));
// console.log(lessThanOrEqualToZero(0));


//Two Numbers Less than 100


function lessThan100(a,b) {
    if (a + b < 100) {
        return true;
    } else {
        return false;
    }
}

// console.log(lessThan100(22, 15));


//the farm problem. return the total number of legs of ALL animals

function animals(chickens, cows, pigs) {
    let chickenLegs = chickens * 2;
    let cowLegs = cows * 4;
    let pigLegs = pigs * 4;
    let totalLegs = chickenLegs + cowLegs + pigLegs;
    return totalLegs;
}

// console.log(animals(2, 3, 5));
// console.log(animals(1, 2, 3));


//arrow functions

let arrowFunc = x => console.log(x);

// arrowFunc(3);
// arrowFunc("3");
// arrowFunc(true);


//example

// before
// let x = function(x, y) {
//     return x * y;
// }

let x = (x, y) => x * y;

//greeting
let greet = () => console.log('Hello');
// greet();


//arrow function as an expression

// let grade = 76;
// let grade = 60;

// let score = (grade > 75) ?
// () => console.log('Passing') :
// () => console.log('Failing');

// score();


//multiple arrow functions


let total = (sum1, sum2) => {
    let result = sum1 + sum2;
    return result;
}

let firstResult = total(1, 2);
// console.log(firstResult);



//Length of a String Using Recursion

function length(str) {
    let total = 0;
    if (str.length > 0) {
        total = total + str.length;
    } else {
        return total;
    }
    return total;
}

// console.log(length("apple"));
// console.log(length("make"));
// console.log(length("a"));
// console.log(length(""));
