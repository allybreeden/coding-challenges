function firstReverse(str) {
    let reversed = '';

    for (let i =0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

console.log(firstReverse('coderbyte'));

// console.log(firstReverse(readline()));


function firstReserseTwo(string) {
    let str = string.split('');
    let reversed = str.reverse();
    return reversed.join('');
}

console.log(firstReserseTwo('I love Code'));