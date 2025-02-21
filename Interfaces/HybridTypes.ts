interface IBookStatistic {
    numberOfBorrowing: number;
    lastBorrowing: string;
    borrowBook(): { numberOfBorrowing: number; lastBorrowing: string };
}

interface IBasicBook {
    title: string;
    authorSurname: string;
    authorName: string;
    ISBN: string;
    publishingHouse: string;
    placeOfPublication: string;
    yearOfPublication: number;
}

enum Format {
    pdf = "pdf",
    mobi = "mobi",
    epub = "epub"
}

interface IEbook extends IBasicBook {
    format: Format;
}

class BookStatistic implements IBookStatistic {
    numberOfBorrowing: number = 0;
    lastBorrowing: string = "this book has not been borrowed yet";

    borrowBook(): { numberOfBorrowing: number; lastBorrowing: string } {
        this.numberOfBorrowing += 1;
        let borrow = new Date();
        this.lastBorrowing = `${borrow.getDate()}.${borrow.getMonth() + 1}.${borrow.getFullYear()}`;

        return {
            numberOfBorrowing: this.numberOfBorrowing,
            lastBorrowing: this.lastBorrowing
        };
    }
}

class BasicBook implements IBasicBook {
    title: string;
    authorSurname: string;
    authorName: string;
    ISBN: string;
    publishingHouse: string;
    placeOfPublication: string;
    yearOfPublication: number;
    statistics: BookStatistic;

    constructor(
        title: string,
        authorSurname: string,
        authorName: string,
        ISBN: string,
        publishingHouse: string,
        placeOfPublication: string,
        yearOfPublication: number
    ) {
        this.title = title;
        this.authorSurname = authorSurname;
        this.authorName = authorName;
        this.ISBN = ISBN;
        this.publishingHouse = publishingHouse;
        this.placeOfPublication = placeOfPublication;
        this.yearOfPublication = yearOfPublication;
        this.statistics = new BookStatistic();
    }

    borrowBook(): { numberOfBorrowing: number; lastBorrowing: string } {
        return this.statistics.borrowBook();
    }
}

class Ebook extends BasicBook implements IEbook {
    format: Format;

    constructor(
        title: string,
        authorSurname: string,
        authorName: string,
        ISBN: string,
        publishingHouse: string,
        placeOfPublication: string,
        yearOfPublication: number,
        format: Format
    ) {
        super(title, authorSurname, authorName, ISBN, publishingHouse, placeOfPublication, yearOfPublication);
        this.format = format;
    }
}

function bookStatistic(book: BasicBook | Ebook): void {
    console.log(
        `Author: ${book.authorName} ${book.authorSurname}
        Title: ${book.title}
        Publisher: ${book.publishingHouse}
        City: ${book.placeOfPublication}
        Year: ${book.yearOfPublication}
        Number of Loans: ${book.statistics.numberOfBorrowing}
        Date of Last Borrowing: ${book.statistics.lastBorrowing}`
    );
}

// Tworzenie obiektów książek
let book1 = new BasicBook(
    "Example Book",
    "Smith",
    "John",
    "123-456-789",
    "Some Publisher",
    "New York",
    2023
);

let ebook1 = new Ebook(
    "Example Ebook",
    "Doe",
    "Jane",
    "987-654-321",
    "Some Publisher",
    "Alabama",
    2024,
    Format.pdf
);

// Wyświetlenie statystyk
bookStatistic(book1);
bookStatistic(ebook1);

// Wypożyczenia
book1.borrowBook();
ebook1.borrowBook();

// Wyświetlenie statystyk po wypożyczeniu
bookStatistic(book1);
bookStatistic(ebook1);
