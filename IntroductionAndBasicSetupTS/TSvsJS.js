var array = [1, 2, 3.4];
var array2 = ["ts", "js", "let", "var", "const"];
function calculateNumeric(arr) {
    var sum = 0.0;
    if (!Array.isArray(arr)) {
        throw new Error("ERROR: INPUT IS NOT ARRAY");
    }
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var a = arr_1[_i];
        if (typeof a === "number")
            sum += a;
        else if (typeof a === "bigint")
            sum += Number(a);
        else
            // in TS + with string concatenates string elements together;
            // to simulate an error situation it's neccessary to create 
            // an error situation which can be * instead of +
            sum *= a;
    }
    return sum;
}
console.log("ARRAY: Sum of number elements: ".concat(calculateNumeric(array)));
//console.log(`ARRAY2: Sum of number elements: ${calculateNumeric(array2)}`);
