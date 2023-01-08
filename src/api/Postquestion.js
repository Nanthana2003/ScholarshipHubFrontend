import axios from "axios";

const Postquestion = async (username,question) => {
    const token = localStorage.getItem("token");
    const res = await axios.post(process.env.REACT_APP_BACKEND_URL+"/chatsection/chatquestion",{name:username,question:question},{
        headers:{
            "token": "Bearer "+token
        }
    });
    return res;

}

export default Postquestion;