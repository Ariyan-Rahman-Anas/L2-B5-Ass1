"use strict";
{
    //
    // 1
    function formatString(input, toUpper) {
        if (toUpper === false) {
            console.log(input.toLocaleLowerCase());
        }
        else {
            console.log(input.toUpperCase());
        }
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];
    function filterByRating(books) {
        const filteredBooks = books.filter(book => book.rating >= 4);
        console.log(filteredBooks);
    }
    // filterByRating(books)
    // 3
    function concatenateArrays(...arrays) {
        console.log(arrays.reduce((prev, next) => prev.concat(next)));
    }
    // concatenateArrays(["a", "b"], ["c"]);
    // concatenateArrays([1, 2], [3, 4], [5]);
    // 4
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    // myCar.getInfo()
    // myCar.getModel()
    // 5
    function processValue(value) {
        console.log(typeof value === "string" ? value.length : value * 2);
    }
    // const allProducts: Product[] = [];
    const allProducts = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    function getMostExpensiveProduct(products) {
        if (!products.length) {
            console.log(null);
            return;
        }
        const expensiveProduct = products.reduce((prev, curr) => curr.price > prev.price ? curr : prev);
        console.log(expensiveProduct);
    }
    // getMostExpensiveProduct(allProducts)
    // 7
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        console.log(day === Day.Friday ? "Weekend" : "Weekday");
    }
    // getDayType(Day.Monday)
    // getDayType(Day.Sunday)
    // getDayType(Day.Friday)
    // 8
    async function squareAsync(n) {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                return reject(new Error("Negative number not allowed"));
            }
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    }
    squareAsync(4)
        .then(console.log)
        .catch(console.error);
    squareAsync(-3)
        .then(console.log)
        .catch(console.error);
    //
}
