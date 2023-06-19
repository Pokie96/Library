let myLibrary = ['Book1', 'Book2', 'Book3'];
let body = document.querySelector('body');

function Book(author, title, numberOfPages, isRead){
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.isRead = isRead
};

function addBookToLibrary(){

};

function createBookElements(){
    for(eachBook in myLibrary){
        let newDiv = document.createElement('div');
        newDiv.className = 'bookCards'
        let title = document.createElement('h2');
        title.innerText = myLibrary[eachBook];
        newDiv.appendChild(title);
        body.appendChild(newDiv);
    };
};

createBookElements();
