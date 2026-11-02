import React from 'react'

//  After the form is submitted,browser automatically reloads the page. Therefore to prevent this behaviour we use preventDefault function

const App = () => {

  function submitHandler(e){
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
    <div>
   <form onSubmit={(e)=>{
    submitHandler(e);
   }}>
    <input type="text" placeholder='enter your name' />
    <button>Submit</button>

  </form>
    </div>
  )
}

export default App
