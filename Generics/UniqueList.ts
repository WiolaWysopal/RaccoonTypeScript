class UniqueList<T>
{
    private arr: T[];

    constructor(arr: T[] = [])
    {
        this.arr = arr;
    }

    addElement(value: T): void 
    {
        if (!this.arr.includes(value)) 
        {
            this.arr.push(value);
        }
    }

    getElements(): T[]
    {
        return this.arr;
    }
}


let array = new UniqueList<number>()
array.addElement(1);
array.addElement(11);
array.addElement(111);

console.log(array.getElements());