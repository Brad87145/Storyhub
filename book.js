const params =
  new URLSearchParams(window.location.search);

const index =
  params.get("index");

const books =
  JSON.parse(localStorage.getItem("books")) || [];

const book =
  books[index];

/* LOAD BOOK */

if (book) {

  document.getElementById("book-cover").src =
    book.cover;

  document.getElementById("book-title").textContent =
    book.title;

  document.getElementById("book-description").textContent =
    book.description;

}

/* CHAPTERS */

if (!book.chapters) {
  book.chapters = [];
}

const chapterList =
  document.getElementById("chapter-list");

function displayChapters() {

  chapterList.innerHTML = "";

  book.chapters.forEach((chapter) => {

    const chapterCard =
      document.createElement("div");

    chapterCard.classList.add("chapter-card");

  chapterCard.innerHTML = `
  <a
    href="chapter.html?book=${index}&chapter=${book.chapters.indexOf(chapter)}"
    class="chapter-link"
  >

    <h2>${chapter.title}</h2>

    <p>${chapter.content}</p>

  </a>
`;

const addChapterBtn =
  document.getElementById("add-chapter-btn");

addChapterBtn.addEventListener("click", () => {

  const chapterTitle =
    document.getElementById("chapter-title").value;

  const chapterContent =
    document.getElementById("chapter-content").value;

  const newChapter = {
    title: chapterTitle,
    content: chapterContent
  };

 book.chapters.forEach((chapter, chapterIndex) => {

  localStorage.setItem(
    "books",
    JSON.stringify(books)
  );

  displayChapters();

});

displayChapters();
