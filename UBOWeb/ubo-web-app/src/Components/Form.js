import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Form() {
  return (
    <>
    <form>
          <div className='body_of_form'>
              <div className='one'>
                  <label>Utility_Name:-</label>
                  <input type='text' placeholder='Utility-Name'></input>
              </div>
              <div className='one'>
                  <label>Month</label>
                  <input type="month" placeholder='Month'></input>
              </div>
              <div className='one'>
                  <label>Paid_Amount:-</label>
                  <input type='number' placeholder='Enter-Amount'></input>
              </div>
              <div className='one'>
                  <label>Paid_Date</label>
                  <input type='date' placeholder='Enter Paid Date'></input>
              </div>
              <div>
                <button className='btn btn-secondary m-2' >Cancel</button>
                <button className='btn btn-primary m-2' >Save</button>
              </div>

          </div>
          </form>
    </>
  )
}
