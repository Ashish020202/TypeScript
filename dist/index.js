"use strict";
function addnumber(a, b) {
    return a + b;
}
const ans = addnumber(2, 3);
console.log(ans);
function greet(person) {
    return "hello" + person.name + "your age is" + person.age;
}
const ans2 = greet({
    name: "ashish",
    age: 16
});
console.log(ans2);
class human {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    greet() {
        return "hii" + this.name;
    }
}
function animals(prop) {
    return prop.name + prop.age;
}
console.log(animals({
    name: "dog",
    age: 10
}));
//# sourceMappingURL=index.js.map