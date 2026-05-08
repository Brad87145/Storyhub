const button =
  document.getElementById("publish-btn");

const list =
  document.getElementById("book-list");

button.addEventListener("click", () => {

  const title =
    document.getElementById("title").value;

  const card =
    document.createElement("div");

  card.innerHTML = `
    <h2>${title}</h2>
  `;

  list.appendChild(card);

});
