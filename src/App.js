import { useState } from 'react';
import './App.css';
import { About } from './components/about';
import { Contact } from './components/contact';
import Navbar from './components/header';
import { Projects } from './components/projects';
import Skills from './components/skills';
import { Route, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode]  = useState("light");
  const HandleMode = (button)=>{
    setMode((prevmode)=> (prevmode === "light"? "dark": "light"));
    button.style.color  = mode === "light" ? "black": "white";
  }


  return (
    <div className="App">
  
  <Navbar HandleMode ={HandleMode} mode= {mode}></Navbar>
      {/* <About  HandleMode ={HandleMode} mode= {mode}></About>
      <Projects  HandleMode ={HandleMode} mode= {mode}></Projects>
      <Skills  HandleMode ={HandleMode} mode= {mode}></Skills>
      <Contact  HandleMode ={HandleMode} mode= {mode}></Contact> */}
  <Routes>
    <Route path='/' element={<About HandleMode ={HandleMode} mode= {mode}/>}/>
  </Routes>
  <Routes>
    <Route path='/project' element={<Projects HandleMode ={HandleMode} mode= {mode}/>}></Route>
  </Routes>
  <Routes>
  <Route path='/skills' element={<Skills HandleMode ={HandleMode} mode= {mode}/>}/>
  </Routes>
  <Routes>
  <Route path='/contact' element={<Contact HandleMode ={HandleMode} mode= {mode}/>}/>
  </Routes>
    </div>
  );
}

export default App;
