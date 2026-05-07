const publishBtn =
  document.getElementById("publish-btn");

const bookList =
  document.getElementById("book-list");

let books =
  JSON.parse(localStorage.getItem("books")) || [];

function displayBooks() {

  bookList.innerHTML = "";

  books.forEach((book) => {

    const bookCard =
      document.createElement("div");

    bookCard.classList.add("book-card");

   bookCard.innerHTML = `
  <div class="book-cover"></div>

  <h3>${book.title}</h3>

  <p>${book.description}</p>

  <button class="delete-btn">
    Delete
  </button>
`;

    bookList.appendChild(bookCard);

  });

}

publishBtn.addEventListener("click", () => {

  const title =
    document.getElementById("title").value;

  const description =
    document.getElementById("description").value;

  if (title === "") {
    alert("Please enter a title.");
    return;
  }

  const newBook = {
    title,
    description
  };

  books.push(newBook);

  localStorage.setItem(
    "books",
    JSON.stringify(books)
  );

  displayBooks();

});

displayBooks();

/* BOOK CARD DESIGN */

.book-cover {
  height: 180px;

  background: linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6
  );

  border-radius: 12px;

  margin-bottom: 20px;
}

.book-card h3 {
  margin-bottom: 10px;
}

.book-card p {
  color: #cbd5e1;

  margin-bottom: 20px;
}

.delete-btn {
  background: #ef4444;
}

.delete-btn:hover {
  background: #dc2626;
}
