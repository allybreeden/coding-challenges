// Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— 
// return an object with that name and value in it (as key-value pairs).


function addName(obj, name, value) {
        return {
            [name]: value,
        }  
}

console.log(addName({}, "Brutus", 300));

addName({ piano: 500 }, "Brutus", 400);

addName({ piano: 500, stereo: 300 }, "Caligula", 440);