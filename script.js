const button =
  document.getElementById("publish-btn");

const list =
  document.getElementById("book-list");

button.addEventListener("click", () => {

  const title =
    document.getElementById("title").value;

  const description =
    document.getElementById("description").value;

  const card =
    document.createElement("div");

  card.classList.add("book-card");

  card.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  list.appendChild(card);

});
