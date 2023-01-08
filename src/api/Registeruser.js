import axios from "axios";

const Registeruser = async (username,email,pass) => {
    const res = await axios.post(process.env.REACT_APP_BACKEND_URL+"/api/auth/register",{username:username,email:email, password:pass});
    console.log(res);
    return res;

}

export default Registeruser;