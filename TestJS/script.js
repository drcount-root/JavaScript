// Deleting/Removing a DOM Element

// const rem = Array.from(document.getElementsByTagName('h1'));
// rem[0].remove();

// console.log(`Removed element : ${rem}`);

// TACTICAL-THINGS remove() vs removeChild()
// ref: MDN

// remove()

// creating something
const body = document.getElementsByTagName('body');
const parentDiv = document.createElement("div");
parentDiv.