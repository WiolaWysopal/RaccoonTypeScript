abstract class Shape
{
    private name: string;

    constructor(name: string)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
    abstract logGeometric(): void;
}

class Circle extends Shape
{
    private radius: number = 0.0;

    constructor (name: string, radius: number)
    {
        super(name);
        this.radius = radius;
    }
    
    calculateArea(): number 
    {
        return parseFloat((Math.PI*this.radius**2).toFixed(2));
    }

    calculatePerimeter(): number
    {
        return parseFloat((2*Math.PI*this.radius).toFixed(2));
    }  

    logGeometric(): void 
    {
        console.log(`Name: ${this.getName()}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`);
    }
}

class Rectangle extends Shape
{  
    private length: number = 0;
    private width: number = 0;

    constructor (name: string, length: number, width: number)
    {
        super(name);
        this.length = length;
        this.width = width;
    }

    calculateArea(): number
    {
        return this.length * this.width;
    }

    calculatePerimeter(): number 
    {
        return 2*this.length + 2*this.width;
    }

    logGeometric(): void 
    {
        console.log(`Name: ${this.getName()}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`);
    }
}

let rect = new Rectangle("first rectangle", 1, 2);
rect.logGeometric();

let circ = new Circle("First circle", 3);
circ.logGeometric();

