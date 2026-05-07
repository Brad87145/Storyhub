const params =
  new URLSearchParams(window.location.search);

const index =
  params.get("index");

const books =
  JSON.parse(localStorage.getItem("books")) || [];

const book =
  books[index];

document.getElementById("book-title").textContent =
  book.title;

document.getElementById("book-description").textContent =
  book.description;
