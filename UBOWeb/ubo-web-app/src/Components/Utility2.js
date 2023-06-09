import React, { useEffect, useState } from "react";
import axios from "axios";
import './Utility.css'
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function MyUtilities() {
    const [utilities, setUtilities] = useState([])
    
    const navigate = useNavigate()
    function addutilities() {
        navigate("/AddUtility")
    }
    function updateUtilities(ut) {
        navigate("/UpdateUtility", {state: {currentUtility: ut}})
    }
    const deleteUtility = async (id) => {
        let json = {}
        json["_id"] = id
        
       await axios.post('http://localhost:5000/deleteutility', json)
            .then(
                alert("successful")
            );

    }
    useEffect(() => {
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

                            <td>{serialNumber++}</td>
                            <td>{ut.Name}</td>
                            <td>{ut.frequency}</td>
                            <td>{ut.date}</td>
                            <td>{ut.amount}</td>
                            <td>
                                <input 
                                    className='btn btn-danger' 
                                    type="button" 
                                    value="Delete"
                                    onClick={() => deleteUtility(ut._id)}
                                ></input>
                                
                                <input 
                                    className='btn btn-secondary m-1'
                                     type="button"
                                     value="Edit" 
                                     onClick={()=>updateUtilities(ut)} >
                                 </input>
                                     </td>

                        </tr>
                    );
                    setUtilities(listItems)
                }
            });
    }, [])

    return (
        <div className='body'>
            <div className='heading'>
                <div className='head'>
                    <h1>Utilities</h1>
                </div>
                <div>
                    <label>Search:-</label>
                    <input type='search' placeholder='bill-id'></input>
                    <button className='btn btn-primary m-2' onClick={addutilities}>Add</button>
                </div>
            </div>

            <div>
                <table className="table table-hover  m-3">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th >Utility Name</th>
                            <th>Freqency</th>
                            <th>Pay Date</th>
                            <th> Pay Amount</th>
                            <th>Actions</th>
                        </tr>
                        {utilities}
                    </thead>
                </table>
          </div>
        </div>
    );
}

export default MyUtilities;