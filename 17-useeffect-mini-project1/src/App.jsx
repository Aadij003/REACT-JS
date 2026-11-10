import React, { useEffect, useState } from 'react'

const App = () => {




  const [time, settime] = useState(new Date().toLocaleTimeString());

  const [show,setShow] = useState(true)

  useEffect(()=>{

    if(!show){
      return;
    }
const intervalId=setInterval(()=>{
  console.log("hi");
  
   settime(new Date().toLocaleTimeString())
  },1000)

    return ()=>{
     clearInterval(intervalId)
    }


  },[show])
  
  return (
    <div>
      <button onClick={()=>{
        setShow(!show)
        
      }}>{show?"hide":"show"}</button>
      {
       show && <h1 style={{margin:"10px 20px"}}>Current Time:{time}</h1>
      }
     
    </div>
  )
}

export default App
