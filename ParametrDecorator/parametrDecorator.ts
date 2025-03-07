function paramLogger(target: any, methodName: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        // Rejestrowanie metadanych tylko dla parametrów, które zostały przekazane
        const paramsMetadata = methodName
            .split('')
            .map((_, index) => args[index] !== undefined ? {
                paramName: `param${index + 1}`,
                paramType: typeof args[index],
                defaultValue: args[index] ?? 'undefined'
            } : null)
            .filter(param => param !== null); // Filtrujemy null w przypadku undefined

        console.log(`Metoda: ${methodName}`);
        paramsMetadata.forEach(metadata => {
            console.log(`Parameter: ${metadata.paramName}, type: ${metadata.paramType}, default value: ${metadata.defaultValue}`);
        });

        // Wywołanie oryginalnej metody
        return originalMethod.apply(this, args);
    };
}

class User {
    name: string;
    surname: string;
    tel: string;
    age: number;

    constructor(name: string, surname: string, tel?: string, age?: number) {
        this.name = name;
        this.surname = surname;
        this.tel = tel || '';
        this.age = age || 0;
    }

    @paramLogger
    showUser(): string {
        return `User credentials: name: ${this.name} ${this.surname}, telephone: ${this.tel}, age: ${this.age}`;
    }

    @paramLogger
    assignAge(age: number = 0) { // Domyślna wartość dla parametru
        if (this.age === 0) {
            this.age = age;
        }
        return this.age;
    }

    @paramLogger
    assignTel(tel: string = '') { // Domyślna wartość dla parametru
        if (this.tel === '') {
            this.tel = tel;
        }
    }
}

const user = new User("John", "Doe");
user.assignAge(30);
console.log(user.showUser());
user.assignTel("123456789");
console.log(user.showUser());

