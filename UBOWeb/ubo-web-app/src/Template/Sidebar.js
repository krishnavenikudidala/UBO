import React from 'react'
import './All.css'
import {Link} from 'react-router-dom'


export default function Sidebar() {
  return (
    <>
    <div className='side'>
     <ul>
        <Link to='/utility' >Utility</Link>
        <br></br>
        <Link to='/transaction'>Transaction</Link>
        <br></br>
        <Link to='/SignUp'>Sign Up</Link>
     </ul>  
    </div>
    </>
    
  )
}
