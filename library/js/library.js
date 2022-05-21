let myLibrary = [];

/**
 * Constructor for a new book.
 * @param {*String} title - Title of the book
 * @param {*String} author - Author of the book
 * @param {*Number} numPages - Number of pages in the book
 * @param {*Boolean} read - Status of whether the book has been read.
 */
function Book(title,author,numPages,read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

/**
 * This function adds a book to the global library array.
 * @param {*String} title - Title of the book
 * @param {*String} author - Author of the book
 * @param {*Number} numPages - Number of pages in the book
 * @param {*Boolean} read - Status of whether the book has been read.
 */
function addBookToLibrary(title,author,numPages,read) {
    let book = new Book(title,author,numPages,read);
    myLibrary.push(book);
}

/**
 * This function displays all books in the myLibrary array to the page.
 */
function displayLibrary() {
    const library = document.querySelector(".library");
    //Create an array that stores all book names
    let bookNames =[];

    //Remove all children from the library
    library.replaceChildren();
    
    //Add all books to the library
    myLibrary.forEach(book => {
        let div = document.createElement("div");
        div.setAttribute("class","book");
        let p = document.createElement("p");
        let bookName = document.createTextNode(`${book.title}`);
        p.appendChild(bookName);
        div.appendChild(p);
        library.appendChild(div);
    })
}

addBookToLibrary("A","author1",20,true);
addBookToLibrary("B","author2",34,false);
displayLibrary();

