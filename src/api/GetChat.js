import axios from "axios";

const GetChat = async () => {
    const token = localStorage.getItem("token")
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL+"/chatsection/chat",{
        headers:{
            "token":"Bearer "+token
        }
    });
    return res;

}

export default GetChat;