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
/* CHAPTER NAVIGATION */

const prevBtn =
  document.getElementById("prev-chapter");

const nextBtn =
  document.getElementById("next-chapter");

/* PREVIOUS */

prevBtn.addEventListener("click", () => {

  const prevIndex =
    Number(chapterIndex) - 1;

  if (prevIndex >= 0) {

    window.location.href =
      `chapter.html?book=${bookIndex}&chapter=${prevIndex}`;

  }

});

/* NEXT */

nextBtn.addEventListener("click", () => {

  const nextIndex =
    Number(chapterIndex) + 1;

  if (nextIndex < book.chapters.length) {

    window.location.href =
      `chapter.html?book=${bookIndex}&chapter=${nextIndex}`;

  }

});
