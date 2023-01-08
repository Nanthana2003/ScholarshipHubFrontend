import "./Registration.css";
import {useEffect, useState} from "react";
import Registeruser from "../../api/Registeruser";

const Register = () => {

    function registeruser(){
        Registeruser(username,email,password).then((res)=>{
            window.location.replace("/api/auth/login");
            setMessage(res.data.message);
        }).catch((err)=>{
            console.log(err);
            setMessage(err.response.data.error)
        })

    }
    function check(){
        if(username == "" || email == "" || password == ""){
            return false;
        }
        return true;
    }
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message,setMessage] = useState("");
    useEffect(()=>{

    },[email,password,message])

    return(
        <>
        <div className="overall">
            <div className="registermenu">
                <p className="heading">Scholarship hub</p>
                <input type="text" className="username" placeholder="Enter username" required={true} onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="text" className="email" placeholder="Enter email" required={true} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" className="password" placeholder="Enter password" required={true} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className="registerbutton" onClick={()=>{if(check()){registeruser();}else{setMessage("No field can be left empty")}}}>Submit</button>
                <p className="message">{message}</p>
            </div>
        </div>
        </>
    )
}

export default Register;