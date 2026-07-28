// In interfaces we can aslo define index signature:-

interface IceCream {
  [flavour: string]: number;
}

const ratings: IceCream = {
  chocolate: 10,
  vanilla: 7,
  kesarPista: 10,
};

// If you are defining same interfaces at multiple places then all they all will merge

interface Exp1 {
  prop1: string;
}
interface Exp1 {
  prop2: string;
}

const Exp: Exp1 = {
  prop1: "",
  prop2: "",
};

//  You can extend interfaces

interface A {
  name: string;
}
interface B {
  age: string;
}
interface C extends A, B {
  rollNumber: string;
}

const value: C = {
  name: "",
  age: "",
  rollNumber: "",
};
