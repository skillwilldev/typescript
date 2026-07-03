// დავალება 1 — მართკუთხედის ფართობი
// შექმენი ფუნქცია:
// რომელიც დააბრუნებს მართკუთხედის ფართობს.
function getArea(width, height) {
    return width * height;
}
console.log(getArea(4, 5));
//დავალება 2 — ტემპერატურის შემოწმება
const temperature = 25;
if (temperature > 20) {
    console.log('Warm');
}
else {
    console.log('Cold');
}
const films = {
    id: 25,
    movie: "Action"
};
console.log(films);
//დავალება 4 — Book კლასი
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
const book = new Book("The song of Ice and fire", "George Martin");
console.log(book.title);
console.log(book.author);
export {};
