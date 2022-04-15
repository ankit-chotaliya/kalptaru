import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import NewOrder from './Components/NewOrder/NewOrder';
import Test from './Components/Test/Test';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import AddClient from './Components/AddClient/AddClient';

const App = () => {
  return (
    <>

      <Routes>
        <Route exact path="/navbar" element={<Navbar />} />
        <Route path="/" exact element={<Test/>}/>
        <Route path='*' exact element={<NotFound/>}/>
        <Route path="/create" exact element={<NewOrder/>}/>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/modal" exact element={<AddClient/>}/>
      </Routes>

    </>
  )
}

export default App
