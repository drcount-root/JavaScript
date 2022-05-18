const bodyElem = Array.from(document.getElementsByTagName("body"));

// Create
const parentDivElem = document.createElement("div");
parentDivElem.setAttribute("class", "parentDiv");

parentDivElem.innerHTML = "<h1>Heading</h1><hr><p>Paragraph</p>";

bodyElem[0].appendChild(parentDivElem);
