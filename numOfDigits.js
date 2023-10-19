// Create a function that will return an integer number corresponding to the amount 
// of digits in the given integer num.

function num_of_digits (num) {
    return String(Math.abs(num)).length;
}


console.log(num_of_digits(1000));

console.log(num_of_digits(12));

console.log(num_of_digits(1305981031));

console.log(num_of_digits(0));