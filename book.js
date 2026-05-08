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

  book.chapters.forEach((chapter, chapterIndex) => {

    const chapterCard =
      document.createElement("div");

    chapterCard.classList.add("chapter-card");
const deleteBtn =
  chapterCard.querySelector(
    ".delete-chapter-btn"
  );

deleteBtn.addEventListener("click", () => {

  book.chapters.splice(chapterIndex, 1);

  localStorage.setItem(
    "books",
    JSON.stringify(books)
  );

  displayChapters();

});
    chapterCard.innerHTML = `
     chapterCard.innerHTML = `
  <a
    href="chapter.html?book=${index}&chapter=${chapterIndex}"
    class="chapter-link"
  >

    <h2>${chapter.title}</h2>

    <p>${chapter.content}</p>

  </a>

  <button
    class="delete-chapter-btn"
    data-index="${chapterIndex}"
  >
    Delete Chapter
  </button>
`;
}

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

  book.chapters.push(newChapter);

  localStorage.setItem(
    "books",
    JSON.stringify(books)
  );

  displayChapters();

});

displayChapters();
