import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        {/* <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route> */}
      </Routes>
    </>
  )
}

export default App