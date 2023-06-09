import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import './Utility.css'
import { useLocation } from "react-router-dom";




function Util123() {
    const location = useLocation()
    const [addStatus,setaddstatus] =useState(false)
    const [name, setName] = useState("")
    const [date, setExpectedPayDate] = useState("")
    const [amount, setExpectedPayAmount] = useState("")
    const [frequency, setTimePeriod] = useState(0)

    useEffect(() => {
        if (addStatus){
            window.location.reload()
        }
    },[addStatus]);
   


    function doNameChange(event) {
        setName(event.target.value)
    }
   
    function dodateChange(event) {
        setExpectedPayDate(event.target.value)
    }

  
    function doamountChange(event) {
        setExpectedPayAmount(event.target.value)
    }
    function dotimeChange(event) {
        setTimePeriod(event.target.value)
    }

    function saveutility(){
        let json = {}
        json["Name"] = name
       
        json["date"] = date
      
        json["amount"] = amount
        json["frequency"] = frequency

        axios.post('http://localhost:5000/newutility', json)
        .then(() =>{
            (() => {
                alert("successfuly updated");
            })();
                setaddstatus(true);
               
            })
            .catch(error => {
                console.error(error);
              });
  
    }
    return (

        <>
        {/* <h1>Hello</h1> */}
            
            <form>
              
                <div className="formbody">
                     <h1 style={{ marginBottom: 15}}> New Utility</h1>
                     <br></br>
                    <div className="Box">
                      Name  <input type="Text" placeholder="UtiltiyName" onChange={doNameChange}></input><br></br>
                    </div>
                    
                    <div className="Box">
                     PayDate <input type="date" onChange={dodateChange}></input>
                    </div>
                   
                    <div className="Box">
                        PayAmount <input type="Text" onChange={doamountChange}></input>
                    </div>
                   
                    <div className="Box">
                        Freuqency  <select onChange={dotimeChange} >
                        <option>Select Time Period</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Quaterly">Quater</option>
                        <option value="Yearly">Year</option>
                    </select>
                  
                    </div>
                   
                    <div>
                        <input  className='btn btn-danger'  type="reset" value="reset"></input> 
                        <input className='btn btn-secondary m-1' type="button" value="save" onClick={saveutility}></input>
                    </div>


                </div>
            </form>

        </>

    )
}

export default  Util123;
