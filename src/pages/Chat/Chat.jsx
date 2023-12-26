import "./Chat.css";
import GetChat from "../../api/GetChat";
import Postanswer from "../../api/Postanswer";
import Postquestion from "../../api/Postquestion";
import {useEffect, useState} from "react";

const Chat = () => {
    const username = localStorage.getItem("username");
    const [id,setId] = useState("");
    const [chatarr, setChatarr] = useState(null)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [searchval, setSearchval] = useState(null)
    const [original, setOrginal] = useState([])


    async function getchats(){
        const res = await GetChat().catch((err)=>{
            console.log(err);
            if(err.response.data.error == "Invalid token or token not found"){
                localStorage.clear();
                window.location.replace("/login")
            }
            return ;
        })
        return res
    }

    function setid(id){
        setId(id);
    }

    async function postanswer(id){
        setid(id)
        Postanswer(username,answer,id).then(()=>{
            window.location.reload();
        }).catch((err)=>{
            if(err.response.data.error == "Invalid token or token not found"){
                localStorage.clear();
                window.location.replace("/login")
            }
            return ;
        })

    }

    async function postquestion(){
        Postquestion(username,question).then(()=>{
            window.location.reload();
        }).catch((err)=>{
            if(err.response.data.error == "Invalid token or token not found"){
                localStorage.clear();
                window.location.replace("/login")
            }
            return ;
        })
    }

    useEffect(()=>{
        if(chatarr == null){
        getchats().then((res)=>{
            setChatarr(res.data.message);
            setOrginal(res.data.message);
        })
    }
    console.log(searchval)
        const temp = [];
        if(searchval==null || (searchval!=null && searchval.length == 0)){
           
            setChatarr(original);
        }
        else{
            for(let i = 0; i<original.length; i++){
                if(original[i].question.includes(searchval)){
                    temp.push(original[i])
                }
            }
            setChatarr(temp);
        }
    },[searchval])

    return(
        <>
        <div className="chatbody">
            <div className="search">
                <input type="text" placeholder="Search by internship names" className="seachbar" onChange={(e)=>{setSearchval(e.target.value)}}/>
            </div>
            <div className="chatlist">
                {chatarr && chatarr.map((item)=>(
                    <>
                    <div className="chat">
                        <div className="question">
                            <p className="q">{item.question}</p>
                            <p className="qname">{item.nameq}</p>
                        </div>
                        
                        <div className="answerbody">
                        {item.answers && item.answers.map((i)=>(
                            <>
                            <div className="inner">
                            <div className="answer">{i.answer}</div>
                            <div className="aname">{i.namea}</div>
                            </div>
                            </>
                        ))}
                        </div>
                        
                        <div className="sendanswer">
                            <input type="text" className="senda" placeholder="Type your answer here" onChange={(e)=>{setAnswer(e.target.value)}}/>
                            <button onClick={()=>{ postanswer(item._id);}} className="answersubmit">Submit</button>
                        </div>
                    </div>
                    </>
                ))
                
}
            </div>
            <div className="sendmessage">
                <input type="text" className="sendq" placeholder="Type your question here" onChange={(e)=>{setQuestion(e.target.value)}} />
                <button className="questionsubmit" onClick={()=>{
                    postquestion();
                }}>Submit</button>
            </div>
        </div>
        </>
    )
}

export default Chat;