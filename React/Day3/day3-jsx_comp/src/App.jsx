import React from "react";
import About from "./About.jsx";

let App = () => {

  // let ui = React.createElement("h1", {}, [
  //   React.createElement('h1', {}, "Hello React JSX"),
  //   React.createElement('h2', {}, "bye"),
  //   React.createElement('h3', {}, "vapass aao"),

  // ]);
  // return ui;

  return (
    <div>
      <h1> Hello React JSX</h1>
      <h2> bye</h2>
      <h3> vapass aao</h3>
      <About width="300" name="Priyanshu" />

      {/* {About("Priyanshu")} */}

    </div>
  );
};

export default App;
