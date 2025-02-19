function checkStringOrNumber(data: number | string): string | number
{
    if (typeof data === "string")
        return "'s'" + data;
    if (typeof data === "number")
        return Math.round(data);
    throw new Error("ERROR: DATA IS NEITHER A STRING NOR A NUMBER")
}

console.log(checkStringOrNumber("string"));
console.log(checkStringOrNumber(2.4));
//console.log(checkStringOrNumber(12n));

// Predykat - true/false; check if value is Date and if it's correct

function isDate(value: unknown): value is Date 
{
    return value instanceof Date && !isNaN(value.getTime());
}


function checkDate(value: unknown): string | null 
{
    if (isDate(value)) 
    {
        const day = value.getDate().toString().padStart(2, "0");
        const month = (value.getMonth() + 1).toString().padStart(2, "0");
        const year = value.getFullYear();
        return `${day}-${month}-${year}`;
    }
    return null;
}

