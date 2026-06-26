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