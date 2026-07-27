// functions in TS is mostly what we already know from JS but the types are extra here

// In functions in TS, two things matter the most:-
// 1. the types of arguments we are accepting
// 2. the return types

function helloUser(user: string):void {
    console.log(`Hello ${user}`)
}

// the above type of functions are called logger functions as they just log stuffs

// they don't return anything, that's why their return type is void(signifies that we are not returning anything)

// then there are default parameters and optional parameters

// optional parameters: these are parameters which are optional

// defualt parameters: these parameters are the parameters such that if their values are not provided their values will be default values

// usually optional and default parameters are written in the last if we have multiple parameters(convention)

function submitForm(formData: object, isSpecial?: boolean, privacePolicy: boolean = false):void {
    console.log("submitting form");
}




