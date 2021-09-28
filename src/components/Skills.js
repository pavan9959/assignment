import { useState } from "react"
import {AiOutlineCheck} from "react-icons/ai"
const Skills=()=>{
    
    const [data,setdata]=useState([])
    const [input,setinput]=useState("")
    const [flag,setflag]=useState(false)


    const handelChange=(e)=>{
        setinput(e.target.value)
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        if(input==""){setflag(true)}
        else{setdata([...data,input])
        setinput("")
        setflag(false)}
    }

    return (
        <div style={{textAlign:"center"}} >
            <div style={{textAlign:"center",width:"250px",display:"grid",gridTemplateColumns:"auto auto auto",position:"relative",left:"575px"}} >
                {data.map((ele,i)=>{
                    return <button key={i} style={{borderRadius:"10px",background:"green",color:"white"}}>{ele}<AiOutlineCheck/></button>
                })}
            </div>
            <form onSubmit={handelSubmit} >            
                <input type="text" placeholder="Enter Skills" value={input} onChange={handelChange} ></input>
                <button onClick={handelSubmit} >Add</button>
                {flag && <p style={{color:"red"}} >Please enter skills</p>}
            </form>
        </div>
    )
}

export default Skills