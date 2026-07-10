class Movie {
    id;
    title;
    director;
    genre;
    year;
    rating;
    status;
    constructor(id, title, director, genre, year, rating, status) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.year = year;
        this.rating = rating;
        this.status = status;
    }
    get Id() {
        return this.id;
    }
    get Title() {
        return this.title;
    }
    get Director() {
        return this.director;
    }
    get Genre() {
        return this.genre;
    }
    get Year() {
        return this.year;
    }
    get Rating() {
        return this.rating;
    }
    get Status() {
        return this.status;
    }
    getMovieTitle() {
        console.log(this.title);
    }
}
const movies = [
// new Movie(1, "Forrest Gump", "Robert Zemeckis", "drama", 1994, 8.8, "Watched"),
// new Movie(2, "The Shawshank Redemption", "Frank Darabont", "drama", 1994, 9.3, "Watched"),
// new Movie(3, "Inception", "Christopher Nolan", "sci-fi", 2010, 8.8, "Watched"),
// new Movie(4, "The Godfather", "Francis Ford Coppola", "crime", 1972, 9.2, "Want To Watch"),
// new Movie(5, "Pulp Fiction", "Quentin Tarantino", "crime", 1994, 8.9, "Watched"),
// new Movie(6, "Interstellar", "Christopher Nolan", "sci-fi", 2014, 8.6, "Want To Watch"),
// new Movie(7, "The Dark Knight", "Christopher Nolan", "action", 2008, 9.0, "Watched"),
// new Movie(8, "Fight Club", "David Fincher", "drama", 1999, 8.8, "Didn't Watch"),
// new Movie(9, "The Matrix", "Lana Wachowski", "sci-fi", 1999, 8.7, "Watched"),
// new Movie(10, "Parasite", "Bong Joon-ho", "thriller", 2019, 8.6, "Want To Watch"),
];
movies[0]?.getMovieTitle();
class MovieStaff {
    id;
    name;
    surname;
    position;
    experience;
    constructor(id, name, surname, position, experience) {
        this.Id = id;
        this.Name = name;
        this.Surname = surname;
        this.Position = position;
        this.Experience = experience;
    }
    set Id(id) {
        this.id = id;
    }
    set Name(name) {
        this.name = name;
    }
    set Surname(surname) {
        this.surname = surname;
    }
    set Position(position) {
        this.position = position;
    }
    set Experience(experience) {
        this.experience = experience;
    }
    get Id() {
        return this.id;
    }
    get Name() {
        return this.name;
    }
    get Surname() {
        return this.surname;
    }
    get Position() {
        return this.position;
    }
    get Experience() {
        return this.experience;
    }
    myJob() {
        return `Hello, i am ${this.surname} ${this.name}. I work as ${this.position}`;
    }
}
class Critics extends MovieStaff {
    target;
    point;
    verify;
    constructor(id, name, surname, position, experience, target, point, verify) {
        super(id, name, surname, position, experience);
        this.Target = target;
        this.Point = point;
        this.Verify = verify;
    }
    set Target(target) {
        this.target = target;
    }
    set Point(point) {
        this.point = point;
    }
    set Verify(verify) {
        this.verify = verify;
    }
    get Target() {
        return this.target;
    }
    get Point() {
        return this.point;
    }
    get Verify() {
        return this.verify;
    }
}
class Tester extends MovieStaff {
    field;
    index;
    constructor(id, name, surname, position, experience, field, index) {
        super(id, name, surname, position, experience);
        this.Field = field;
        this.Index = index;
    }
    set Field(field) {
        this.field = field;
    }
    set Index(index) {
        this.index = index;
    }
    get Field() {
        return this.field;
    }
    get Index() {
        return this.index;
    }
}
const myForm = document.getElementById("myForm");
const form = document.createElement("form");
const titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.placeholder = "title";
const directorInput = document.createElement("input");
directorInput.type = "text";
directorInput.placeholder = "director";
const genreInput = document.createElement("input");
genreInput.type = "text";
genreInput.placeholder = "genre";
const yearInput = document.createElement("input");
yearInput.type = "text";
yearInput.placeholder = "year";
const ratingInput = document.createElement("input");
ratingInput.type = "number";
ratingInput.placeholder = "Rating";
const statusInput = document.createElement("select");
const neutral = document.createElement("option");
neutral.value = "";
neutral.textContent = "Choose Status";
const watchedSelect = document.createElement("option");
watchedSelect.value = "Watched";
watchedSelect.textContent = "Watched";
const notwatchedSelect = document.createElement("option");
notwatchedSelect.value = "Didn't Watch";
notwatchedSelect.textContent = "Didn't Watch";
const button = document.createElement("button");
button.type = "submit";
button.textContent = "OK";
statusInput.append(neutral, watchedSelect, notwatchedSelect);
form.append(titleInput, directorInput, genreInput, yearInput, ratingInput, statusInput, button);
myForm.appendChild(form);
function loadData() {
    let data = localStorage.getItem("films");
    if (data) {
        movies.push(JSON.parse(data));
    }
}
loadData();
function saveData() {
    localStorage.setItem("films", JSON.stringify(movies));
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = titleInput.value.trim();
    let director = directorInput.value.trim();
    let genre = genreInput.value.trim();
    let year = Number(yearInput.value.trim());
    let rating = Number(ratingInput.value.trim());
    let state = statusInput.value;
    let newMovie = new Movie(Date.now(), title, director, genre, year, rating, state === "Watched" ? "Watched" : "Didn't Watch");
    movies.push(newMovie);
    saveData();
});
export {};
