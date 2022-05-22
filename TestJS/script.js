// Deleting/Removing a DOM Element

// const rem = Array.from(document.getElementsByTagName('h1'));
// rem[0].remove();

// console.log(`Removed element : ${rem}`);

// TACTICAL-THINGS remove() vs removeChild()
// ref: MDN

// remove()

// creating something
const body = document.getElementsByTagName('body');
const parentDiv = document.createElement('div');
parentDiv.setAttribute('class', 'parentDivClass');
parentDiv.innerHTML = `<h1>TCP/IP</h1><hr><p>New paragraph</p><hr>`;
body[0].appendChild(parentDiv);

const ulElem = document.createElement('ul');
ulElem.setAttribute('class', 'ulElemClass');
ulElem.innerHTML = `<li>Adobe</li>
                    <li>Meta</li>
                    <li>Apple</li>
                    <li class= "red">Google</li>
                    <li>IBM</li>`;
parentDiv.appendChild(ulElem);

// TODO : Remove <li>Apple</li> i.e. the 3rd list-item
