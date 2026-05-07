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


  function displayBooks() {

  bookList.innerHTML = "";

  books.forEach((book, index) => {

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

    const deleteBtn =
      bookCard.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

      books.splice(index, 1);

      localStorage.setItem(
        "books",
        JSON.stringify(books)
      );

      displayBooks();

    });

    bookList.appendChild(bookCard);

  });

}
