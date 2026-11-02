import React, { useState } from 'react'


const App = () => {

  // const [title, setTitle] = useState('Hey')

const [title, setTitle] = useState('')

  function submitHandler(e){
    e.preventDefault();
    console.log("Form Submitted");
    setTitle('')
  }
  return (
    <div>
   <form onSubmit={(e)=>{
    submitHandler(e);
   }}>
    <input type="text"
     placeholder='enter your name'
    value={title}

    // onChange={(e)=>{
    //  console.log(e.target.value);
     
    // }} 
    onChange={(e)=>{
      setTitle(e.target.value)
    }}
  

    />
    <button>Submit</button>

  </form>
    </div>
  )
}

export default App
