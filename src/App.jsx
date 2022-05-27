
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Page from './components/Page';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'   
import { useState } from "react";
import { createContext } from 'react';
import context from './MyContext';

function App() {
 
  
  const [user, setUser] = useState("Jesse Hall");
  
  return (
    <context.Provider value={{user,setUser}}>
    <Router>
     
    <Routes>
        {/* <Route path="/" element={<Home title={'Home page'} />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/in" element={<Page />} />


        {/* <Route path="/reset" element={<Recovery title={'Password reset'}  />} />
        <Route path="/users" element={<UsersList  />} />
        <Route path="/roles-privs" element={<RolesPriv  />} />
        <Route path="/items" element={<Items/>}/>
        <Route path="/recovery" element={<Ps_recovery/>}/>
        <Route path="/signup" element={<Signup/>}/> */}
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
  </context.Provider>
  )
}

export default App;
