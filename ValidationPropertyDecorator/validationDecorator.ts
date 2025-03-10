function ValidateNumber(min: number, max: number) {
    return function (target: any, propertyKey: string) {
        let value: number;

        Object.defineProperty(target, propertyKey, {
            get: () => value,
            set: (newValue: number) => {
                if (typeof newValue !== "number") {
                    throw new Error(`Właściwość ${propertyKey} musi być liczbą.`);
                }
                if (newValue < min || newValue > max) {
                    throw new Error(`Właściwość ${propertyKey} musi być w zakresie ${min} - ${max}.`);
                }
                value = newValue;
            },
            enumerable: true,
            configurable: true
        });
    };
}

class Example {
    @ValidateNumber(1, 100)
    public age: number;

    constructor(age: number) {
        this.age = age;
    }
}

const person = new Example(25);
console.log(person.age); // 25

try {
    person.age = -5;
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error("Wystąpił nieznany błąd.");
    }
}

try {
    person.age = 150;
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error("Wystąpił nieznany błąd.");
    }
}
