var array = [1, 2, 3.4, -12n];
var array2 = ["ts", "js", "let", "var", "const"]

function calculateNumeric(arr)
{
    let sum = 0.0;

    if (!Array.isArray(arr))
    {
        throw new Error("ERROR: INPUT IS NOT ARRAY");
        
    }

    for (let a of arr)
    {
        if (typeof a === "number")
            sum += a;
        else if (typeof a === "bigint")
            sum += Number(a);
        else
    // in JS + with string concatenates string elements together
    // to simulate an error situation it's neccessary to create 
    // an error situation which can be * instead of +
            sum *= a;
    }
    return sum;
}

console.log(`ARRAY: Sum of number elements: ${calculateNumeric(array)}`);
console.log(`ARRAY2: Sum of number elements: ${calculateNumeric(array2)}`);

