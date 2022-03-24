import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NewOrder from './Components/NewOrder/NewOrder'
import Test from './Components/Test/Test'
import NotFound from './Components/NotFound/NotFound'
import Home from './Components/Home/Home'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Test/>}/>
        
        <Route path='*' exact element={<NotFound/>}/>
        <Route path="/create" exact element={<NewOrder/>}/>
        <Route path="/home" exact element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
