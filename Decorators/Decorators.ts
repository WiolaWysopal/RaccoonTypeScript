function LogClassInformation<T extends { new (...args: any[]): {} }>(constructor: T): T 
{
    return class extends constructor 
    {
        constructor(...args: any[]) 
        {
            super(...args);
            console.log(`NEW INSTANCE OF ${constructor.name} HAS BEEN CREATED WITH VALUES:`, args);
        }
    };
}

function CountCalls(target: any, propertyKey: string, descriptor: PropertyDescriptor) 
{
    const originalMethod = descriptor.value;
    const callCounts = new WeakMap<object, number>();

    descriptor.value = function (...args: any[]) 
    {
        const instance = this;
        const previousCount = callCounts.get(instance) || 0;
        const newCount = previousCount + 1;
        callCounts.set(instance, newCount);

        console.log(`Metoda ${propertyKey} została wywołana ${newCount} raz(y) dla tej instancji`);
        return originalMethod.apply(instance, args);
    };
}

@LogClassInformation
class Order 
{
    private user: string;
    private orders: number;
    private name: string;

    constructor(user: string, orders: number, name: string) 
    {
        this.user = user;
        this.orders = orders;
        this.name = name;
    }

    @CountCalls
    placeAnOrder(): string 
    {
        return `User ${this.user} has ordered: ${this.orders} items`;
    }

    @CountCalls
    logRecord(): string 
    {
        return `User ${this.user} has ordered: ${this.orders} items of ${this.name}`;
    }
}

// Przykładowe użycie:
const order1 = new Order("Alice", 3, "Books");
order1.placeAnOrder();
order1.placeAnOrder();
order1.logRecord();

const order2 = new Order("Bob", 2, "Laptop");
order2.placeAnOrder();
order2.logRecord();
