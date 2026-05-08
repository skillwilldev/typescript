"use strict";
// generic
async function getData(url) {
    const response = await fetch(url);
    return response.json();
}
const user = getData('/api/user/1');
// console.log(user.name);
