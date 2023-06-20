// Global variables required throughout the program.
let myLibrary = [];
let container = document.querySelector('.bookCardContainer');
let openFormButn = document.querySelector('.headerButton');
let bookForm = document.querySelector('.form');


// The book constructor which will be used to create my book objects.
function Book(author, title, numberOfPages, isRead){
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.isRead = isRead
};

// Adds the new book object on to the myLibrary array.
function addBookToLibrary(book){
    myLibrary.push(book)
};

// This is the function which will create the book cards to display
// the book information from the myLibrary array.
function createBookElements(){
    for(eachBook in myLibrary){
        let newDiv = document.createElement('div');
        newDiv.className = 'bookCards'
        let title = document.createElement('h2');
        let author = document.createElement('p');
        let pageCount = document.createElement('p');
        let beenRead = document.createElement('p');
        title.innerText = `Title: ${myLibrary[eachBook].title}`;
        author.innerText = `Author: ${myLibrary[eachBook].author}`;
        pageCount.innerText = `Page Count: ${myLibrary[eachBook].numberOfPages}`;
        beenRead.innerText = `Been Read: ${myLibrary[eachBook].isRead}`;
        newDiv.appendChild(title);
        newDiv.appendChild(author);
        newDiv.appendChild(pageCount);
        newDiv.appendChild(beenRead);
        container.appendChild(newDiv);
    };
};

// This is the event listener for the 'Add Book' button which opens 
// the form for the book data.
openFormButn.addEventListener('click', () => {
    bookForm.style.visibility = 'visible';
})

document.querySelector('#cancelButton').addEventListener('click', () => {
    bookForm.style.visibility = 'hidden';
})

const bookOne = new Book('Tolkien', 'Lord of the rings', 500, true);
const bookTwo = new Book('JK Rowling', 'Harry Potter', 670, false);
const bookThree = new Book('JK Rowling', 'Harry Potter', 670, false);
const bookFour = new Book('JK Rowling', 'Harry Potter', 670, false);
const bookFive = new Book('JK Rowling', 'Harry Potter', 670, false);
const bookSix = new Book('JK Rowling', 'Harry Potter', 670, false);
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);
addBookToLibrary(bookFour);
addBookToLibrary(bookFive);
addBookToLibrary(bookSix);
createBookElements();

