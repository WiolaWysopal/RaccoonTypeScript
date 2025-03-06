function logMethodCalls(target: any, propertyKey: string, descriptor: PropertyDescriptor) 
{
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) 
    {
        // Logowanie argumentów przed wywołaniem metody
        console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);

        // Wywołanie oryginalnej metody i przechwycenie wyniku
        const result = originalMethod.apply(this, args);

        // Logowanie wyniku po wywołaniu metody
        console.log(`${propertyKey} returned: ${JSON.stringify(result)}`);

        // Zwrócenie wyniku
        return result;
    };

    return descriptor;
}

class User {
    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    @logMethodCalls
    showUser(age: number): string {
        return `User: ${this.name} ${this.surname}, Age: ${age}`;
    }
}

let user1 = new User('John', 'Doe');
console.log(user1.showUser(30));
