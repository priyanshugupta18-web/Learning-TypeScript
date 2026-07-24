"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let variable;
variable = "Hello unknown!";
// let length = variable.charAt(5)
class intro {
    intro;
    constructor(name) {
        this.intro = () => `Hello I am ${name}`;
    }
}
let student = new intro("Priyanshu");
console.log(student instanceof intro);
let value = 34;
let val = value;
console.log(val);
console.log(typeof val);
//# sourceMappingURL=typeNarrowing.js.map