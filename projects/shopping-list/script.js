const list = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let inputText = input.value;
  input.value = "";
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  listItem.appendChild(span);
  listItem.appendChild(deleteButton);
  deleteButton.textContent = "Delete";
  span.textContent = inputText;
  list.appendChild(listItem);
  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });
  input.focus();
});
