
    function formatString(input: string, toUpper?: boolean) {
        if (toUpper === false) {
            console.log(input.toLocaleLowerCase())
        } else {
            console.log(input.toUpperCase())
        }
    }

    // formatString("Hello")
    // formatString("Hello", true)
    // formatString("Hello", false)






    interface Book {
        title: string
        rating: number
    }

    const books: Book[] = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

    function filterByRating(books: Book[]) {
        const filteredBooks = books.filter(book => book.rating >= 4)
        console.log(filteredBooks)
    }

    // filterByRating(books)





function concatenateArrays<T>(...arrays: T[][]) {
        console.log(arrays.reduce((prev, next) => prev.concat(next)))
    }
    // concatenateArrays(["a", "b"], ["c"]);
    // concatenateArrays([1, 2], [3, 4], [5]);







    class Vehicle {
        private make: string
        private year: number
        constructor(make: string, year: number) {
            this.make = make
            this.year = year
        }
        public getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`)
        }
    }

    class Car extends Vehicle {
        private model: string
        constructor(make: string, year: number, model: string) {
            super(make, year)
            this.model = model
        }
        public getModel() {
            console.log(`Model: ${this.model}`)
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    // myCar.getInfo()
    // myCar.getModel()






    function processValue(value: string | number) {
        console.log(typeof value === "string" ? value.length : value * 2)
    }
    // processValue("hello")
    // processValue(10); 







    interface Product {
        name: string
        price: number
    }
    // const allProducts: Product[] = [];
    const allProducts: Product[] = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    function getMostExpensiveProduct(products: Product[]) {
        if (!products.length) {
            console.log(null);
            return;
        }
        const expensiveProduct = products.reduce((prev, curr) => curr.price > prev.price ? curr : prev)
        console.log(expensiveProduct)
    }
    // getMostExpensiveProduct(allProducts)








    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    function getDayType(day: Day) {
        console.log(day === Day.Friday ? "Weekend" : "Weekday")
    }
    // getDayType(Day.Monday)
    // getDayType(Day.Sunday)
    // getDayType(Day.Friday)








    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                return reject(new Error("Negative number not allowed"));
            }
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        })
    }

    squareAsync(4)
    .then(console.log)         
    .catch(console.error);

// squareAsync(-3)
//     .then(console.log)
//     .catch(console.error); 
