"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee1 = {
    id: "user-001",
    name: "Melik",
    status: "Active",
};
const employee2 = {
    id: 1,
    name: "James",
    status: "Active",
};
const userAdmin = {
    id: 1,
    name: "Melik",
    role: "sysAdmin",
};
const prod1 = {
    id: 20,
    name: "Melik",
    price: 320,
    description: "loremloremloremloremloremloremloremloremlorem",
};
const prod2 = {
    id: 20,
    name: "Melik",
    price: 320,
};
const publicUsr = {
    id: 14,
    name: "Melik",
    email: "melo@gmail.com",
};
const productList = [
    { id: 1, name: "Laptop", price: 1200, currency: "USD" },
    { id: 2, name: "Smartphone", price: 800, currency: "EUR" },
    { id: 3, name: "Keyboard", price: 150, currency: "GEL" },
    { id: 4, name: "Mouse", price: 50, currency: "USD" },
    { id: 5, name: "Monitor", price: 350, currency: "GEL" },
];
console.log(productList);
const order = {
    id: 20,
    customer: {
        id: 421,
        name: "Melik",
    },
    total: 10,
};
const order2 = {
    id: 22,
    customer: {
        id: 441,
        name: "James",
    },
    total: 15,
};
const order3 = {
    id: 24,
    customer: {
        id: 121,
        name: "Lasha",
    },
    total: 8,
};
console.log(order, order2, order3);
