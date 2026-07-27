// Objects in TS is same as JS but the types are additional here

const data = {
  name: "Priyanshu",
  age: 21,
};

data; // now if you will hover over "data" you will see that the types are inferred by TS

// but it's better to annotate the types manually, let's see how can we do that:-

let newData: {
  name: string;
  age: number;
} = {
  name: "Priyanshu",
  age: 21,
};

// we can also create type aliases

type latestData = {
  name: string;
  age: number;
};

let anotherData: latestData = {
  name: "Priyanshu",
  age: 21,
};

// T[] => array containing element of type T

// In TypeScript we need to enter all the required properties according to the type signature but if we add some extra properties,then sometimes it does not bother to throw an error means it is valid in TS

/*
type SuperHeros = {
    name: string[];
}

let superHeros: SuperHeros = {
    name: ["Ironman", "Batman"],
    powers: ["Scintist"]
}
*/

// here it will throw error

type SuperHeros = {
  name: string[];
};

let superHeros = {
  name: ["Ironman", "Batman"],
  power: "Ultra pro max",
};

let Heros: SuperHeros = superHeros; // ✅here TS only check weather superHeros have all the neccessary properties or not

// type splitting:-

type User = {
  name: string;
  age: number;
};

type Project = object[];

type Profile = {
    candidate: User;
    work: Project;
}

// partial, required, pick and ommit

// partial makes each property of a type structure optional

// required makes each property of a type structure required.

// example: -

/*
type studentData = {
    name: string;
    age: number;
    address: string;
    bloodGroup: string;
    university: string;
    fatherName: string;
}

function idCardMaker(idData: Partial<studentData>) {
    console.log(idData);
}

idCardMaker({name: "Priyanshu"})
*/

// In the above example you can see that even after passing only one property there is not squiggly lines, that's because all the props are optional, but due this even if you pass empty object that's also acceptable so be aware of that

// sly

/*
type studentData = {
    name: string;
    age: number;
    address?: string;
    fatherName: string;
}

function idCardMaker(idData: Required<studentData>) {
    console.log(idData);
}

idCardMaker({name: "Priyanshu", age: 21, fatherName: "//", address: "//"})
*/

// In the above example you can see that after applying required we had to give values for even the optional props

// pick and omit 

// pick: you can pick values from another type structure and use them into a given type structure

// omit: you can omit value from another type structure use them the rest into a given type structure

// example:-

type studentData = {
    name: string;
    age: number;
    address: string;
    bloodGroup: string;
    university: string;
    fatherName: string;
}

type idData = Pick<studentData, "name" | "age" | "university" | "fatherName" >;

type anotherData = Omit<studentData, "bloodGrou | address">;



