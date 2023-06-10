 //array where the book details are stored
 let myLibrary = []
  
 //constructor for book
 function Book(title, author, pages, read) {
     this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }

Book.prototype.toggleRead =function(){
        this.read =!this.read;
    }
function toggleRead(index){
        myLibrary[index].toggleRead()
        render()
    }

//displays the books on the page
function render(){
        let libraryEl = document.querySelector("#library")
        libraryEl.textContent = ""
        for(let i = 0; i < myLibrary.length;i++){
          let book = myLibrary[i];
          let bookEl = document.createElement("div")
          bookEl.setAttribute("class", "book-card");
          bookEl.innerHTML = `
                    
            <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="card-body"><P>${book.pages} pages</P>
            <p class="read-status">${book.read ? "Read":"Not Read yet"}</p></div>
            <button class="remove-btn" onclick="removeBook(${i})">Remove Book</button> 
                    `
          libraryEl.appendChild(bookEl)
}}

//adds book to the array 
function addBookToLibrary(){
        let title = document. querySelector("#title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").checked;
        let newBook = new Book(title,author,pages,read)
        myLibrary.push(newBook)
        render()
}
     
//remove book from the array
function removeBook(index){
     myLibrary.splice(index,1)
     render() 
}

//displays the form when the button is clicked
    let newBookbtn = document.querySelector("#new-book-btn");
    newBookbtn.addEventListener("click", function() {
        let newBookForm = document.querySelector("#new-book-form");
        newBookForm.style.display ="block";
         })

//calls addbook function when form is submitted
     document.querySelector("#new-book-form").addEventListener("submit",function(event){
        event.preventDefault();
         addBookToLibrary();
}) 