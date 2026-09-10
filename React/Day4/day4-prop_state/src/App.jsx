import React, {useState} from 'react'
import Contact from './Contact.jsx' 
import something, {one, two} from './test.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';



const App = () => {

  // something();
  // one();
  // two();

 let [count, setCount]=  useState(0);

 let [flag, setFlag]= useState(true);
 console.log(flag);

 console.log(count);

  // let count= 10;
  // console.log(count);

 
  return (
    <div>
      {/* <h1>Day 4: Props and State</h1>
      <Contact /> */}

      <Navbar />

      <h1> Count is - {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
        // console.log("Hello");
        // console.log(count);

      }}
      >
        Increment
        </button>

        <button onClick={() => {
          setFlag(!flag);
        }}
        >
          Change Boolean
        </button>
      <Hero />
      <Footer />





    </div>
  )
}

export default App;
