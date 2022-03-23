import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NewOrder from './Components/NewOrder/NewOrder'
import Test from './Components/Test/Test'
import NotFound from './Components/NotFound/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Test/>}/>
        
        <Route path='*' exact element={<NotFound/>}/>
        <Route path="/create" exact element={<NewOrder/>}/>
      </Routes>
    </>
  )
}

export default App
