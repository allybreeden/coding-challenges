// Create a function that takes two strings as arguments and 
// returns the number of times the first string 
// (the single character) is found in the second string.


function charCount(myChar, str) {
    let numChar = 0;
    let array = str.toLowerCase().split("");
    // return array;
    for (let i = 0; i < array.length; i++) {
        if (str.charAt(i) === myChar) {
            numChar++;
    }
    }
    return numChar;
}


console.log(charCount("a", "edabit")); // 1

console.log(charCount("c", "Chamber of secrets")); // 1

console.log(charCount("b", "big fat bubble")); // 4