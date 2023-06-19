let myLibrary = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5'];
let container = document.querySelector('.bookCardContainer');

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
        container.appendChild(newDiv);
    };
};

createBookElements();
