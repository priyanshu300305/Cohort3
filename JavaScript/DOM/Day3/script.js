// const { createElement } = require("react");

// const { createElement } = require("react");

// console.log("dom day3");
// const h1 = document.querySelector("h1");

// h1.textContent = "JavaScript"

// /*
// attribute and properties
// - setAttribute, getAttribute, removeAttribute, hasAttribute;
// with data-* name
// input.value(property, current state) vs input.getAttribute("value")
// */
// const h3 = document.querySelector("#id1");
// // let res = h3.getAttribute("class");
// // console.log(res);


// //setAttribute('attribute Name', 'value') -- set the attribute on element

// h3.setAttribute("width", "200px");
// console.log(h3.getAttribute("width"));

// //removeAttribute('attributeName')-- remove the attribute
// h3.removeAttribute("class");

// //getAttribute('attributeName')-- get value of the attribute
// let res = h3.getAttribute("class");
// console.log(res);

// //hasAttribute('attributeName')-- boolean isit-> true,
// //                                    isn't it-> false 
// h3.hasAttribute("class")


// // with data-* name
// //custom Attribute -> in html use "data-name-name..."
// // in DOM use "dataset" keyword to assign new values.
// const userCard= document.querySelector("#user_card");
// console.log(userCard.getAttribute("data-user-id"));

// userCard.dataset.userId="789"
// console.log(userCard.getAttribute("data-user-id"));



// // input.value(property, current state) vs input.getAttribute("value")

// const inp = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", ()=>{
//     console.log("this is inp.value ->",inp.value);
//     console.log("this is via attribute ->", inp.getAttribute("value"));

    
// });



// /* 

// // creating inserting and removing elements from DOM

// */

// // createElement
const main = document.querySelector("main");

// let footer= document.createElement('footer')
// console.log(footer);
// const span = document.createElement("span")
// // span.textContent="hey, i'm <i>dynamic</i>"   ---- isme textContent kee wajah se dynamic ITALIC me nhi dikhega uske liye hume innerHTML use karna hoga
// span.innerHTML="hey, i'm <i>Dynamic...</i>"

// // document.body.appendChild(footer)

// //---appendChild-> ek baar me ek hee element add hoga
// // main.appendChild(footer);
// // main.appendChild(span);

// // ---append-> ek baar me multiple element append hoga...
// main.append(footer,span);


/*

insertBefore---------

*/

// const box1= document.querySelector(".box1");
// const box2= document.querySelector(".box2");
// const box3= document.querySelector(".box3");

// create box using DOM
const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

box1.classList.add("box");
box2.classList.add("box");
box2.style.backgroundColor="yellow";

box3.classList.add("box");
box3.style.backgroundColor="blue";

main.append(box1, box2);

// prepend -> sabse pahle insert karta hai ya place kar deta hai.
// main.prepend(box3);

// box1.before(box3);
// box2.after(box1)

box1.replaceWith(box3);  //it works with parent while after & before works with child..
// main.replaceChild(box1,box2)

// box2.style.backgroundColor="yellow";
// box3.style.backgroundColor="blue";
// main.insertBefore(box2, box1);