import './App.css';
import About from './components/About/About';

import Contact from './components/Contact/Contact';
import Counter from './components/Counter/Counter';
import Navbar from './components/navbar/navbar';
 import { Route, Routes } from 'react-router-dom'
 import Project from './components/Project/Project'
 import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Product from './components/Products/Product';


 

import React, { useState } from 'react';

 function App() {
//   const [showMessage, setShowMessage] = useState(false); // ✅ add this

//   function handleClick() {
//     console.log('button is clicked');
//     setShowMessage(true); // ✅ show message
//     document.getElementById('btn').style.backgroundColor = 'hotpink'; // ✅ change color
//   }

//   const person = {
//     firstName: 'Harry',
//     age: 23
//   };

  return (
    <>
      <Navbar />
      
      <Routes>
    
    <Route path='/contact' element= {<Contact />} />
    <Route path='/' element= {<Home />} />
    <Route path='/project' element= {<Project />} />
    <Route path='/about' element= {<About />} />
    <Route path='/login' element= {<Login />} />
    <Route path='/Product' element= {<Product />} />
     </Routes>

      {/* {/* <div className="container">
        <h1>student</h1>
        <p>
          I am Khushi.hefjwdgwihbfdkwyuidchfjkhdcihe hufwefjnuhidlchuidciudhvydfyudghf
          bnebvfghegdftywgyufh
        </p>
        <button id="btn" onClick={handleClick}>
          click me
        </button>
        </div>

        {/* ✅ Show message when clicked */}
        {/* {showMessage && <h2>Welcome Darlings</h2>} */} 

        {/* <div className="container1">
          <p>
            I am Khushi. hdygfyyyyyyyghdehhjdhjkjkhsdsdsdsdsd sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd
            sdsdsdsdsdsdsdsdsdsdsdsdsdsdhjk hjkhjkhjkhjkhjkhjkhjkhjkhjkhjkd
          </p>
        </div>
        <div>{person.firstName} </div> */}
      

      {/* <div>
        <About/>
        
        <Counter />
        <Contact/>
        <Home/>
              </div> */}
    </>
  );
}


export default App;