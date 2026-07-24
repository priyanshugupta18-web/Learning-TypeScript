// unknown: The main difference between unknown and any is that unknown is much less permissive than any: we have to do some form of checking before performing most operations on values of type unknown, whereas we don't have to do any checks before performing operations on values of type any.

// In TypeScript, every type is assignable to any. This makes any a top type (also known as a universal supertype) of the type system.

let value: any;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK

// In the above example, the value variable is typed as any. Because of that, TypeScript considers all of the following operations to be type-correct:

value.foo.bar; // OK
value.trim(); // OK
value(); // OK
new value(); // OK
value[0][1]; // OK

//  We don't get a lot of protection from TypeScript if we're opting to use any.

// What if there were a top type that was safe by default? This is where unknown comes into play.

// The Unknown type: -

// Just like all types are assignable to any, all types are assignable to unknown. This makes unknown another top type of TypeScript's type system (the other one being any).

let val: unknown;

val = 42; // OK
val = true; // OK
val = "Hello World"; // OK
val = []; // OK
val = {}; // OK
val = Math.random; // OK
val = null; // OK
val = undefined; // OK
val = new TypeError(); // OK
val = Symbol("type"); // OK


// What happens though when we try to assign a value of type unknown to variables of other types?

// let value1: unknown = val; // OK
// let value2: any = val; // OK
// let value3: boolean = val; // Error
// let value4: number = val; // Error
// let value5: string = val; // Error
// let value6: object = val; // Error
// let value7: any[] = val; // Error
// let value8: Function = val; // Error

// The unknown type is only assignable to the any type and the unknown type itself.

// Let's now see what happens when we try to perform operations on values of type unknown

// val.foo.bar; // Error
// val.trim(); // Error
// val(); // Error
// new val(); // Error
// val[0][1]; // Error

// This is the main value proposition of the unknown type: TypeScript won't let us perform arbitrary operations on values of type unknown. Instead, we have to perform some sort of type checking first to narrow the type of the value we're working with.

// =========Type Narrowing and Type Guards=========

// Type Narrowing: Narrowing a broader type(eg. unknown, any) to more specific type.
// Type Guards: These are conditions or functions that helps TypeScript perform narrowing

function getChai(kind: string | number) {
    if(typeof kind === "string") return `Making ${kind} chai...`;
    return `Order chai: ${kind}`;
}

// here you can see that we are narrowing the type which accepts both string and number into string and into number.

function servingChai(msg?: string) {
    if(msg) return `serving ${msg}`;
    return "serving default masala chai"
}

// In the above case, you can see we are using optional parameter...which means that either the parameter will be having a string or it will be undefined...and we are narrowing it to string and to undefined.

