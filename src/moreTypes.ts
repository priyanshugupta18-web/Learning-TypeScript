// type assertion: this is a method in which we forcefully assert type to a given variable and TypeScript compiler to trust us.

// after type assetion, TypeScript throwing errors but this could be risky if your are wrong about type then it will throw error at runtime and hence it should be done safely.

let response: any = "42"

//let numericLength = response.length  // this is also correct but here won't get any suggestions.

let numericLength = (response as string).length // after asserting the type you will get all the suggestions and everything.

type Book = {
    name: string;
}

let bookString = "{'name':'I have got a book'}"

// let bookObj = JSON.parse(bookString);

// console.log(bookObj.na)

// in above case you will not get any suggestions about the properties, for that you will need to assert the type Book

let bookObj = JSON.parse(bookString) as Book;

console.log(bookObj.name) //✅

let inputElement = document.getElementById("username") as HTMLInputElement; // asserted type for getting suggestions

// sometimes we also apply safety checks in tyCatch as a better practice✅

try {
    
} catch (error) {
    if(error instanceof Error) {
        console.log(error.message);
    }
    console.log("error is: ", error);
}

// sometimes we need to use type assertion for below cases

let data: unknown = "I am a developer";
// let stringData: string = data    //❌ it will thow error which is obvious
let stringData: string = data as string; //✅ no errors will be thrown

// type: never => so basically when we do exhaustive type-narrowing then after narrowing to every constituent type we are left with nothing...and the variable type becomes never which tells that never is narrowed to every type. or if any type is left or more than one types are left then it automatically narrows to that type or those types.

type Role = "user" | "admin" | "superAdmin"

function redirectBasedOnRole(role: Role) {
    if(role === "user") {
        console.log("redirecting to user dashboard");
        return;
    }
    if(role === "admin") {
        console.log("redirecting to admin dashboard");
        return;
    }
    // role; // role: "superAdmin"
    if(role === "superAdmin") {
        console.log("redirecting to superAdmin dashboard");
        return
    }
    role; //role: never👍
}

// also don't forget to use return statement in each block because TypeScript's control-flow analysis only narrows a variable to never when it can prove that execution cannot continue past that point.

// It does not mean we need to use return everytime we narrow but if you want TypeScript to know that the execution stops here on that branch.


