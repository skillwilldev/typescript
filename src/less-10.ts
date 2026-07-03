// დავალება 1 — მართკუთხედის ფართობი
// შექმენი ფუნქცია:
// რომელიც დააბრუნებს მართკუთხედის ფართობს.

function getArea(width: number, height: number): number {
    return width * height;
}

console.log(getArea(4, 5));

//დავალება 2 — ტემპერატურის შემოწმება
const temperature: number = 25;
if (temperature > 20) {
    console.log('Warm');
} else {
    console.log('Cold')
}

//დავალება 3 — ფილმის მონაცემები
type MovieGenre = "Action" | "Comedy" | "Drama";
type MovieId = string | number;

interface Movies {
    id: MovieId;
    movie: MovieGenre;
}

const films: Movies = {
    id: 25,
    movie: "Action"
}
console.log(films);

//დავალება 4 — Book კლასი
class Book {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

const book = new Book("The song of Ice and fire", "George Martin");
console.log(book.title);
console.log(book.author);