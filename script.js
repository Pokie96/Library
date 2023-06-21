// Global variables required throughout the program.
let myLibrary = [];
let container = document.querySelector('.bookCardContainer');
let bookForm = document.querySelector('.form');
let iterator = 0;

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

// Appends all the children elements to the book card div without having
// to repeat the appendchild function over again.
function appendChildren(parentElement, ...args){ 
    for (argument in args){
        parentElement.appendChild(args[argument]);
    }
}

// This is the function which will create the book cards to display
// the book information from the myLibrary array.
function createBookElements(){
    let newestBook = myLibrary[(myLibrary.length)-1]
    let newDiv = document.createElement('div');
    let title = document.createElement('h2');
    let author = document.createElement('p');
    let pageCount = document.createElement('p');
    let beenRead = document.createElement('p');
    let deleteButton = document.createElement('button');
    let changeReadButton = document.createElement('button');
    changeReadButton.id = `readButton${iterator}`;
    changeReadButton.className = 'readButtons';
    changeReadButton.innerText = 'Change Read Status';
    newDiv.className = 'bookCards';
    deleteButton.id = `deleteButton${iterator}`;
    deleteButton.className = 'deleteButtons';
    deleteButton.innerText = 'X';
    title.innerText = `Title: ${newestBook.title}`;
    author.innerText = `Author: ${newestBook.author}`;
    pageCount.innerText = `Page Count: ${newestBook.numberOfPages}`;
    beenRead.innerText = `Been Read: ${newestBook.isRead}`;
    appendChildren(newDiv, deleteButton, title, author, pageCount, beenRead, changeReadButton);
    container.appendChild(newDiv);
    document.querySelector(`#deleteButton${iterator}`).addEventListener('click', e =>{
        console.log(e.target);
        e.target.parentNode.remove();
    })
    iterator++;
};

// This is the event listener for the 'Add Book' button which opens 
// the form for the book data.
document.querySelector('.headerButton').addEventListener('click', () => {
    bookForm.style.visibility = 'visible';
})

// This is the event listener for the form's cancel button to close 
// reset the values in the form
document.querySelector('#cancelButton').addEventListener('click', () => {
    bookForm.style.visibility = 'hidden';
    document.querySelector('#bookTitle').value = '';
    document.querySelector('#authorName').value = '';
    document.querySelector('#numberOfPages').value = '';
    document.querySelector('#checkbox').checked = false;
})

// The event listener for the form's 'Submit book' button which creates
// a new book object, appends it to the myLibrary array and creates an
// element in the DOM for it.
document.querySelector('#submitButton').addEventListener('click', () => {
    let title = document.querySelector('#bookTitle').value;
    let author = document.querySelector('#authorName').value;
    let pageCount = document.querySelector('#numberOfPages').value;
    let checked = document.querySelector('#checkbox').checked;
    
    console.log(title, author, pageCount, checked)

    let newBook = new Book(author, title, pageCount, checked);
    addBookToLibrary(newBook);
    createBookElements();  
});



