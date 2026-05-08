// enum, interface vs type

// ფიქსირებული მნიშვნელობების სია.

// enum Directions {
//     Up = 200,
//     Down,
//     Left = 400,
//     Right
// }

// let move: Directions = Directions.Left;

// console.log(move);

// string enum
// enum statuses {
//     Success = 200,
//     NotFound = 404,
//     ServerError = 500
// }

// let err: statuses = statuses.NotFound;

// console.log(err);

// enum Roles {
//     Admin = "Administrator",
//     User = "Customer",
//     Guest = "Viewer"
// }

// Reverse Mapping (numeral enum)

// enum ragaca {
//     one = 1,
//     three = 3,
//     two = 3,
// }

// console.log(ragaca)

// შექმენით Enum  სახელი TrafficLight / წითელი ყვითელი მწვანე 

// function Person(name){
//     this.name = name;
// }

// Person.prototype.hello = function () {
//     console.log("Hello my name is " + this.name)
// }

// let p1 = new Person("John");
// p1.hello();

// enum UserRole {
//     ADMIN = "ADMIN",
//     USER = "USER",
//     GUEST = "GUEST"
// }

// function checkAccess(role: UserRole): void{
//     if( role === UserRole.ADMIN){
//         console.log("FULL ACCESS");
//     }else if( role === UserRole.USER){
//         console.log("LIMITED ACCESS");
//     }else{
//         console.log("GUEST ACCESS")
//     }
// }

// let ADMIN: UserRole = UserRole.ADMIN;

// checkAccess(UserRole.ADMIN)
// checkAccess(UserRole.USER)
// checkAccess(UserRole.GUEST)
// checkAccess(ADMIN)

// interface - object shape

// interface User {
//     name: string,
//     age: number
// }

// const user: User = {
//     name: "Joth",
//     age: 27
// }

// user.name = ""

interface Add {
    (a: number, b: number): number;
}

const sum: Add = (a, b) => a + b;

const minus: Add = (a, b) => a - b;

// inheritance - extends

interface Animal {
    name: string;
    legs: number
}

interface Dog extends Animal {
    name: string,
    breed: string
}

const dog: Dog = {
    name: "jeka",
    breed: "kokespanieli",
    legs: 4
}

console.log(minus(5, 6))

type A = {
    name: string
}

type B = {
    age: number,
    name: string
}

type C = A | B

// as <> conversion parse -> as as





enum TrafficLight {
    Red = '#FF4D4D',
    Yellow = '#FFD700',
    Green = '#2ECC71'
}

const traffic: TrafficLight = TrafficLight.Red;
console.log(traffic);

// generic

// type IUser =  {
//     id: number;
//     // [key: string]: string | number;
// } & Record<string, string>


// interface IUser {
//     id: number;
// }

// interface Cast extends IUser {
//     [key: string]: string | number
// }

///////////////////

// interface IUser {
//     id: number;
//     name: string;
// }

// interface Cast extends IUser {
//     [key: string]: any;
// }

/////////////
// interface IUser {
//     id: number;
//     name: string;
// }

// // type Cast = IUser & Record<string, any>
// type Cast = IUser & {
//     [key: string]: any;
// }




// async function getData<T>(url: string): Promise<T> {
//     const response = await fetch(url);
//     return response.json();
// }

// const user = getData<Cast>('/api/user/1');
///////////////////

interface Cast {
    id: number;
    name: string;
    [key: string]: any;
}

type Asm = {
    id: number;
    name: string;
}




async function getData<T extends Asm>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}

const user = await getData<Cast>('/api/user/1');

console.log(user.name);
