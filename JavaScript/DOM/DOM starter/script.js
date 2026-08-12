console.log("hello, this is DOM day2");


console.log(document);


const body= document.body  // select BODY
const main= document.querySelector("main")

const div= document.querySelector("#div");

console.log(body.childNodes); // childNodes -> nodeLists
console.log(body.children); // children -> html colllection

console.log(main.childNodes);
console.log(main.children);

const h1= document.querySelector("h1","head2");
const h2= document.querySelector("h2");
console.log(h2);
h2.textContent= 'hey main update hogya hu'

h2.innerHTML="hey <i>i'm itallic...</i>";


console.log(body.innerHTML);
console.log(body.innerText);
console.log(body.textContent);

body.style.backgroundColor="Red";

h1.style.fontSize= "100px";
h1.style.fontStyle= "italic"
h1.style.backgroundColor="silver"

// const h1=document.querySelector("#head2");
// head2.textContent="mai change hogya";

/* CLASSES 

1. classlist.add()  
2. classlist.remove()
3. classlist.contain()  //true/false 
4. classlist.toggle()   // isExist -> remove
                        //!isExist -> add
5. classlist.replace()

*/


const isClass = h1.classList.contains("heading");
console.log(isClass);


//i have to change or replace my class

h1.classList.replace("heading","newHead");

//toggle Class
h1.classList.toggle("newHead"); //=> yaha pe yeh class ko hta dega 

h1.classList.toggle("Head"); // => yaha pe class add kar dega 


div.classList.add("box")

