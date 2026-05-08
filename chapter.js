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

/* LOAD CHAPTER */

document.getElementById(
  "chapter-page-title"
).value = chapter.title;

document.getElementById(
  "chapter-page-content"
).value = chapter.content;

/* SAVE */

const saveBtn =
  document.getElementById("save-chapter-btn");

saveBtn.addEventListener("click", () => {

  const updatedTitle =
    document.getElementById(
      "chapter-page-title"
    ).value;

  const updatedContent =
    document.getElementById(
      "chapter-page-content"
    ).value;

  chapter.title =
    updatedTitle;

  chapter.content =
    updatedContent;

  localStorage.setItem(
    "books",
    JSON.stringify(books)
  );

  alert("Chapter saved!");

});
