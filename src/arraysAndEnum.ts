// Again arrays hmne already padha hai yaha hamme types ko study karna hai

// types mostly hum declaration ke time par dekhte hai

const superHeros: string[] = ["Ironman", "Spiderman", "Batman", "Thor"];

const Hollyactresses: Array<string> = [
  "saddie Sink",
  "Zendaya",
  "Selena Gomez",
  "Emma Watson",
  "Ellizabeth Olsen",
  "Ana de armas",
];

type ActionMovies = {
  name: string;
  rating: number;
};

const actionMovies: ActionMovies[] = [
  { name: "Iron man", rating: 8 },
  { name: "Infinity war", rating: 10 },
];

// hmme readonly arrays ka bhi ka bhi access milta hai

/*
const heros: readonly string[] = ["Ironman", "Batman", "spiderman"];

heros.push("Scarlett Witch")    // here you will not be able to push anything to heros for obvious reasons
*/

// Two dimensional arrays:-

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// tuples: So tuples bhi humara TS ke andar ek data type hota hai par behind the scene ye bhi boil down hokar array me hi convert hota hai

let userTuple: [string, number] = ["Priyanshu", 21];

// now remember if you re-assigning to an tuple to aapko order ka dhayan rakhna hoga warna dikkat hogi

// userTuple = [22, "bruce"] //❌
userTuple = ["bruce", 22]; // ✅

// You can aslo create readOnly tuples and named tuples:-

let action: readonly [string, string, string] = ["Light", "Camera", "Action"];

// action.push("role");  You will see squiggly lines while doing this

// Tuples also have some methods like push(), pop(), splice() idealy they should be avoided or should be handled with extra care because these are mutating methods

// An enum (short for enumeration) is a TypeScript feature that lets you define a fixed set of named constants

// Instead of using arbitrary numbers or strings throughout your code, you give them meaningful names

// by default all the enums are numeric enums

enum Role {
  Admin,
  User,
  Mentor,
}

console.log(Role.Admin); //0
console.log(Role.User); //1
console.log(Role.Mentor); //2

// By default TS starts the value with 0 and increments it by 1, you can give a custom starting value if you want or you can give each member a custom numeric value

enum Heros {
  IronMan = 2,
  Batman, //3
  SpiderMan, //4
}

enum Fighters{
    TheRock = 10,
    RomanReings = 20,
    TheUndertaker = 53,
}

// You can also asign string to members such enums are called string enums

enum Tables{
    Table1 = "USERS",
    Table2 = "POSTS",
    Table3 = "REELS",
}

console.log(Tables.Table1) //USERS
console.log(Tables.Table2) //POSTS
console.log(Tables.Table3) //REELS

// Usually enums are kept constant but just to make sure you can use const key word  also

const enum Users{
    User1 = "Priyanshu",
    User2 = "Ravi",
    User3 = "Arav",
}

// Now there are heterogenous enums also where enums and strings both are assigned to members

// You can only use strings and numbers or computed numbers in enums nothing else is acceptable

