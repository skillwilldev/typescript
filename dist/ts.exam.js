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
    new Book(2, "The Knight in the Panther's Skin", "Shota Rustaveli", 1201, "available"),
    new Book(3, "ვეფხისტყაოსანი", "Shota Rustaveli", 1205, "unavailable"),
    new Book(4, "The Old Man and the Sea", "Ernest Hemingway", 1952, "available"),
    new Book(5, "Clean Code", "Robert Martin", 2008, "unavailable")
];
const booksContainer = document.getElementById("books-container");
const bookForm = document.getElementById("book-form");
const searchInput = document.getElementById("search");
const submitBtn = bookForm.querySelector("button");
let editingBookId = null;
function displayBooks(bookList = books) {
    booksContainer.innerHTML = "";
    if (bookList.length === 0) {
        const message = document.createElement("p");
        message.className = "not-found";
        message.textContent = "Books not found";
        booksContainer.appendChild(message);
        return;
    }
    bookList.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = `book-card ${book.status}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.setAttribute("aria-label", "Delete book");
        deleteBtn.textContent = "×";
        deleteBtn.addEventListener("click", () => deleteBook(book.id));
        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.setAttribute("aria-label", "Edit book");
        editBtn.textContent = "✎";
        editBtn.addEventListener("click", () => editBook(book.id));
        const titleHeader = document.createElement("h3");
        titleHeader.textContent = book.title;
        const authorParagraph = document.createElement("p");
        const authorLabel = document.createElement("strong");
        authorLabel.textContent = "Author: ";
        const authorSpan = document.createElement("span");
        authorSpan.textContent = book.author;
        authorParagraph.append(authorLabel, authorSpan);
        const yearParagraph = document.createElement("p");
        const yearLabel = document.createElement("strong");
        yearLabel.textContent = "Year: ";
        const yearSpan = document.createElement("span");
        yearSpan.textContent = book.year.toString();
        yearParagraph.append(yearLabel, yearSpan);
        const statusParagraph = document.createElement("p");
        const statusLabel = document.createElement("strong");
        statusLabel.textContent = "Status: ";
        const statusSpan = document.createElement("span");
        statusSpan.className = `status ${book.status === "available" ? "available" : "unavailable"}`;
        statusSpan.textContent = book.status === "available" ? "Available " : "Out of stock ";
        const statusBtn = document.createElement("button");
        statusBtn.className = 'status-change-btn';
        statusBtn.setAttribute("aria-label", "Toggle status");
        statusBtn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i>';
        statusBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleStatus(book.id);
        });
        statusParagraph.append(statusLabel, statusSpan, statusBtn);
        bookCard.append(deleteBtn, editBtn, titleHeader, authorParagraph, yearParagraph, statusParagraph);
        booksContainer.appendChild(bookCard);
    });
}
function deleteBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index === -1)
        return;
    books.splice(index, 1);
    if (editingBookId === id) {
        editingBookId = null;
        bookForm.reset();
        submitBtn.textContent = "Add Book";
        const statusSelect = document.getElementById("status");
        statusSelect.disabled = false;
    }
    displayBooks();
}
function toggleStatus(id) {
    const book = books.find(book => book.id === id);
    if (!book)
        return;
    if (book.status === "available") {
        book.status = "unavailable";
    }
    else {
        book.status = "available";
    }
    if (editingBookId === id) {
        const statusSelect = document.getElementById("status");
        statusSelect.value = book.status;
    }
    displayBooks();
}
function editBook(id) {
    const statusSelect = document.getElementById("status");
    if (editingBookId === id) {
        editingBookId = null;
        bookForm.reset();
        submitBtn.textContent = "Add Book";
        statusSelect.disabled = false;
        statusSelect.style.cursor = 'pointer';
        return;
    }
    const book = books.find(book => book.id === id);
    if (!book)
        return;
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const yearInput = document.getElementById("year");
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year.toString();
    statusSelect.value = book.status;
    statusSelect.disabled = true;
    statusSelect.style.cursor = 'default';
    editingBookId = id;
    submitBtn.textContent = "Update Book";
}
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const yearInput = document.getElementById("year");
    const statusSelect = document.getElementById("status");
    if (editingBookId !== null) {
        const book = books.find(book => book.id === editingBookId);
        if (book) {
            book.title = titleInput.value;
            book.author = authorInput.value;
            book.year = parseInt(yearInput.value);
            // book.status = statusSelect.value as BookStatus;
        }
    }
    else {
        const newId = Date.now();
        const newBook = new Book(newId, titleInput.value, authorInput.value, parseInt(yearInput.value), statusSelect.value);
        books.push(newBook);
    }
    editingBookId = null;
    submitBtn.textContent = "Add Book";
    statusSelect.disabled = false;
    displayBooks();
    bookForm.reset();
});
displayBooks();
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchValue));
    displayBooks(filteredBooks);
});
export {};
