chapterCard.innerHTML = `
  <a
    href="chapter.html?book=${index}&chapter=${chapterIndex}"
    class="chapter-link"
  >

    <h2>${chapter.title}</h2>

    <p>${chapter.content}</p>

  </a>
`;
