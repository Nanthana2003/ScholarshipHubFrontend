import axios from "axios";

const Dashboarddetails = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL+"/sch/scholarshiplist",{
        headers:{
            "token":"Bearer "+token
        }
    });
    return res;

}

export default Dashboarddetails;