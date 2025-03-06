function createdAt<T extends { new (...args: any[]): {} }>(Base: T) 
{
    return class extends Base {
        createdAt: string;

        constructor(...args: any[]) {

            super(...args);
            let date = new Date();
            let day = date.getDate(); // Poprawione z getDay() na getDate()
            let month = date.getMonth() + 1; // Miesiące w JS są od 0 do 11, więc dodajemy 1
            let year = date.getFullYear();

            this.createdAt = `Created at: ${day}-${month}-${year}`;
        }

        displayPlayer ()
        {
            return this.createdAt;
        }
    }
}

interface IPlayer 
{
    nickname: string;
    lvl: number;
    showPlayer(): string;
}

@createdAt
class Player implements IPlayer {
    nickname: string;
    lvl: number;
    
    constructor (nickname: string, lvl: number) {
        this.nickname = nickname;
        this.lvl = lvl;
    }

    showPlayer(): string {
        return `Hi, my name is ${this.nickname}, and I am on ${this.lvl} level`;
    }
}

let player1 = new Player("Viago", 1);

console.log(player1.showPlayer());
console.log((player1 as any).displayPlayer());
