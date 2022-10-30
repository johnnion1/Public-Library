let myLibrary = [
        {title: "Fahrenheit 451", author: "Brownmark Samwell", pages: "200", read: "not read"},
        {title: "Block City", author: "Urk Surfer", pages: "430", read: "read"},
        {title: "Pasta al criminale", author: "Fred Imogen", pages: "100", read: "not read"},
        ];

function Book (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;



}
Book.prototype.info = function() {
        /* put this in prototype so it doesnt get passed when adding 
        book and recalling displayBooks() */
        
        /* still shows on a new book */
        
               return this.title + ' by ' + this.author + ', ' + 
               this.pages + ' pages, ' + this.read;
        }


function addBookToLibrary() {
        let title = prompt('Title?', 'Fahrenheit 451');
        let author = prompt('Author?', 'Brownmark Samwell');
        let pages = prompt('Pages?', '200');
        let read = prompt('Read?', 'not read');
let newBook = new Book(title, author, pages, read);
myLibrary.push(newBook);

}

const cardContainer = document.querySelector('.cardContainer');

function displayBooks(books) {


for(let item in books) {  // Array of objects
    let book = myLibrary[item];
    let bookCard = document.createElement('div');
        bookCard.className = 'bookCard'

let infoTemplate = document.createElement('div');
infoTemplate.className = 'infoTemplate';

    console.log(book)
    for(let prop in book) {
        let bookData = document.createElement('div');
        bookData.className = 'bookData';
        bookData.textContent += book[prop];
        bookCard.appendChild(bookData);


        let dataLine = document.createElement('div');
        dataLine.textContent += prop;
        let capitalized = dataLine.textContent.charAt(0).toUpperCase() +
                        dataLine.textContent.slice(1);
        dataLine.textContent = capitalized;
        infoTemplate.appendChild(dataLine);
    }
    bookCard.appendChild(infoTemplate);


    cardContainer.appendChild(bookCard);
 }
}
function clearDisplay() {
        cardContainer.innerHTML = '';
}

const displayButton = document.querySelector('#add');
displayButton.addEventListener('click', () => {
        addBookToLibrary();
        clearDisplay();
        displayBooks(myLibrary);
});

displayBooks(myLibrary);



const newBookButton = document.querySelector('#new');
newBookButton.addEventListener('click', () => {
        // brings up a form which allows for user input (author, title,...)
})




















/*           
                let bookCard = document.createElement('div');
                bookCard.className = "bookCard";

                for (let prop in book) {
                  txt += book[prop] + ' ';
         bookCard.textContent += `${book}: ${book[prop]}`;
                }
                body.appendChild(bookCard);
                console.log(txt); */



const book1 = new Book('Hologrammatica', 'some Dude', 300, 'read');
console.log(book1.info());