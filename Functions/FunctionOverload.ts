type User = 
{
    name: string;
    surname: string;
}

function returnUser(user: User): string;
function returnUser(userarr: User[]): string[];

function returnUser(userOrArray: User | User[]): string | string[]
{
    if (Array.isArray(userOrArray))
        return userOrArray.map(u => `${u.name} ${u.surname}`)
    else 
        return `${userOrArray.name} ${userOrArray.surname}`;
}

let userArray: User[] = 
[
    { name: "John", surname: "Doe" },
    { name: "Jane", surname: "Doe" },
]

let u: User = 
{
    name: "Janet",
    surname: "Johnson"
}

console.log(returnUser(u));
console.log(returnUser(userArray));

