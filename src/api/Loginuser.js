import axios from "axios";

const Loginuser = async (email,pass) => {
    const res = await axios.post(process.env.REACT_APP_BACKEND_URL+"/api/auth/login",{email:email, password:pass});
    
    return res;

}

export default Loginuser;