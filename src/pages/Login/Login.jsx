import "./Login.css";
import {useEffect, useState} from "react";
import Loginuser from "../../api/Loginuser";

const Login = () => {

    function loginuser(){
        Loginuser(email,password).then((res)=>{
            setMessage(res.data.message)
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("username",res.data.username)
            localStorage.setItem("email",res.data.email)
            localStorage.setItem("id",res.data.id)
            window.location.replace("/dashboard");
        }).catch((err)=>{
            console.log(err);
            setMessage(err.response.data.message)
        })

    }
    function check(){
        if( email == "" || password == ""){
            return false;
        }
        return true;
    }
    const [message,setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{

    },[email,password,message])

    return(
        <>
        <div className="overall">
            <div className="loginmenu">
                <p className="heading">Scholarship hub</p>
                <input type="text" className="email" placeholder="Enter email" required={true} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" className="password" placeholder="Enter password" required={true} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className="login" onClick={()=>{if(check()){loginuser();}else{setMessage("No field can be left empty")}}}>Login</button>
                <p className="register" onClick={()=>{window.location.replace("/register")}}>Sign up</p>
                <p className="message">{message}</p>
            </div>
        </div>
        </>
    )
}

export default Login;