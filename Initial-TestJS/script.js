const bodyElem = Array.from(document.getElementsByTagName("body"));

// Create
const parentDivElem = document.createElement("div");
parentDivElem.setAttribute("class", "parentDiv"); // Creating a class named parentDiv

parentDivElem.innerHTML = "<h1>Heading</h1><hr><p>Paragraph</p>";

bodyElem[0].appendChild(parentDivElem);

const a = document.createElement("p");
a.innerText = "This";
parentDivElem.appendChild(a);

const ulList = document.createElement("ul");
ulList.innerHTML = "<li>A</li><li>B</li><li>C</li>";
parentDivElem.appendChild(ulList);
ulList.classList.add("parentDiv"); // using / adding a previously created class inside the element