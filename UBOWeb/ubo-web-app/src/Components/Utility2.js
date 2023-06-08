import React, {  useEffect, useState } from "react";
import axios from "axios";
import './Utility.css'
import { Link,useNavigate } from "react-router-dom";


const tableStyle = {
    borderCollapse: 'collapse',

    fontFamily: 'Arial, sans-serif',
    width: '95%',
    margin_left: 'auto',
    margin_right: 'auto',
    
  };
  
  const thStyle = {
    backgroundColor: 'lightblue',
    color: '#333',
    fontWeight: 'bold',
    width:'5%',
    padding: '8px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };
  
  const tdStyle = {
    padding: '8px',
    textAlign: 'center',
    width: "5%",
    borderBottom: '1px solid #ddd',
  };
  


function MyUtilities() {
    const [utilities, setUtilities] = useState([])
   
    const Navigate = useNavigate()

       
    function addutilities(){
        Navigate("/AddUtility")
}
       

 
    // get all animials using the axios()

   

   

    useEffect(()=>{
        let serialNumber = 1;
         let listItems = []
    axios({
        method: 'get',
        url: 'http://localhost:5000/getallutilities',
    })

        .then(function (response) {
            debugger;

            if (response != null && response.data != null && response.data != '') {

                listItems = response.data.map((ut) =>
                    <tr key={ut.id}>

                        <td style= {tdStyle}>{serialNumber++}</td>
                        <td style= {tdStyle}>{ut.Name}</td>
                        <td style= {tdStyle}>{ut.description}</td>
                        <td style= {tdStyle}>{ut.frequency}</td>
                        <td style= {tdStyle}>{ut.date}</td>
                        <td style= {tdStyle}>{ut.month}</td>
                        <td style= {tdStyle}>{ut.amount}</td>
                        <td style= {tdStyle}><input style={{backgroundColor:"red", color: "white"}} type="button" value="delete"  ></input> <input style={{backgroundColor:"Orange", color: "white"}} type="button" value="update" ></input></td>

                    </tr>



                );
                setUtilities(listItems)
            }

        });
    },[])





    return (
        <div className='body'>
            <div className='heading'>
                <div className='head'>
                    <h1>Transaction</h1>
                </div>
                <div>
                    <label>Search:-</label>
                    <input type='search' placeholder='bill-id'></input>
                    <button className='btn btn-primary m-2' onClick={addutilities}>Add</button>
                </div>
              </div>
                        

                <div>
                    <table style={tableStyle}>

                        <tr>
                            <th style={thStyle}>S.No</th>
                            <th style={thStyle}>Utility Name</th>
                            <th style={thStyle}>Desc</th>
                            <th style={thStyle}>Freqency</th>
                            <th style={thStyle}>Expected Pay Date</th>
                            <th style={thStyle}>Expected Pay Month</th>
                            <th style={thStyle}>Expected Pay Amount</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                        {utilities}
                    </table>
                </div>

            </div>


            );
  
  }

            export default MyUtilities;