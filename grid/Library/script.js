const newBook = document.querySelector("#new-book");
const submitBook = document.querySelector("#add-book");

const bookForm = document.querySelector("#book-form");

const author = document.querySelector("#author");
const title = document.querySelector("#title");
const numberPages = document.querySelector("#num-pages");
const isRead = document.querySelector("#is-read");

const bookContainer = document.querySelector(".book-container");



let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? ``: `not`} read ${this.read ? ``: `yet`}`;
    }
}

// function addBookToLibrary(title,author,pages,read) {

//   myLibrary.push(new Book(title,author,pages,read));
// }


function addBookToLibrary() {
    
    myLibrary.push(new Book(title.value,author.value,numberPages.value,isRead.value));
  }


// const book1 = new Book("drasda","dsadsa",32,true);

function printBooks() {
    myLibrary.forEach(element => {
        console.log(element.info());
    });
}

// addBookToLibrary("asdasda","asdasdas",32,false);
// addBookToLibrary("ssss","dddd",2,true);
// addBookToLibrary("ddd","sss",22,false);
// addBookToLibrary("asdasdadadsas","ssssssssssssss",2222,true);

// printBooks();
newBook.addEventListener("click",() => {
   if(bookForm.classList.contains("hidden")){
    bookForm.classList.remove("hidden");
    return;
   }
   bookForm.classList.add("hidden")
})

submitBook.addEventListener("click",(e)=>{
    e.preventDefault();
    let counter = myLibrary.length;
    const container = document.createElement("div");
    addBookToLibrary();
    container.innerHTML=`${author.value},${title.value},${isRead.checked},${numberPages.value}`;
    const removeButton = document.createElement("button");
    container.appendChild(removeButton);
    removeButton.innerHTML = `Remove Book`;
    removeButton.className = "remove-button";
    removeButton.value ="Remove Book"
    container.className="book-card";
    bookContainer.appendChild(container);
    container.id=`book-${counter}`;
    removeButton.id = `book-${counter}`;
    removeButton.addEventListener("click",(e) => {
        container.classList.add("hidden");
        })
    console.log(container);
    console.log(counter);
    console.log(container.id)
})


