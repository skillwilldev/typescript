//დავალება 1 — თანამშრომლის მონაცემები (Type Alias)
type Status = "Active" | "Inactive";
type EmployeeID = string | number;

type Employee = {
  id: EmployeeID;
  name: string;
  status: Status;
};

const employee1: Employee = {
  id: "user-001",
  name: "Melik",
  status: "Active",
};

const employee2: Employee = {
  id: 1,
  name: "James",
  status: "Active",
};

//დავალება 2 — მომხმარებლის პროფილი

interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

const userAdmin: Admin = {
  id: 1,
  name: "Melik",
  role: "sysAdmin",
};

//დავალება 3 — პროდუქტის კატალოგი
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const prod1: Product = {
  id: 20,
  name: "Melik",
  price: 320,
  description: "loremloremloremloremloremloremloremloremlorem",
};

const prod2: Product = {
  id: 20,
  name: "Melik",
  price: 320,
};

//დავალება 4 — Omit Utility Type
interface User1 {
  id: number;
  name: string;
  email: string;
  password: string;
}
type PublicUser = Omit<User1, "password">;

const publicUsr: PublicUser = {
  id: 14,
  name: "Melik",
  email: "melo@gmail.com",
};

//დავალება 5 — ონლაინ მაღაზიის მონაცემები
type Currency = "USD" | "EUR" | "GEL";

interface Product1 {
  id: number;
  name: string;
  price: number;
  currency: Currency;
}

const productList: Product1[] = [
  { id: 1, name: "Laptop", price: 1200, currency: "USD" },
  { id: 2, name: "Smartphone", price: 800, currency: "EUR" },
  { id: 3, name: "Keyboard", price: 150, currency: "GEL" },
  { id: 4, name: "Mouse", price: 50, currency: "USD" },
  { id: 5, name: "Monitor", price: 350, currency: "GEL" },
];

console.log(productList);

//დავალება 6 — შეკვეთის სისტემა
interface Customer {
  id: number;
  name: string;
}
interface Order {
  id: number;
  customer: Customer;
  total: number;
}

const order: Order = {
  id: 20,
  customer: {
    id: 421,
    name: "Melik",
  },
  total: 10,
};

const order2: Order = {
  id: 22,
  customer: {
    id: 441,
    name: "James",
  },
  total: 15,
};

const order3: Order = {
  id: 24,
  customer: {
    id: 121,
    name: "Lasha",
  },
  total: 8,
};

console.log(order, order2, order3);

export {};
