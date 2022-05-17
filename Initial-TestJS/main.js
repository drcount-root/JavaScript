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
