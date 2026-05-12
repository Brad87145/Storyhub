const button =
  document.getElementById("publish-btn");

const list =
  document.getElementById("book-list");

const searchInput =
  document.getElementById("search");

let books =
  JSON.parse(localStorage.getItem("books")) || [];

/* DISPLAY BOOKS */

function displayBooks(filteredBooks = books) {

  list.innerHTML = "";

  filteredBooks.forEach((book, index) => {

    const card =
      document.createElement("div");

    card.classList.add("book-card");

    card.innerHTML = `
      <a
        href="book.html?index=${index}"
        class="book-link"
      >

        <img
          src="${book.cover}"
          class="book-cover"
        >

        <h2>${book.title}</h2>

        <p>${book.description}</p>

      </a>

      <button class="delete-btn">
        Delete
      </button>
    `;

    const deleteBtn =
      card.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

      books.splice(index, 1);

      localStorage.setItem(
        "books",
        JSON.stringify(books)
      );

      displayBooks();

    });

    list.appendChild(card);

  });

}

/* PUBLISH */

button.addEventListener("click", () => {

  const title =
    document.getElementById("title").value;

  const description =
    document.getElementById("description").value;

  const coverFile =
    document.getElementById("cover").files[0];

  if (coverFile) {

    const reader =
      new FileReader();

    reader.onload = function () {

      const newBook = {
        title,
        description,
        cover: reader.result
      };

      books.push(newBook);

      localStorage.setItem(
        "books",
        JSON.stringify(books)
      );

      displayBooks();

    };

    reader.readAsDataURL(coverFile);

  } else {

    const newBook = {
      title,
      description,
      cover:
        "https://via.placeholder.com/300x250"
    };

    books.push(newBook);

    localStorage.setItem(
      "books",
      JSON.stringify(books)
    );

    displayBooks();

  }

});

/* SEARCH */

searchInput.addEventListener("input", () => {

  const searchText =
    searchInput.value.toLowerCase();

  const filteredBooks =
    books.filter((book) => {

      return book.title
        .toLowerCase()
        .includes(searchText);

    });

  displayBooks(filteredBooks);

});

/* LOAD */

displayBooks();
