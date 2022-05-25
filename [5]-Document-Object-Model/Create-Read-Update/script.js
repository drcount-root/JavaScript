"use strict";

// TACTICAL-THINGS  HTMLCollection

// The HTMLCollection interface represents a generic collection (array-like object similar to arguments but not exactly an array) of elements (in document order) and offers methods and properties for selecting from the list.

// An HTMLCollection in the HTML DOM is live; it is automatically updated when the underlying document is changed. For this reason it is a good idea to make a copy (eg. using Array.from) to iterate over if adding, moving, or removing nodes.

// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object. Where we can apply all array methods.

// textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements.

// An HTMLCollection is achieved by only - getElementsByTagName() & getElementsByClassName() & HTMLCollection are always live collection with respect to DOM.
//
//
//
//
//
// TACTICAL-THINGS  NodeList

// NodeList objects are collection of nodes, usually returned by properties such as Node.childNodes and methods like querySelectorAll().NodeList is not an array, it is possible to iterate over it using forEach(). NodeList can also be coverted into Array using Array.from().

// Two types of NodeList - 1. Static NodeList   2. Live or Dynamic NodeList

// Static NodeList: Changes in DOM doesn't effect the content of the collection. querySelectorAll() method returns static NodeList

// Live NodeList: Live with respect to DOM.
// Ex of Live NodeList: using childNodes property.

// const parent = document.getElementById("parent");
// let child_nodes = parent.childNodes;
// console.log(child_nodes.length);      assume it returns 2
// parent.appendChild(document.createElement("div"));
// console.log(child_nodes.length);      it will return 3 then
//
//
//
//
//
//
// TACTICAL-THINGS  HTMLCollection vs. NodeList

// 1. HTMLCollection is collection of document elements, where NodeList is a collection of document nodes (element nodes, attribute nodes, text nodes)

// 2. Items of HTMLCollection are accessed by their name, id and index.For NodeList, items are accessed using their index. For both indexing starting from 0.

// 3. HTMLCollection is always live collection. NodeList is most often static collection

// 4. An HTMLCollection is achieved by only - getElementsByTagName() & getElementsByClassName() & HTMLCollection are always live collection with respect to DOM.
//    querySelectorAll() method returns static NodeList.
// Ex of Live NodeList: using childNodes property.

// const parent = document.getElementById("parent");
// let child_nodes = parent.childNodes;
// console.log(child_nodes.length);      assume it returns 2
// parent.appendChild(document.createElement("div"));
// console.log(child_nodes.length);      it will return 3 then

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
// setAttribute("type-of-selector-id-or-class", "name-of-that") is useful to create new calss or id
// while classList.add() & classList.remove() is used better in adding or removing a class from an element
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
////////////// ------------------------------------------- TACTICAL-THINGS append() vs appendChild() TACTICAL-THINGS ------------------------------------------- //////////////
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
