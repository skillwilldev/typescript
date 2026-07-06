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
    new Movie(1, "Forrest Gump", "Robert Zemeckis", "drama", 1994, 8.8, "Watched"),
    new Movie(2, "The Shawshank Redemption", "Frank Darabont", "drama", 1994, 9.3, "Watched"),
    new Movie(3, "Inception", "Christopher Nolan", "sci-fi", 2010, 8.8, "Watched"),
    new Movie(4, "The Godfather", "Francis Ford Coppola", "crime", 1972, 9.2, "Want To Watch"),
    new Movie(5, "Pulp Fiction", "Quentin Tarantino", "crime", 1994, 8.9, "Watched"),
    new Movie(6, "Interstellar", "Christopher Nolan", "sci-fi", 2014, 8.6, "Want To Watch"),
    new Movie(7, "The Dark Knight", "Christopher Nolan", "action", 2008, 9.0, "Watched"),
    new Movie(8, "Fight Club", "David Fincher", "drama", 1999, 8.8, "Didn't Watch"),
    new Movie(9, "The Matrix", "Lana Wachowski", "sci-fi", 1999, 8.7, "Watched"),
    new Movie(10, "Parasite", "Bong Joon-ho", "thriller", 2019, 8.6, "Want To Watch"),
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
export {};
