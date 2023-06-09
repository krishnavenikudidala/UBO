import React from 'react';
import {Main} from '../Components/Main';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from '../Components/SignUp';
import MyUtilities from '../Components/Utility2';
import Util123 from '../Components/Utility';
import UpdateUtility from '../Components/UpdateUtility';

export default function MainBody() {

  return (
    <>
      <BrowserRouter>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{
            width: '18%', borderRadius: '10px',
            backgroundColor: 'rgb(205, 202, 206)', padding: ' 20px auto'
          }}>
            <Sidebar />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', margin: ' 20px auto' }}>
            <Routes>
              <Route path='SignUp' element={<SignUp/>}/>
              <Route path='/utility' element={<MyUtilities/>} />
              <Route path='/transaction' element={<Main />} />
              <Route path='/AddUtility' element={<Util123/>}/>
              <Route path='/UpdateUtility' element={<UpdateUtility/>}/>
              
            </Routes> </div> </div>
      </BrowserRouter>
    </>)
}