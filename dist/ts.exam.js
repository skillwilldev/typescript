class Book {
    id;
    title;
    author;
    year;
    status;
    constructor(id, title, author, year, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
    }
}
class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Library Employee: ${this.name}`);
    }
}
class Developer extends Employee {
    language;
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    devAction() {
        console.log(`Developer ${this.name} is writing code for the internal system in ${this.language}.`);
    }
}
const admin = new Employee("George");
admin.printName();
const dev = new Developer("Nikoloz", "TypeScript");
dev.printName();
dev.devAction();
const books = [
    new Book(1, "Data Tutashkhia", "Chabua Amirejibi", 1975, "available"),
    new Book(2, "The Knight in the Panther's Skin", "Shota Rustaveli", 1201, "available")
];
const booksContainer = document.getElementById("books-container");
const bookForm = document.getElementById("book-form");
function displayBooks() {
    booksContainer.innerHTML = "";
    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = `book-card ${book.status}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.setAttribute("aria-label", "Delete book");
        deleteBtn.textContent = "×";
        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.setAttribute("aria-label", "Edit book");
        editBtn.textContent = "✎";
        const titleHeader = document.createElement("h3");
        titleHeader.textContent = book.title;
        const authorParagraph = document.createElement("p");
        authorParagraph.innerHTML = `<strong>Author:</strong> `;
        const authorSpan = document.createElement("span");
        authorSpan.textContent = book.author;
        authorParagraph.appendChild(authorSpan);
        const yearParagraph = document.createElement("p");
        yearParagraph.innerHTML = `<strong>Year:</strong> `;
        const yearSpan = document.createElement("span");
        yearSpan.textContent = book.year.toString();
        yearParagraph.appendChild(yearSpan);
        const statusParagraph = document.createElement("p");
        statusParagraph.innerHTML = `<strong>Status:</strong> `;
        const statusSpan = document.createElement("span");
        statusSpan.className = `status ${book.status === "available" ? "available" : "unavailable"}`;
        statusSpan.textContent = book.status === "available" ? "Available" : "Out of stock";
        statusParagraph.appendChild(statusSpan);
        bookCard.append(deleteBtn, editBtn, titleHeader, authorParagraph, yearParagraph, statusParagraph);
        booksContainer.appendChild(bookCard);
    });
}
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const yearInput = document.getElementById("year");
    const statusSelect = document.getElementById("status");
    const newId = Date.now();
    const newBook = new Book(newId, titleInput.value, authorInput.value, parseInt(yearInput.value), statusSelect.value);
    books.push(newBook);
    displayBooks();
    bookForm.reset();
});
displayBooks();
export {};
