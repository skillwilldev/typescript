type BookStatus = "available" | "unavailable";
interface IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    status: BookStatus;
}

class Book implements IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    status: BookStatus;

    constructor(id: number, title: string, author: string, year: number, status: BookStatus) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
    }
}

class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    printName(): void {
        console.log(`Library Employee: ${this.name}`);
    }
}

class Developer extends Employee {
    language: string;

    constructor(name: string, language: string) {
        super(name);
        this.language = language;
    }

    devAction(): void {
        console.log(`Developer ${this.name} is writing code for the internal system in ${this.language}.`);
    }
}


const admin = new Employee("George");
admin.printName();

const dev = new Developer("Nikoloz", "TypeScript");
dev.printName();
dev.devAction();



const books: Book[] = [
    new Book(1, "Data Tutashkhia", "Chabua Amirejibi", 1975, "available"),
    new Book(2, "The Knight in the Panther's Skin", "Shota Rustaveli", 1201, "available")
];




const booksContainer = document.getElementById("books-container") as HTMLDivElement;
const bookForm = document.getElementById("book-form") as HTMLFormElement;

function displayBooks(): void {
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



bookForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const titleInput = document.getElementById("title") as HTMLInputElement;
    const authorInput = document.getElementById("author") as HTMLInputElement;
    const yearInput = document.getElementById("year") as HTMLInputElement;
    const statusSelect = document.getElementById("status") as HTMLSelectElement;

    const newId = Date.now();

    const newBook = new Book(
        newId,
        titleInput.value,
        authorInput.value,
        parseInt(yearInput.value),
        statusSelect.value as BookStatus
    );

    books.push(newBook);
    displayBooks();
    bookForm.reset();
});


displayBooks();

