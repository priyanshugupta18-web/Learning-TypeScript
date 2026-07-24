"use strict";
// union : aap koi variable declare karte time ye batate ho TypeScript ki ye variable in in possible Data types ko hold kar sakta hai...is baat ko hum union ke madhyam se samne rakh skate hai
Object.defineProperty(exports, "__esModule", { value: true });
// example:-
let value;
// value = 25 ✅
// value = "twenty-five" ✅
// Infact you can you your own custom Data-types
let risk;
// risk = "low" either of low medium or high will work
// risk = 25  ❌ type 25 is not assignable to type "low" | "medium" | "high"
// any: jab hamare TS compiler ko pata nahi hota hai ki hm ek declared variable me kis tarah ke value dalenge ya yadi ham khud hi isbaare me sure nahi hai😅 tab Compiler uss variable ka type any infer karta hai...type "any" ko hamesha avoid karna chaiye as much as possible 
// agar kisi variable ko declare karne ke baad usme assignment guarented nahi hai tab usko ek undefined type dena chaiye 
let uncertain;
let numbers = [25, 12, 10, 1];
for (let num of numbers) { //here the assignment is conditional, and hence not guaranted...I mean the array could possibly be empty...for such cases we should use undefined
    if (num === 1) {
        uncertain = num;
        break;
    }
    ;
    uncertain = 12;
}
console.log(uncertain);
// luckily you won't see any error here because TS automatically infers the undefined...but it is suggested to specify
//# sourceMappingURL=unionAndany.js.map