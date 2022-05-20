"use strict";

// const body = document.body;
// body.append("Hello using append() in body");
// append() method is used to append strings

// const body = document.body;
// //Creating a <div></div> element
// const divEle = document.createElement("div");
// divEle.innerHTML = "<h1>This is a heading - h1</h1>";
// body.append(divEle);
// divEle.style.backgroundColor="blueviolet";

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log(
  "----------------------- (READING) tag, class & id selection using getElementsByTagName(), getElementsByClassName() & getElementById() methods -----------------------"
);
console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);

console.log(
  "\n------- tag selection using getElementsByTagName() method -------"
);
//
//NOTE tag selection
//
const h1_tag = document.getElementsByTagName("h1");
console.log(h1_tag); // HTMLCollection
const h1_tag_arr = Array.from(h1_tag); // Converting HTMLCollection into an array to access all array methods over it, that we can't do in HTMLCollection
console.log(h1_tag_arr[0].textContent); // Reading the text-content of the first element of the h1_tag_arr array
//
//
//
console.log(
  "\n------- class selection using getElementsByClassName() method -------"
);
//
//NOTE class selection
//
const h3_class = document.getElementsByClassName("class1");
console.log(h3_class);
const h3_class_arr = Array.from(h3_class);
console.log(h3_class_arr[0].textContent);
//
//
//
console.log("\n------- id selection using getElementByID() method -------");
//
//NOTE id selection
//
const h5_id = document.getElementById("id1");
console.log(h5_id.textContent);

//
//
//
//
//
//
//
//
console.log(
  "\n\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log(
  "------------------------------------- (UPDATE) tag, class & id content update using innerText property or textContent property -------------------------------------"
);
console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);
// UPDATE
const pElement = document.getElementsByClassName("para");
let paragraphFirst = pElement[0];
console.log("\n");
console.log(paragraphFirst.innerText);
paragraphFirst.innerText =
  "This is a paragraph used for testing - The updated thing"; // Updated in UI/DOM
console.log(paragraphFirst.innerText);
//
//
//
//
//
//
//
//
console.log(
  "\n\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log(
  "------------------------------ (CREATE) tag, class & id element & selectors creating using innerText property or textContent property ------------------------------"
);
console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);
// CREATE

// Creates a new element node: <p></p>
const paraElement = document.createElement("p");

// Set text inside it - <p>innerText property refers to the text inside an element</p>
paraElement.innerText =
  "innerText property refers to the text inside an element";

// Get the object referring to the body element on the page
const bodyElement = Array.from(document.getElementsByTagName("body"));

// Add the newly created <p></p> element as a child of the body element
const vis = bodyElement[0].appendChild(paraElement);
console.log("\n");
console.log(vis.innerText);

////////////////////////////////////////
// Creating a div  - just for practice
//
// Creating a new element node <div></div>
const divElem = document.createElement("div");
// divElem.classList.add("parent-div"); // adding class to divElem div tag
divElem.setAttribute("class", "parent-div");
// For id divElem.setAttribute("id", "id_name");
// Assigning text to it
// divElem.innerText = "Parent div";
const hElem = document.createElement("h1");
hElem.innerText = "Parent div";
const bodElem = Array.from(document.getElementsByTagName("body"));
bodElem[0].appendChild(divElem);
divElem.appendChild(hElem);

// These are stylings
divElem.style.border = "2px solid blueviolet";
divElem.style.padding = "15px";
divElem.style.textAlign = "center";
divElem.style.margin = "0 40%";

// Child div inside parent div
const childDiv = document.createElement("div");
childDiv.innerHTML =
  "<h1>Child div</h1><b>append() vs appendChild()</b><hr><br>append() accepts Node objects and DOMStrings while appendChild() accepts only Node objects</b>";
divElem.appendChild(childDiv);
childDiv.style.border = "2px solid dodgerblue";
childDiv.style.padding = "15px";
// divElem.innerHTML = "<h1>Heading - h1</h1><hr><p>This is a paragraph</p>";
//
////////////////////////////////////////
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

//
//
//
//
//
////////////// -------------------------------------------  append() vs appendChild() ------------------------------------------- //////////////
//

// ----------------------------------------------------------------------------------------------------

//// 1. Difference between append() and appendChild() methods are like - append() method is used to add Node objects and DOMStrings while appendChild() is used to add only Node objects

// const parent = document.createElement('div');
// const child = document.createElement('p');

// // Appending Node Objects
// parent.append(child)    // Works fine
// parent.appendChild(child)    // Works fine

// // Appending DOMStrings
// parent.append('Hello world')    // Works fine
// parent.appendChild('Hello world')    // Throws error

// ----------------------------------------------------------------------------------------------------

//// 2. append() does not have a return value while appendChild() returns the appended Node object

// const parent = document.createElement('div');
// const child = document.createElement('p');

// const appendValue = parent.append(child);
// console.log(appendValue);    // undefined

// const appendChildValue = parent.appendChild(child);
// console.log(appendChildValue);    // <p><p>

// ----------------------------------------------------------------------------------------------------

//// 3. append() allows you to add multiple items while appendChild() allows only a single item

// const parent = document.createElement('div');
// const child = document.createElement('p');
// const childTwo = document.createElement('p');

// parent.append(child, childTwo, 'Hello world');    // Works fine

// parent.appendChild(child, childTwo, 'Hello world');    // Works fine, but adds the first element and ignores the rest

// ----------------------------------------------------------------------------------------------------

// IN CONCLUSION: where we can use appendChild(), we can use append() but not vice versa.
