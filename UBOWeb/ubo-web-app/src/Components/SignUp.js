import { useState } from "react";

function SignUp() {
    const [name, setName] = useState("")
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    function doNameChange(event) {
        setName(event.target.value)
    }

    function doUseridChange(event) {
        setUserid(event.target.value)
    }

    function doPasswordChange(event) {
        setPassword(event.target.value)
    }

    function doPhoneChange(event) {
        setPhone(event.target.value)
    }

    function saveForm() {
        debugger;
        // collect the information you ented on the screen and prepare the JSON
        let json = {}
        json["name"] = name
        json["userid"] = userid
        json["password"] = password
        json["phone"] = phone

        //post to http://localhost:5000/newanimal axios
        // npm install axios

        // axios.post('http://localhost:5000/newanimal', json)
        // .then(
        //     alert("successful")
        // ).catch(err => alert(err))
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Registration Form</h1>
            <p>
                <label for="nam">Name:</label>
                <input type="text" id="nam" name="nam" size="30" onChange={doNameChange}></input><br></br><br></br>
                <label for="mail">User Id:</label>
                <input type="email" id="mail" name="mail" size="30" onChange={doUseridChange}></input><br></br><br></br>
                <label for="passwrd">Password:</label>
                <input type="password" id="passwrd" name="passwrd" size="30" onChange={doPasswordChange}></input><br></br><br></br>
                <label for="phn">Phone:</label>
                <input type="text" id="phn" name="phn" size="30" onChange={doPhoneChange}></input><br></br><br></br>
                <input type="button" value="Register" onClick={saveForm}></input>
            </p>
        </div>
    );
}
export default SignUp;

