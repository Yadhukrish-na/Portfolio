// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Projects from './Project/Project';
import Contact from './Contact/Contact';
import Findme from './FindMe/Findme';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/Navbar" element={<Navbar/>}></Route>
     <Route path="/About" element={<About/>}></Route>
     <Route path="/Contact" element={<Contact/>}></Route>
     <Route path="/Project" element={<Projects/>}></Route>
     <Route path="/Find" element={<Findme/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

