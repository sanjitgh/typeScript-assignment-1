function formatString(input: string, toUpper?: boolean): string {
    return toUpper === true ? input.toUpperCase() : input.toLowerCase()
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));







function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 4)
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));







function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
}

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));









class Vehicle {
    private _make: string;
    private _year: number;

    constructor(make: string, year: number) {
        this._make = make;
        this._year = year;
    }

    getInfo() {
        console.log(`Make: ${this._make}, Year:${this._year} `);
    }
}

class Car extends Vehicle {
    private _model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this._model = model;
    }

    getModel() {
        console.log(`Model: ${this._model}`);
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();











function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    else {
        return value * 2
    }

}

console.log(processValue("hello"));
console.log(processValue(10));










interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    } else {
        return products.reduce((max, product) => product.price > max.price ? product : max
        )
    }
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

getMostExpensiveProduct(products);










enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day >= Day.Monday && day <= Day.Friday) {
        return "Weekday";
    } else {
        return "Weekend";
    }

}

getDayType(Day.Monday);
getDayType(Day.Sunday);










async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"))
            } else {
                resolve(n * n)
            }
        }, 1000);
    })
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);    
