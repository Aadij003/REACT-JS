import React, { useEffect, useState } from 'react'

const App = () => {

  const [user, setUser] = useState([])

  // const [name, setname] = useState("")

  const [count, setcount] = useState(30)

  useEffect(()=>{
  async function GithubProfile() {
    // const response=await fetch('https://api.github.com/users')

    const response=await fetch(`https://api.github.com/users?per_page=${count}`)
    const data=await response.json(); 
     
    setUser(data);
  }

   GithubProfile();
  },[count])

  // function changeHandler(e){
  //  setname(e.target.value.toUpperCase()) 
  // }

  
  return (
   <> 
   <input type="number" value={count} onChange={(e)=>{
      setcount(e.target.value)
   }}/>
   <h1>Github User</h1>

   <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'10px'}}>
    {
      user.map((elem)=>{
    return <img src={elem.avatar_url} height={'100px'} width={'100px'} alt="" key={elem.login}/>
       
      })
    }
   </div>
   </>
  )
}

export default App
