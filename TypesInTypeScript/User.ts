interface IUser 
{
    name: string | undefined
    age: number | null 
    accountStatus: boolean | null 
    isAdult(): boolean
    resetAccountStatus(): void
}

class User implements IUser
{
    name: string | undefined; 
    age: number | null;
    accountStatus: boolean | null;

    constructor (name: string | undefined, age: number | null, accountStatus: boolean | null)
    {
    // this.name przypisz wartość name przekazywaną w konstruktorze
        this.name = name;
        this.age = age;
        this.accountStatus = accountStatus;
    };

    isAdult(): boolean
    {
        if (this.age === null)  
            throw new Error("ERROR: AGE IS MISSING")
        if (this.age <= 0)  
            throw new Error("ERROR: AGE CAN NOT BE NEGATIVE NUMBER")
        else if (this.age >= 18)
            return true;
        return false;
    };

    resetAccountStatus(): void 
    {
        this.accountStatus = false;
    }
}

var user = new User("JaneDoe", 25, true);
var user2 = new User(undefined, 1, null);

console.log("USER")

console.log(`Is ${user.name} an adult? ${user.isAdult()}`);
console.log(`Is ${user.name} active? ${user.accountStatus}`);
user.resetAccountStatus();
console.log(`Is ${user.name} active? ${user.accountStatus}`);

console.log("USER2")

console.log(`Is ${user2.name} an adult? ${user2.isAdult()}`);
console.log(`Is ${user2.name} active? ${user2.accountStatus}`);
user2.resetAccountStatus();
console.log(`Is ${user2.name} active? ${user2.accountStatus}`);

