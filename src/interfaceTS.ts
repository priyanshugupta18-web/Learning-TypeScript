// basically when we want a variable or a prop to be of a given type we define the type structure on way
// example

// function placeOrder(details: {name: string; id: number; qty: number; address: string}) {
//     return console.log(`order placed, order details: ${details}`);
// }

// But if we have to use the same structure multiple times then we don't prefer it, rather we create a type alias and use it as per our requirement

type Details = {
  name: string;
  id: number;
  qty: number;
  address: string;
};

function placeOrder(details: Details) {
  return console.log(`order placed, order details: ${details}`);
}

function displayOrders(itemDetails: Details) {
  return console.log(`The ordered item: ${itemDetails}`);
}

// Type aliases are used for creating different type structures but let's say we want to implement a type structure into a class, now classes only implements the type structure that result into a single fixed object shape

/*
type Student = {
    name: string;
    rollNumber: number;
    sem: number;
    cgpa: number;
}

class students implements Student {
    name= "Priyanshu";      //class fields 
    rollNumber= 52;
    sem= 3;
    cgpa= 8.2;
}
*/

// In the above example the shape was resulting into a fixed object shape and that's why we could implement it into the class

// type Student = string

// class students implements Student{
//     students
// }

// you will find errors while doing above implementation

/*
type Student = {
    name: string;
    rollNumber: number;
    cgpa: number;
    sem: number;
} | {
    userName: string;
    repositories: number;
    commits: number;
}

*/

// Now here the type alias Student don't have a fixed shape and that's why you can't implement it on classes

// class students implements Student {
//     name
// }

// But the intersection will work

// Interfaces has syntax which define structures having shape of an object and that's why they are preffered in such situations

interface Student {
  name: string;
  rollNumber: number;
  sem: number;
  cgpa: number;
  editDetails?(details: {
    name: string;
    rollNumber: number;
    sem: number;
    cgpa: number;
  }): void; //if you want to declare a method simply specify its signatures(name, parameters and return type)
}

class students implements Student {
  name: string;
  rollNumber: number;
  sem: number;
  cgpa: number;
  editDetails(details: {
    name: string;
    rollNumber: number;
    sem: number;
    cgpa: number;
  }): void {
    //
  }

  constructor(name: string, rollNumber: number, sem: number, cgpa: number) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.sem = sem;
    this.cgpa = cgpa;
  }
}

// union( | ): let's say you are taking union of multiple types or multiple custom types then assume set of variables corresponding to each type so taking union of all of them will give set of all such variables that has signature similar or identical to atleast one of them

// example:-

type A = {
    name: string;
}

type B = {
    age: number;
}

type C = A | B ; // it will accept {name,...}, {age,...}, {name, age,...}

// intersection( & ): let's say you are taking intersection of multiple types or multiple custom types then assume set of variables corresponding to each type so taking intersection of all of them will give the set of all such variables whose signature includes the signature of all of them, basically the variables which are common to all such sets 

// example:-

type X = {
    name: string;
}

type Y = {
    age: number;
}

type Z = X & Y; // it will accept {name, age,...}

// you can also add optional properties and also keep some properties readOnly properties

interface Data{
    readonly title: string;    //readonly
    readonly Description: string;   //readOnly
    writer?: string;    //optional
}
