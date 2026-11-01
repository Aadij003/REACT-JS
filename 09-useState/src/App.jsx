// import React, { useState } from 'react'

// const App = () => {

// let [first, setfirst] = useState(10);
// let [username, ChangeName] = useState("ABC")
// const [users, SetUsers] = useState([10,20,30,40])

//   return (
//     <div>
//       <h1>Value of a is {first} <br /> Name of user is {username} <br /> Array is {users}</h1>
//    <button onClick={()=>{
//     setfirst(20);
//     ChangeName("XYZ");
//     SetUsers([5,10,15,20])

//    }}>Click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [value, SetValue] = useState(0);
  return (
    <div className='divContainer'>
      <h1>Counter: {value}</h1>
      <button onClick={()=>{
          SetValue(value+1);
      }}>Increase</button>

      <button onClick={()=>{
        if(value>0){
          SetValue(value-1);
        }
      }}>Decrease</button>
    </div>
  )
}

export default App








