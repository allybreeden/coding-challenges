// Create a method in the Person class which returns how another person's age compares. 


class Person {
    constuctor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(otherPerson) {
    if (this.age < otherPerson.age) {
        return `${otherPerson.name} is older than me.`;
    } else if (this.age > otherPerson.age) {
        return `${otherPerson.name} is younger than me`;
    } else {
        return `${otherPerson.name} is the same age as me`;
    }
    }
}


let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);


console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));