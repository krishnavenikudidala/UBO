import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Form1(props) {

  const [product,setProduct]=useState(props.initialData)

  

  //const [counter, setCounter] = useState(0)

  const formData=(event)=>{
    const{name,value}=event.target;
    
    //setCounter(counter+1)

    let myProduct=product
    debugger
    switch (name) {

      case 'Utility_Name':
        myProduct.Utility_Name = value
        break;
      case 'Month':
        myProduct.Description = value
        break;
      case 'Paid':
        myProduct.Due_Date = value
        break;
      case 'Paid_Date':
        myProduct.Time_Period = value
        break;
    
      default:
        break;
    }
    setProduct( p => ({
      ...p,
      ...myProduct
    }))
  }
    
 

  return (
    <>
    <form>
          <div className='body_of_form'>
              <div className='one'>/
                  <label>Utility_Name:-</label>
                  <input type='text' name='Utility_Name'
                  value={product.Utility_Name}
                  onChange={formData} placeholder='Utility-Name'></input>
              </div>
              <div className='one'>
                  <label>Description:-</label>
                  <input type="text" name='Description'
                  value={product.Description} 
                  onChange={formData} placeholder='Description'></input>
              </div>
              <div className='one'>
                  <label>Due_Date:-</label>
                  <input type='text' name='Due_Date' 
                  value={product.Due_Date}
                  onChange={formData} placeholder='Enter-Due_Date'></input>
              </div>
              <div className='one'>
                  <label>Time_Period</label>
                  <input type='date' name='Time_Period'
                  value={product.Time_Period} 
                  onChange={formData}
                   placeholder='Enter-Time_Period'></input>
              </div>
            
              <div>
                <button className='btn btn-secondary m-2'
                 onClick={(e)=>{e.preventDefault();
                 props.close();}}>Cancel</button>
                <button className='btn btn-primary m-2' 
                onClick={(e)=>{e.preventDefault();
                  props.postData(product)
                }}>Save</button>
              </div>

          </div>
          </form>
    </>
  )
}
