import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login/>}/>
          <Route path='Signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
