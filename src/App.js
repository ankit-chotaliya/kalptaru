import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import NewOrder from './Components/NewOrder/NewOrder';
import Test from './Components/Test/Test';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <>

      <Routes>
        <Route exact path="/navbar" element={<Navbar />} />
        <Route path="/" exact element={<Test/>}/>
        <Route path='*' exact element={<NotFound/>}/>
        <Route path="/create" exact element={<NewOrder/>}/>
        <Route path="/home" exact element={<Home/>}/>
      </Routes>

    </>
  )
}

export default App
