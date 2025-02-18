function add(a: number, b: number): number 
{
    return a + b;
}

const result: number = add(5, 10);
console.log(result);

// non-explicite add function

function nonExpliciteAdd(a: number, b: number)
{
    return a + b;
}

const nonExpliciteResult = nonExpliciteAdd(2, 3);
console.log(nonExpliciteResult);