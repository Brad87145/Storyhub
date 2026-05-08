const params =
  new URLSearchParams(window.location.search);

const bookIndex =
  params.get("book");

const chapterIndex =
  params.get("chapter");

const books =
  JSON.parse(localStorage.getItem("books")) || [];

const book =
  books[bookIndex];

const chapter =
  book.chapters[chapterIndex];

document.getElementById(
  "chapter-page-title"
).textContent = chapter.title;

document.getElementById(
  "chapter-page-content"
).textContent = chapter.content;
