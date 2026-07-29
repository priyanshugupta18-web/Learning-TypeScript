// Generics in TypeScript are a feature that allows us to write reusable, type-safe code by using type parameters that are specified later when the function, class, interface, or type is used.

function ArrayWrapper<T>(item: T): Array<T> {
    return [item];
}

console.log(ArrayWrapper<number>(25));

interface result{
    output: string;
}

function LLM<A, B>(command:A, context:B ): result {
    return { output: "LLM is processing the request..." }
}

// you can also use generics with interfaces or types if you want

interface trial<T> {
    result: T;
}

type hustle<T> = {
    result: T;
}

