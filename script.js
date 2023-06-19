let myLibrary = [];
let container = document.querySelector('.bookCardContainer');

function Book(author, title, numberOfPages, isRead){
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.isRead = isRead
};

function addBookToLibrary(book){
    myLibrary.push(book)
};

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

const bookOne = new Book('Tolkien', 'Lord of the rings', 500, true);
const bookTwo = new Book('JK Rowling', 'Harry Potter', 670, false);
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo)
createBookElements();