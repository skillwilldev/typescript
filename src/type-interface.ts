//დავალება 1 — Student Type
type Students = {
    id: number;
    name: string;
    age: number;
}

const student: Students[] = [
    {
        id: 1,
        name: 'Melik',
        age: 40
    },
    {
        id: 2,
        name: 'James',
        age: 22
    },
    {
        id: 3,
        name: 'Lasha',
        age: 39
    }
];

student.forEach((item) => {
    console.log(item.name);
})
//დავალება 2 — Product Interface
interface Product {
    id: number;
    title: string;
    price: number;
}

const products: Product[] = [
    {
        id: 1,
        title: 'Apple',
        price: 5

    },
    {
        id: 2,
        title: 'Bread',
        price: 1.9

    },
    {
        id: 3,
        title: 'Cheese',
        price: 15

    },
    {
        id: 4,
        title: 'Egg',
        price: 5

    },
    {
        id: 5,
        title: 'Rice',
        price: 3

    }
]

let luxyProd = products[0]?.price ?? 0;
for (let i = 1; i < products.length; i++) {
    const product = products[i]?.price ?? 0;
    if (product > luxyProd) {
        luxyProd = product;
    }
}
console.log(luxyProd);
//console.log(Math.max(...products.map(item => item.price, 0)))


//დავალება 3 — Extends-ის გამოყენება
interface Person {
    name: string;
    age: number;
}


interface Employee extends Person {
    position: string;
    salary: number;
}

const employees: Employee[] = [
    {
        name: 'Melik',
        age: 40,
        position: 'Front-End developer',
        salary: 5000
    },
    {
        name: 'James',
        age: 22,
        position: 'Full-Stack developer',
        salary: 7500
    }

]

employees.forEach((item) => {
    console.log(item.position);
})

//დავალება 4 — Omit-ის გამოყენება

interface User {
    id: number;
    username: string;
    password: string;
}

type PublicUser = Omit<User, 'password'>;

const user: PublicUser = {
    id: 10,
    username: 'Melik'
}

console.log(user);

//დავალება 5 — მონაცემების ფილტრაცია

type Book = {
    title: string;
    author: string;
    pages: number;
}

const books: Book[] = [
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        pages: 600
    },
    {
        title: 'The Master and Margarita',
        author: 'Mikhail Bulgakov',
        pages: 450
    },
    {
        title: '1984',
        author: 'George Orwell',
        pages: 320
    },
    {
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        pages: 96
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pages: 1200
    },
    {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        pages: 332
    }
];

books.forEach((item) => {
    if (item.pages > 300) {
        console.log(item.title);
    }
});

//დავალება 6 — Type + Interface ერთად

type Role = "admin" | "user" | "guest";
interface Account {
    id: number;
    name: string;
    role: Role;
}

const accounts: Account[] = [
    {
        id: 1,
        name: 'james',
        role: 'user'
    },
    {
        id: 2,
        name: 'anna',
        role: 'user'
    },
    {
        id: 3,
        name: 'michael',
        role: 'guest'
    },
    {
        id: 4,
        name: 'emily',
        role: 'user'
    },
    {
        id: 5,
        name: 'david',
        role: 'admin'
    },
    {
        id: 6,
        name: 'sophia',
        role: 'admin'
    }
];

const adminCount = accounts.reduce<number>((acc, curr) => {
    return curr.role === 'admin' ? acc + 1 : acc;
}, 0);
console.log(`admins count: ${adminCount}`);

///////////////////////
let adminCounts = 0;
for (let account of accounts) {
    if (account.role === 'admin') {
        adminCounts++;
    }
}
console.log(`admins count: ${adminCounts}`);

///////////////////////
let adminCounts1 = 0;
for (let i = 0; i < accounts.length; i++) {
    if (accounts[i]?.role === 'admin') {
        adminCounts1++;
    }
}
console.log(`admins count: ${adminCounts1}`);
///////////////////////
console.log('admins count: ' + accounts.filter(item => item.role === 'admin').length);