let myLibrary = ['Book1', 'Book2', 'Book3'];
let body = document.querySelector('body');

function Book(){

};

function addBookToLibrary(){

};

function createBookElements(){
    for(eachBook in myLibrary){
        let newDiv = document.createElement('div');
        let title = document.createElement('h2');
        title.innerText = myLibrary[eachBook];
        newDiv.appendChild(title);
        body.appendChild(newDiv);
    };
};
