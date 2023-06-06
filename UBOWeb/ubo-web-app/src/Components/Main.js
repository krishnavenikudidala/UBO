import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'
import Table from './Table'
import {GetBill,DeleteBill} from './Api';
import Form from './Form';


export default function Main() {
  const [Bills,setBills]=useState([])
  const [Closed,setOpened]=useState(false)
     
    useEffect(()=>{
      getBill()
    },[])

        const getBill=async()=>{
          let raw=await GetBill();
          console.log(raw)
          setBills(raw.data)
        }
        const deleteBill=async(id)=>{
          DeleteBill(id)
          getBill()
        }

        const OpenedForm=()=>{
          setOpened(true)
        }

  return (
    <>
     <div className='body'>
        <div className='heading'>
          <div className='head'>
            <h1>Transaction</h1>
          </div>
          <div>
            <label>Search:-</label>
            <input type='search' placeholder='bill-id'></input>
            <button className='btn btn-primary m-2' onClick={OpenedForm}>Add</button>
          </div>
      </div>
      <div className='table'>
      <Table list={Bills}  delete={deleteBill} openForm={OpenedForm}/>
      </div>
      {
        Closed&&<Form/>
      }
      

    </div>
    
    </>
  )
}
