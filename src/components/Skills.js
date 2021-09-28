import { useState } from "react"
const Skills=()=>{

    const [data,setdata]=useState([])
    const [input,setinput]=useState("")


    const handelChange=(e)=>{
        setinput(e.target.value)
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        setdata([...data,input])
        setinput("")
    }

    return (
        <div style={{textAlign:"center"}} >
            <div style={{textAlign:"center",width:"200px",display:"grid",gridTemplateColumns:"auto auto auto",position:"relative",left:"575px"}} >
                {data.map((ele,i)=>{
                    return <button key={i} >{ele}</button>
                })}
            </div>
            <form onSubmit={handelSubmit} >            
                <input type="text" placeholder="Enter Skills" value={input} onChange={handelChange} ></input>
                <button onClick={handelSubmit} >Add</button>
            </form>
        </div>
    )
}

export default Skills