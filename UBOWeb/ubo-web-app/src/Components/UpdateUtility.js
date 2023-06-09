import axios from 'axios';
import { useEffect, useState } from 'react';
import './Utility.css'
import { useLocation } from 'react-router-dom';

function UpdateUtility(_id) {
    const location = useLocation()
    const[updateStatus,setupdatestatus] =useState(false)
    const[utility,setUtility]= useState("")
    const [name, setName] = useState(location.state?.currentUtility?.Name)
    const [date, setDate] = useState(location.state?.currentUtility?.date)
    const [amount, setAmount] = useState(location.state?.currentUtility?.amount)
    const [frequency, setFrequency] = useState(location.state?.currentUtility?.frequency)

    useEffect(() => {
        if (updateStatus){
            window.location.reload()
        }
    },[updateStatus]);
   

    function doSetNewName(info){
        let name = info.target.value
        setName(name)
    }
    function doSetNewDate(info){
        let date = info.target.value
        setDate(date)

    }
    function doSetNewAmount(info){
        let amount = info.target.value
        setAmount(amount)
    }
    function doSetNewTime(info){
        let frequency = info.target.value
        setFrequency(frequency)

    }

    function saveUtility() {
        const json = {
          query: { _id: location.state?.currentUtility?._id },
          values: {
            Name: name,
            date: date,
            amount: amount,
            frequency: frequency
          }
        };
        axios.post('http://localhost:5000/updateutility', json)
        .then(() => {
            (() => {
            alert("successfuly updated");
        })();
            setupdatestatus(true);
           
        })
        .catch(error => {
            console.error(error);
          });
    
       
    }
    

    return (

        <div className="formbody">
            <h1 style={{ marginBottom: 15 }}> UpdateUtility</h1>
            <br></br>
            <div className="Box">
                Name  
                <input type="Text" value={name} onChange={doSetNewName}></input><br></br>
            </div>

            <div className="Box">
                PayDate <input type="date" value={date} onChange={doSetNewDate}></input>
            </div>

            <div className="Box">
                PayAmount <input type="Text" value={amount} onChange={doSetNewAmount}></input>
            </div>

            <div className="Box">
                Freuqency  <select value={frequency} onChange={doSetNewTime} >
                    <option>Select Time Period</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quaterly">Quater</option>
                    <option value="Yearly">Year</option>
                </select>

            </div>

            <div>
                <input className='btn btn-secondary m-1' type="button" value="Update" onClick={saveUtility}></input>
            </div>


        </div>
    )
}

export default UpdateUtility;