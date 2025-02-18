interface IPerson
{
    name: string | undefined;
    surname: string | undefined;
    age: number | null;
    city: string | null;
    role: Role | undefined;
    greeting(): void;
    assignRole(role: Role): Role;
}

class Person implements IPerson
{
    name: string | undefined;
    surname: string | undefined;
    age: number | null;
    city: string | null;
    role: Role | undefined;

    constructor (name: string, surname: string, age: number | null, city: string)
    {
        if (!name || !surname)
            throw new Error("ERROR: NO GIVEN NAME");
        
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.city = city;
        this.role = undefined;
    }

    greeting(): void 
    {
        console.log(`Hello, I'm ${this.name} ${this.surname}!`);
    }
    
    assignRole(role: Role): Role 
    {
        this.role = role;
        return role;
    }
}

enum Role 
{
    User = 'User',
    Admin = 'Admin',
    SuperAdmin = 'SuperAdmin',
    Moderator = 'Moderator',
    Guest = 'Guest',
    Editor = 'Editor',
    Redactor = 'Redactor'
}

function printRole(per: Person[], r: Role): string[] 
{
    console.log(`\nWANTED ROLE: ${r}`);
    return per.filter(p => p.role === r).map(p => p.name!);
}

var p1 = new Person("Jane", "Doe", 26, "Alabama"); 
//p1.greeting();
p1.assignRole(Role.Admin);

//var p2 = new Person("", "", 0, "Oklahoma");
var p3 = new Person("John", "Doe", null, "Kazachstan");
//p3.greeting();
p3.assignRole(Role.Admin);

var p4 = new Person("N", "N", 13, "Mallorca");
p4.assignRole(Role.Guest);

var p5 = new Person("Alice", "Hascat", 20, "Cracow");
p5.assignRole(Role.Moderator);

var p6 = new Person("Willie", "Wonka", 33, "Wonderland");
p6.assignRole(Role.Moderator);

var p7 = new Person("Barry", "Williams", 31, "Firenzo");
p7.assignRole(Role.Guest);

var p8 = new Person("Catelyn", "Stark", 27, "Winterfell");
p8.assignRole(Role.SuperAdmin);

var p9 = new Person("Jean", "Rameau", 66, "Paris");
p9.assignRole(Role.Editor);

var p10 = new Person("Woodraw", "Johnson", 69, "Brikleberry");
p7.assignRole(Role.Redactor);

let personArray: Person[] = [p1, p3, p4, p5, p6, p7, p8, p9, p10];

console.log(printRole(personArray, Role.Admin));
console.log(printRole(personArray, Role.Moderator));

