import React from "react";

console.log("helloooooo");

let root = document.querySelector("#root");
const h1= React.createElement("h1", {}, "hello this is from React");

console.log(h1);

ReactDOM.createRoot(root).render(h1);

