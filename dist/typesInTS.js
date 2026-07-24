"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type inferencing: automatically infers the type of a declared variable.
// examples:-
let topic = "TypeScript";
let learner = "Priyanshu";
let status = Math.random() * 1000 > 400 ? "success" : undefined;
// let status: string | undefined
// inferred type: string
// topic = 25  ❌ type "number" is not assignable to type "string"
// type annotation: specifically telling TS that this is going to be the type of the variable
// examples:-
let data = [];
let fact = "I am good at JavaScript";
// fact = 35    ❌ type "number" is not assignable to type "string"
// data = 34    ❌ type "number" is not assignable to type "object"  
//# sourceMappingURL=typesInTS.js.map