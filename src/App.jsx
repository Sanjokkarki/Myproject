
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

import Userdetails from './Pages/Userdetails'
import Usestatehook from './Pages/Usestatehook'
import Useeffecthook from './Pages/Useeffecthook'


import UseStateObj from './Pages/UseStateObj'
import OnchangeEvent from './Pages/OnchangeEvent'
import GetApi from './Pages/GetApi'
import Sonila from './Pages/Sonila'
import { createContext } from 'react'


export const paisa= createContext();


function App() {
 

  return (
    <>
      <Navbar />
        <div><button onClick={()=>window.history.back()}>Back</button></div>
        <div><Usestatehook/></div>
       <div> <Useeffecthook/></div>
        <div><UseStateObj/> </div>
       <div><OnchangeEvent/></div>
       <div><GetApi/></div>
        <div>
          <paisa.Provider value={'rs 50000'}>
          
          <Sonila/>
          </paisa.Provider></div>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        <Route path="user/:id" element={<Userdetails />} />
        </Route> 
      </Routes> 
      
    </>
  )
}

export default App
