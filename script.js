const button =
  document.getElementById("publish-btn");

const list =
  document.getElementById("book-list");

let books =
  JSON.parse(localStorage.getItem("books")) || [];

/* DISPLAY BOOKS */

function displayBooks() {

  list.innerHTML = "";

  books.forEach((book, index) => {

    const card =
      document.createElement("div");

    card.classList.add("book-card");

    card.innerHTML = `
      <h2>${book.title}</h2>

      <p>${book.description}</p>

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

  if (title === "") return;

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

/* LOAD BOOKS */

displayBooks();
