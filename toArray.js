// Write a function that converts an object into an array, where each element represents a 
// ey-value pair in the form of an array.


function toArray(obj) {
    let array = Object.entries(obj);
    console.log(array);
}

toArray({ a: 1, b: 2 });

toArray({ shrimp: 15, tots: 12});

toArray({});