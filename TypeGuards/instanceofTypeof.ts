function isDate(value: unknown): value is Date
{
    return value instanceof Date && !isNaN(value.getTime())
}

function isNumber(value: unknown): value is number
{
    return typeof value === "number";
}

function narrowTypes(value: unknown): string
{
    if (isDate(value))
    {
        let day = value.getDate().toString().padStart(2, "0");
        let month = (value.getMonth() + 1).toString().padStart(2, "0");
        let year = value.getFullYear().toString().padStart(2, "0");
        let hours = value.getHours().toString().padStart(2, "0");
        let minutes = value.getMinutes().toString().padStart(2, "0");
        let seconds = value.getSeconds().toString().padStart(2, "0");

        return `Date: ${day}.${month}.${year} Time: ${hours}:${minutes}:${seconds}`;
    }

    if (isNumber(value))
    {
        if (value > 0) return `${value} is positive number`;
        if (value < 0) return `${value} is negative number`;
        return "zero"
    }

    return "An object was delivered that does not match the specified criteria."
}

console.log(narrowTypes(12));
console.log(narrowTypes(new Date("2025-02-19T12:14:00")));
console.log(narrowTypes(new Date()));
console.log(narrowTypes(123n));