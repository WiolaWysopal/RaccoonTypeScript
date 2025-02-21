interface IEmployee
{
    name: string;
    surname: string;
    email?: string;
    phoneNumber?: string;
    describeEmployee(): string;
}

class Employee implements IEmployee
{
    name: string;
    surname: string;
    email?: string;
    phoneNumber?: string;

    constructor(name: string, surname: string);
    constructor(name: string, surname: string, email?: string);
    constructor(name: string, surname: string, email?: string, phoneNumber?: string);
    
    constructor(name: string, surname: string, email?: string, phoneNumber?: string)
    {
        this.name = name;
        this.surname = surname;
        this.email = email ?? "EMAIL UNAVAILABLE";
        this.phoneNumber = phoneNumber ?? "PHONE UNAVAILABLE";
    };
    
    describeEmployee(): string 
    {
        return `${this.name} ${this.surname} ${this.email} ${this.phoneNumber}`;
    }
}

let e1 = new Employee("Jane", "Doe");
let e2 = new Employee("John", "Doe", "john.doe@mail.com");
let e3 = new Employee("Janet", "Doe", "john.doe@mail.com", "123-456-789");
console.log(e1.describeEmployee());
console.log(e2.describeEmployee());
console.log(e3.describeEmployee());

