function cost(price: number, amount: number = 1, taxvalue?: number): number
{
    if (taxvalue !== undefined)
        return price*amount + price*amount*taxvalue/100;
    return price*amount;
}

var arrowCost = (price: number, amount: number = 1, taxvalue?: number) => 
{
    return taxvalue !== undefined
        ? price*amount + price*amount*taxvalue/100
        : price*amount;
}

var arrowCostImplicitReturn = (price: number, amount: number = 1, taxvalue?: number): number => 
    taxvalue !== undefined
        ? price*amount + price*amount*taxvalue/100
        : price*amount;


console.log("NAMED FUNCTION: ")
console.log(cost(10, 2));
console.log(cost(10, 2, 23));

console.log("\nARROW FUNCTION: ")
console.log(arrowCost(10, 2));
console.log(arrowCost(10, 2, 23));

console.log("\nARROW FUNCTION WITH IMPLICIT RETURN: ")
console.log(arrowCostImplicitReturn(10, 2));
console.log(arrowCostImplicitReturn(10, 2, 23));

