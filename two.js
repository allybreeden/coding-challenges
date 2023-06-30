//option one
function firstReverse(str) {
    let reversed = '';

    for (let i =0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

console.log(firstReverse('coderbyte'));


//option two
function firstReserseTwo(string) {
    let str = string.split('');
    let reversed = str.reverse();
    return reversed.join('');
}

console.log(firstReserseTwo('I love Code'));


//option three
function firstReverseThree(str) {
    return str.split('').reverse().join('');
}

console.log(firstReverseThree('Hello World and Coders'));