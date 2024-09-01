import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import RegisterPage from './components/Form/RegisterPage'
import LoginPage from './components/Form/LoginPage'
import Navbar from './components/Navbar/Navbar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Pizza from './components/Cards/Pizza'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import {Routes, Route} from "react-router-dom"

function App() {
  let BD=[]
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<RegisterPage BD={BD}/>}></Route>
        <Route path='/login' element={<LoginPage BD={BD}/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/pizza/p001' element={<Pizza/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
     <Footer/>
    </div>

  )
}

export default App
