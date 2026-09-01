// let obj= {
//     name: "John",
//     age: 30,
//     address: "New York",
//     company: "Google",
// };

// let fn = ({name, company}) =>{
//     console.log(name, company);
// };
// fn(obj);

// let a = 990;
// let print = () => {
//     console.log(a);
// };
// let ab= () => {
//     let a = 80;
//     print();
// }

// ab();

//-----------------------------------

// console.log(window);

// console.log(React);

let h1 = document.createElement("h1");
h1.textContent = "Hello";
document.body.append(h1);

let rh1 = React.createElement(
    "h1",
    null,
    React.createElement("span", {}, "Hello i'm under h1 "),
    "Hello i'm from React",

);

let realDomElem = document.querySelector("#root");
let rootOfReact = ReactDOM.createRoot(realDomElem);

rootOfReact.render(rh1);

console.log("Real DOM", h1);
console.log("Virtual DOM", rh1);


import { a, sum } from "./main.js";

console.log(a);
let result = sum(10, 20);
console.log(result);

let div = React.createElement("div", {},
    [
        React.createElement("h1", {},
            React.createElement("span", {}, "i'm span")
        ),
        React.createElement("h2", {},
            React.createElement("span", {}, "i'm span in h2")
        )

    ]
);
ReactDOM.createRoot(realDomElem).render(div);