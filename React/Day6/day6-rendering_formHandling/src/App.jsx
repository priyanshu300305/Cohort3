import React, { useState } from "react";

const App = () => {
  console.log("app rendering...");

  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "aman",
  });

  console.log(user);

  // let handleClick = () =>{
  //   setUser("baman");

  // };

  return (
    <div>
      <h1> Hello</h1>
      <h1>Count is - {count}</h1>
      <h1>User is - {user.name}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>

      <button
        onClick={() => {
          setUser({ name: "Priyanshu" });
        }}
      >
        Change Name
      </button>
    </div>
  );
};
 
export default App;
