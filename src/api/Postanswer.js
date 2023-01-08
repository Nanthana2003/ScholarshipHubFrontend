import axios from "axios";

const Postanswer = async (name,answer,id) => {
    const token = localStorage.getItem("token");
    const res = await axios.post(process.env.REACT_APP_BACKEND_URL+"/chatsection/chatanswer",{name:name,answer:answer,id:id},{
        headers:{
            "token":"Bearer "+token
        }
    });
    return res;

}

export default Postanswer;