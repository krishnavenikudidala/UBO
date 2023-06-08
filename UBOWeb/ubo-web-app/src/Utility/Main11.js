import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'
import Table1 from './Table1'
import {GetBill,DeleteBill,postBill} from './Api1';
import Form1 from './Form1';


export  function Main11() {
  const [Bills,setBills]=useState([])
  const [Closed,setOpened]=useState(false)
  const [initial,setInitial]=useState({
    Utility_Name:'',Description:'',Due_Date:'',Time_Period:''
  })
  
     
    useEffect(()=>{
      getBill()
    },[])

        const getBill=async()=>{
          let raw=await GetBill();
          setBills(raw.data)
        }
        const deleteBill=async(id)=>{
          DeleteBill(id)
          getBill()
        }

        const addBill=async(data)=>{
          postBill(data)
          getBill()
        }

        const OpenedForm=()=>{
          setOpened(true)
        }

        const ClosedForm=()=>{
          setOpened(false)
        }

  return (
    <>
     <div className='body'>
        <div className='heading'>
          <div className='head'>
            <h1>Utility</h1>
          </div>
          <div>
            <label>Search:-</label>
            <input type='search' placeholder='bill-id'></input>
            <button className='btn btn-primary m-2' onClick={OpenedForm}>Add</button>
          </div>
      </div>
      <div className='table'>
      <Table1 list={Bills}  delete={deleteBill} openForm={OpenedForm}/>
      </div>
      {
        Closed&&<Form1  close={ClosedForm} initialData={initial} postData={addBill}/>
      }
      

    </div>
    
    </>
  )
}
