import { useState } from 'react';
import './App.css';
import MainBody from './Template/MainBody';
import Header from './Template/Header';
import Footer from './Template/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyUtilities from './Components/Utility2';
import Util123 from './Components/Utility';




export default function App(){
  const [openBody,setOpenBody]=useState(false)

  const OpenmainBody=()=>{
    setOpenBody(true)
  }

  const ClosemainBody=()=>{
    setOpenBody(false)
  }


   return (
  <>
  <Header Open={OpenmainBody} close={ClosemainBody} />
  { openBody&&< MainBody/>}

  { openBody&&<Footer/>} 
 
 
  
  
  
</>
  )
}



