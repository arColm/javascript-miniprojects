let myLibrary = [];

/**
 * Constructor for a new book.
 * @param {*String} title - Title of the book
 * @param {*String} author - Author of the book
 * @param {*Number} numPages - Number of pages in the book
 * @param {*Boolean} read - Status of whether the book has been read.
 */
class Book {
    constructor(title,author,numPages,read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }
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
    for(let i=0;i<myLibrary.length;i++) {
        let book = myLibrary[i];
        let div = document.createElement("div");
        div.setAttribute("class","book");
        //Add title
        let p = document.createElement("h2");
        let bookName = document.createTextNode(book.title);
        p.appendChild(bookName);
        p.setAttribute("class","title");
        div.appendChild(p);

        //Add author
        p = document.createElement("p");
        let bookAuthor = document.createTextNode(book.author);
        p.appendChild(bookAuthor);
        div.appendChild(p);

        //Change book color based on whether it is finished or not
        if(book.read) {
            div.style.backgroundColor="var(--finished-book-color)";
        }

        //Add remove button
        p = document.createElement("button");
        p.setAttribute("type","button");
        p.appendChild(document.createTextNode("Remove"));
        div.appendChild(p);

        p.addEventListener("click", e => {
            myLibrary.splice(i,1);
            displayLibrary();
        })

        library.appendChild(div);

        //Add ability to toggle the book's read status
        div.addEventListener("click", e=> {
            if(book.read) {
                book.read = false;
                div.style.backgroundColor="var(--book-color)";
            } else {
                book.read = true;
                div.style.backgroundColor="var(--finished-book-color)";

            }
        })
    }
}

const newBookButton = document.querySelector(".new-book");
const bookFormWindow = document.querySelector(".book-form-window");
const bookFormBackground = document.querySelector(".book-form-background");
const bookFormClose = document.querySelector(".close-form");

//Open the book form
function openBookForm() {
    bookFormWindow.style.visibility="visible";
    bookFormBackground.style.visibility="visible";
}

newBookButton.addEventListener("click", e => {
    openBookForm();
})

//Close the book form
function closeBookForm() {
    bookFormWindow.style.visibility="hidden";
    bookFormBackground.style.visibility="hidden";
}

let closeBookFormItems = [bookFormClose,bookFormBackground];
closeBookFormItems.forEach(b => {
    b.addEventListener("click", e => {
        closeBookForm();
    })
})

const bookFormSubmit = document.querySelector("#submit-form");
//Book is created
bookFormSubmit.addEventListener("click", e => {
    let newTitle = document.querySelector("input[id=title]").value;
    let newAuthor = document.querySelector("input[id=author]").value;
    let newNumPages = document.querySelector("input[id=numPages]").value;
    let newRead = document.querySelector("input[id=read]").checked;


    addBookToLibrary(newTitle,newAuthor,newNumPages,newRead);
    displayLibrary();
    document.querySelector("input[id=title]").value = "";
    document.querySelector("input[id=author]").value = "";
    document.querySelector("input[id=numPages]").value="";
    document.querySelector("input[id=read]").checked=false;
    closeBookForm();
    console.log(myLibrary);
})


addBookToLibrary("A","author1",20,true);
addBookToLibrary("B","author2",34,false);
displayLibrary();