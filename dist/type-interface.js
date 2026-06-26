const student = [
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
});
const products = [
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
];
let luxyProd = products[0]?.price ?? 0;
for (let i = 1; i < products.length; i++) {
    const product = products[i]?.price ?? 0;
    if (product > luxyProd) {
        luxyProd = product;
    }
}
console.log(luxyProd);
const employees = [
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
];
employees.forEach((item) => {
    console.log(item.position);
});
const user = {
    id: 10,
    username: 'Melik'
};
console.log(user);
const books = [
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
const accounts = [
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
const adminCount = accounts.reduce((acc, curr) => {
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
export {};
