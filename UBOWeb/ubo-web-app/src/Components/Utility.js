import React from "react";
import { useState } from "react";
import axios from "axios";
import './Utility.css'




function Util123() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setExpectedPayDate] = useState("")
    const[month,setExpectedPayMonth] = useState("")
    const [amount, setExpectedPayAmount] = useState("")
    const [frequency, setTimePeriod] = useState(0)


    function doNameChange(event) {
        setName(event.target.value)
    }
    function dodescriptionChange(event) {
        setDescription(event.target.value)
      }
    function dodateChange(event) {
        setExpectedPayDate(event.target.value)
    }
    function domonthChange(event) {
        setExpectedPayMonth(event.target.value)
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
        json["description"] = description
        json["date"] = date
        json["month"]= month
        json["amount"] = amount
        json["frequency"] = frequency

        axios.post('http://localhost:5000/newutility', json)
        .then(
            alert("successful")
        ).catch(err => alert(err))
  
    }
    return (

        <>
            
            <form>
              
                <div className="formbody">
                     <h1 style={{ marginBottom: 15}}> New Utility</h1>
                    <div className="Box">
                     Name  <input type="Text" placeholder="UtiltiyName" onChange={doNameChange}></input><br></br>
                    </div>
                    <div className="Box">
                        Description   <input  type="text"onChange={dodescriptionChange}></input><br></br>
                    </div>
                    <div className="Box">
                        ExpectedPayDate <input type="date" onChange={dodateChange}></input>
                    </div>
                    <div className="Box">
                        ExpectedPayMonth <input type="text" onChange={domonthChange}></input>
                    </div>
                    <div className="Box">
                        ExpectedPayAmount <input type="Text" onChange={doamountChange}></input>
                    </div>
                    <div className="Box">
                        Freuqency  <select onChange={dotimeChange} >
                        <option>Select Time Period</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Quaterly">Quater</option>
                        <option value="Yearly">Year</option>
                    </select>
                  
                    </div>
                    <br></br>
                    <div>
                        <input style={{backgroundColor:"red", color: "white" ,fontSize: "15px", padding: "10px 20px"}} type="reset" value="reset"></input> 
                        <input style={{backgroundColor:"green", color: "white",fontSize: "15px", padding: "10px 20px"}} type="button" value="save" onClick={saveutility}></input>
                    </div>


                </div>
            </form>

        </>

    )
}

export default  Util123;
