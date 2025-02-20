type Product = 
{
    name: string;
    price: number;
    category: string;
}

function getProductKeys<T extends object>(obj: T): (keyof T)[] 
{
    return Object.keys(obj) as (keyof T)[];
}

let product: Product = 
{
    name: "",
    price: 0.0,
    category: "electronics"
}

console.log(getProductKeys(product));


