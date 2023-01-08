import "./Dashboard.css";
import Dashboarddetails from "../../api/Dashboard";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [arr,setArr] = useState([]);

    async function getscholarships(){
        const res = await Dashboarddetails().catch((err)=>{
            console.log(err);
            if(err.response.data.error == "Invalid token or token not found"){
                localStorage.clear();
                window.location.replace("/login")
            }
            return ;
        })
        return res
        
    }

    useEffect(()=>{
        getscholarships().then((res)=>{
            setArr(res.data.message);
        })
        
    },[])

    return(
        <>
        <div className="entirebody">
            <p className="maintitle">Scholarships</p>
            <div className="list">
                {arr && arr.map((item)=>(
                    <>
                    <div className="cards">
                        <p className="head">{item.name}</p>
                        <li className="eligibility">{item.eligibility}</li>
                        <div className="deov">
                            <p>Details:</p>
                        <ul className="detailsbody">
                        {item.details && item.details.map((i)=>(
                            <li className="details">{i}</li>
                        ))}
                        </ul>
                        </div>
                    </div>
                    </>
                ))}
            </div>

        </div>
        </>
    )
}

export default Dashboard;