// objects

// სტრუქტურის აღწერა
/*
მანქანა: - ობიექტი
property: value
ფერი: წითელი
ნომერი: wi-777-li
განვლილი გზა: 150 000 KM
სიმძლავრე: 150 ცხენის ძალა
კარის რაოდენობა: 4
*/

// let car: {
//   color?: string;
//   serial_number: string;
//   hp: number;
//   km: number;
//   doors: number;
// };

// car = {
//   serial_number: "wi-777-li",
//   color: "red",
//   hp: 150,
//   km: 150000,
//   doors: 4,
//   // type: "autho" შეცდომაა რადგან არ გვაქვს მოხსენიებული განსაზღვრების დროს
// };

// let user: { readonly id: number; name: string; age: number };

// user = { id: 1, name: "kakhi", age: 27 };

// user = { id: 2, name: "john", age: 34 };
// // user.id = 3 შეცდომაა რადგან id არის readonly
// console.log(user.id);

// // Nested Object
// let student: {
//   name: string;
//   surname: string;
//   age: number;
//   address: {
//     zip: number;
//     country: string;
//     region: string;
//     city: string;
//     street: string;
//     house_number: number;
//   };
// };

// student = {
//     name: "john",
//     surname: "doe",
//     age: 27,
//     address: {
//         zip: 6000,
//         country: "Georgia",
//         region: "Adjara",
//         city: "Batumi",
//         street: "Bagrationi str.",
//         house_number: 129
//     }
// }

// console.log( student.address )

// // type alias

// type person = {
//     name: string;
//     age: number
// }

// let u1: person = {name: "john", age: 29}
// let u2: person = {name: "Jane", age: 30}

// let p: {name: string; age: number}[] = [
//     {name: "Jake", age: 31},
//     {name: "Jason", age: 32},
//     {name: "Jessica", age: 33}
// ]

// console.log(p[1].name)

// let score: { [key: string]: number | string };

// score = {
//     name: "jake",
//     math: 90,
//     georgian: 95
// }

// type user = { age: number };

// let u :{readonly name: string, age: number} = {name: "Kakhi", age: 27};

// let user1: user = u;

// console.log(user1)

// let user: {readonly id: number};

// user = {id: 1}

// user.id = 2;

// console.log(user)

// type A = {name: string, surname: string};
// type B = { [key: string]: string | number };

// type user = A & B ;
// let u : user[] = [
//     {
//     name: "john",
//     surname: "doe",
//     age: 27,
//     phone: 555555555
//     }
// ]

// filter and find

// find - ძიება - ერთ ელემენტს (პირველი რაც მოყვება)
// filter - გაფილტრავს იმის მიხედვით თუ რა გვიწერია მონაცემად

type user = { name: string; age: number };

let myuser: user[] = [
    { name: "johny", age: 22 },
    { name: "johni", age: 23 },
    { name: "johno", age: 24 },
    { name: "johnu", age: 25 },
    { name: "john", age: 21 },
    { name: "john", age: 21 },
    { name: "john", age: 21 },
    { name: "john", age: 21 },
    { name: "john", age: 21 },
];

let finduser = myuser.find((x) => x.name === "john");
console.log(finduser);

// for()  - filter ---- find -- map

