import "./Navbar.css";
import {Outlet} from "react-router-dom";

const Navbar = () => {

    return(
        <>
        <div className="nav">
            <div onClick={()=>{window.location.replace("/dashboard")}}><p>Dashboard</p></div>
            <div onClick={()=>{window.location.replace("/chat")}} ><p>Chat</p></div>
            <div onClick={()=>{localStorage.clear(); window.location.replace("/api/auth/login")}}><p>Log out</p></div>
        </div>
        <Outlet/>
        </>
    )

}

export default Navbar;