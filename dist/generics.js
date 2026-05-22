"use strict";
// generic
async function getData(url) {
    const response = await fetch(url);
    return response.json();
}
const user = getData('/api/user/1');
// console.log(user.name);
/////////////////////////////////////////////////////
function longLength(value) {
    console.log(value.length);
    return value;
}
console.log(longLength([10]));
console.log(longLength("10"));
//////// 1
function identity(arg) {
    return arg;
}
const num = identity(42);
const str = identity("hellow");
////////// 2 
function mergeProps(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const userWithId = mergeProps({ name: "Иван" }, { id: 101 });
function logLength(item) {
    console.log(item.length);
}
logLength("Строка"); // Works
logLength([1, 2, 3]); // Works
const userResponse = {
    status: 200,
    errors: [],
    data: { name: "Олег", age: 30 }
};
///////////////// 5 
class StorageBox {
    contents = [];
    addItem(item) {
        this.contents.push(item);
    }
}
const stringStorage = new StorageBox();
const defaultConfig = { url: "/api" }; // T defaults to any
//////////////////  7
function getValue(obj, key) {
    return obj[key];
}
const person = { name: "Анна", age: 25 };
const nameVal = getValue(person, "name"); // Type: string
// Makes all properties optional
const optionalTask = { title: "Купить молоко" };
// Makes all properties read-only
const readonlyTask = { title: "Тест", description: "Описан" };
