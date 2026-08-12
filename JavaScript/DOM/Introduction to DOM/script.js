console.log("Hello, this is DOM!");

console.log(window.document)
console.log(document)
console.log(this);

/*

1. DOM TREE
    -html(string)
    -parsing
    -tree

2. CSS STYLING
    - css (string)
    - parsing
    - tree (CSSOM)= CSS Object Model

3. RENDER TREE
    -DOM TREE + CSS STYLING


*/

// DOM is used for manipiulating your HTML and give them interactivity.
//  It is a programming interface for HTML and XML documents.
//  It represents the page so that programs can change the document structure, style, and content.
//  The DOM represents the document as nodes and objects; that way, programming languages can connect to the page.



//Selection of an element 


   //- only select first element 
const h1= document.querySelector("h1")
 
   //- select all elements
const h2= document.querySelectorAll("h2")

// const h1= document.getElementById("h1")
// const h1= document.getElemntsByClassName("h1")

h1.textContent= "Hello, this is DOM!"
console.dir(h1)

console.log(h1)
console.log(h2)

const box = document.querySelector("#box");

// changing of HTML 

// box.innerHTML = "hey";
// h2.textContent= "changing html"  

console.log(document.body);

// document.body.innerHTML= "helllooooo";
// document.body.style.color= "white";

/*
//text change----
-textContent
-innerText
-innerHTML

*/

box.style.backgroundColor= "yellow";
box.style.padding= "20px 50px 30px 50px";
box.style.borderRadius= "10px";
box.style.display="flex"
box.style.alignItems= "center";
box.style.gap= "16px";
 