// Global variables required throughout the program.
let myLibrary = [];
let container = document.querySelector('.bookCardContainer');
let bookForm = document.querySelector('.form');

// The book class which will be used to create my book objects.
class Book {
    constructor(author, title, numberOfPages, isRead){
        this.author = author
        this.title = title
        this.numberOfPages = numberOfPages
        this.isRead = isRead
    }
}

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
    container.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++){
        let newestBook = myLibrary[i];
        let newDiv = document.createElement('div')
        let title = document.createElement('h2');
        let author = document.createElement('p');
        let pageCount = document.createElement('p');
        let beenRead = document.createElement('p');
        let deleteButton = document.createElement('button');
        let changeReadButton = document.createElement('button');
        deleteButton.innerText = 'X';
        title.innerText = `Title: ${newestBook.title}`;
        author.innerText = `Author: ${newestBook.author}`;
        pageCount.innerText = `Page Count: ${newestBook.numberOfPages}`;
        beenRead.innerText = `Been Read: ${newestBook.isRead.toString().toUpperCase()}`;
        beenRead.id = `beenRead${i}`
        changeReadButton.id = `readButton${i}`;
        changeReadButton.className = 'readButtons';
        changeReadButton.innerText = 'Change Read Status';
        newDiv.className = 'bookCards';
        deleteButton.id = `deleteButton${i}`;
        deleteButton.className = 'deleteButtons';
        appendChildren(newDiv, deleteButton, title, author, pageCount, beenRead, changeReadButton);
        container.appendChild(newDiv);
        document.querySelector(`#deleteButton${i}`).addEventListener('click', e =>{
            removeBook(i);
            console.log(myLibrary)
            e.target.parentNode.remove();
        })
        document.querySelector(`#readButton${i}`).addEventListener('click', function(){
            changeReadStatus(i);
            createBookElements()
        })
    } 
};

// Function which removes the current book object from the array and removes the element for it from 
// the page.
function removeBook(index){
    myLibrary.splice(index, 1);
    createBookElements();
}

// This function find which boolean value is currently in the isRead property and changes it to 
// the opposite value.
function changeReadStatus(index){
    if(myLibrary[index].isRead === true){
        myLibrary[index].isRead = false;
    } else{
        myLibrary[index].isRead = true;
    }
    console.log(myLibrary[index]);
}

// This is the event listener for the 'Add Book' button which opens 
// the form for the book data.
document.querySelector('#create-btn').addEventListener('click', () => {
    bookForm.style.visibility = 'visible';
})

// This is the event listener for the 'Delete All' button which 
// will remove all objects from our array and refreshes the elements 
// that are created from our array.
document.querySelector('#dlte-btn').addEventListener('click', () => {
    myLibrary = [];
    createBookElements();
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

    let newBook = new Book(author, title, pageCount, checked);
    addBookToLibrary(newBook);
    console.log(myLibrary);
    createBookElements();  
});



