// Augmentacja interfejsu Array
interface Array<T> 
{
    first(): T | undefined;
}

// Implementacja metody first
Array.prototype.first = function <T>(): T | undefined 
{
    return this.length > 0 ? this[0] : undefined;
};

// Przykładowe użycie
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers.first()); // Output: 1

const emptyArray: string[] = [];
console.log(emptyArray.first()); // Output: undefined
