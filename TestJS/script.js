// Deleting/Removing a DOM Element

// const rem = Array.from(document.getElementsByTagName('h1'));
// rem[0].remove();

// console.log(`Removed element : ${rem}`);

// TACTICAL-THINGS remove() vs removeChild()
// The element.remove() method removes the element from the DOM and returns value None (undefined)
// The element.removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.

// remove()

// creating something
const body = document.getElementsByTagName('body');
const parentDiv = document.createElement('div');
parentDiv.setAttribute('class', 'parentDivClass');
parentDiv.innerHTML = `<h1>TCP/IP</h1><hr><p>New paragraph</p><hr>`;
body[0].appendChild(parentDiv);

const ulElem = document.createElement('ul');
ulElem.setAttribute('class', 'ulElemClass');
ulElem.innerHTML = `<li style = "color: red">Adobe</li>
                    <li>Apple</li>
                    <li>Meta</li>
                    <li class= "red">Google</li>
                    <li>IBM</li>`;
parentDiv.appendChild(ulElem);

// Accessing the list child items

const ulList = Array.from(document.getElementsByTagName('ul'))[0];

const childLists = ulList.children;
console.log(`All list items of that unordered list as ${childLists}`);

console.log(childLists[0].innerText);
console.log(childLists[1].innerText);
console.log(childLists[2].innerText);
console.log(childLists[3].innerText);
console.log(childLists[4].innerText);

// appending one list item <li>FAANG</li>

const addNewList = document.createElement('li');
addNewList.innerText = 'FAANG';
ulList.appendChild(addNewList);

// proof to console

console.log(childLists.length);
console.log(childLists[5].innerText);

// deleting/removing <li>Meta</li>

// First select
const faangListToRem = document.getElementsByTagName('li');

faangListToRem[2].remove();
console.log(childLists.length);

console.log(childLists[0].innerText);
console.log(childLists[1].innerText);
console.log(childLists[2].innerText);
console.log(childLists[3].innerText);
console.log(childLists[4].innerText);
//
//
//
//
//
//
//
//
//

// element.removeChild()

const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'top');

newDiv.innerHTML = `<div id = "nested">Section</div>`;
body[0].appendChild(newDiv);
