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

/* CHAPTER SYSTEM */

if (!book.chapters) {
  book.chapters = [];
}

const chapterList =
  document.getElementById("chapter-list");

/* DISPLAY CHAPTERS */

function displayChapters() {

  chapterList.innerHTML = "";

  book.chapters.forEach((chapter, chapterIndex) => {

    const chapterCard =
      document.createElement("div");

    chapterCard.classList.add("chapter-card");

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
      >
        Delete Chapter
      </button>
    `;

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

    chapterList.appendChild(chapterCard);

  });

}

/* ADD CHAPTER */

const addChapterBtn =
  document.getElementById("add-chapter-btn");

addChapterBtn.addEventListener("click", () => {

  const chapterTitle =
    document.getElementById("chapter-title").value;

  const chapterContent =
    document.getElementById("chapter-content").value;

  if (chapterTitle === "") return;

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

/* INITIAL LOAD */

displayChapters();
/* SAVE BOOK */

const saveBookBtn =
  document.getElementById("save-book-btn");

saveBookBtn.addEventListener("click", () => {

  const updatedTitle =
    document.getElementById("book-title").value;

  const updatedDescription =
    document.getElementById("book-description").value;

  const coverFile =
    document.getElementById("edit-cover").files[0];

  book.title =
    updatedTitle;

  book.description =
    updatedDescription;

  if (coverFile) {

    const reader =
      new FileReader();

    reader.onload = function () {

      book.cover =
        reader.result;

      localStorage.setItem(
        "books",
        JSON.stringify(books)
      );

      alert("Book updated!");

    };

    reader.readAsDataURL(coverFile);

  } else {

    localStorage.setItem(
      "books",
      JSON.stringify(books)
    );

    alert("Book updated!");

  }

});
