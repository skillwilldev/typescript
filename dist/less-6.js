"use strict";
// objects
let myuser = [
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
