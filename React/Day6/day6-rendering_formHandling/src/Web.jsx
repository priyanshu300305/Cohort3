import React, { useState } from "react";
import Card from "./components/Card";
import Contact from "./components/Contact";
import About from "./components/About";

const Web = () => {
  // let arr= [2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1]

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   console.log(name);

const [formData, setFormData]= useState({
//     name: "",
//     email: "",
//     password:"",

});

console.log("formData->", formData);
const handleChange=(e)=> {
    // setFormData({...formData, [e.target.name]: e.target.value}) 

    let {name,value}=e.target;
    setFormData({...formData,[name]: value});

};



  return (
    // <div className="">
    //   {arr.map((elem,index)=> {
    //       return <Card key={index} />;
    //   })
    //   }
    // </div>

    <div className="flex flex-col gap-5 w-60">
      <input
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}

        // onChange={(e)=> setFormData({...formData, name: e.target.value})} 
        
        name="name"
        onChange={handleChange} 
        className="border-2"
        type="text"
        placeholder="Name"
      />

      <input
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}

        // onChange={(e)=> setFormData({...formData, email: e.target.value})}
       
        name="email"
        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="Email"
      />

      <input
        // onChange={(e) => {
        //   setPassword(e.target.value);
        // }}

        // onChange={(e)=> setFormData({...formData, password: e.target.value})}
        
        name="password"
        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="Password"
      />

      <button className="border-2">Submit</button>

      {/* <h1>this is name- {name}</h1>
      <h1>this is email- {email}</h1>
      <h1>this is password- {password}</h1> */}
      
      <h1>this is name- {formData.name}</h1>
      <h1>this is email- {formData.email}</h1>
      <h1>this is password- {formData.password}</h1>
    </div>
  );
};

export default Web;
