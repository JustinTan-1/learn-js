const container = document.querySelector("#container");

const content = document.createElement("div");
const p = document.createElement("p");
const h3 = document.createElement("h3");
const blackContainer = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");

h1.textContent = "I'm in a div";
p2.textContent = "ME TOO!";

content.classList.add("content");
content.textContent = "This is text that is added through the script file";

blackContainer.setAttribute(
  "style",
  "border: 3px solid black; background-color: pink;"
);

p.setAttribute("style", "color:red;");
p.textContent = "Hey I'm red!";

h3.setAttribute("style", "color: blue;");
h3.textContent = "I'm a blue h3!";

blackContainer.appendChild(h1);
blackContainer.appendChild(p2);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(blackContainer);
